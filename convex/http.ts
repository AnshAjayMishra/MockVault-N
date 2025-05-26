import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { Webhook } from "svix";
import { api } from "./_generated/api";

interface WebhookEvent {
  type: string;
  data: {
    id: string;
    email_addresses: Array<{ email_address: string }>;
    first_name?: string;
    last_name?: string;
    image_url?: string;
  };
}

const http = httpRouter();

http.route({
  path: "/clerk-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable");
    }

    const svixId = request.headers.get("svix-id");
    const svixSignature = request.headers.get("svix-signature");
    const svixTimestamp = request.headers.get("svix-timestamp");

    if (!svixId || !svixSignature || !svixTimestamp) {
      return new Response("No svix headers found", { status: 400 });
    }

    const payload = await request.text();
    const wh = new Webhook(webhookSecret);

    try {
      const evt = wh.verify(payload, {
        "svix-id": svixId,
        "svix-timestamp": svixTimestamp,
        "svix-signature": svixSignature,
      }) as WebhookEvent;

      if (evt.type === "user.created") {
        const { id, email_addresses, first_name, last_name, image_url } = evt.data;
        
        const email = email_addresses[0]?.email_address;
        if (!email) {
          return new Response("No email found", { status: 400 });
        }

        const name = [first_name, last_name].filter(Boolean).join(" ");
        
        await ctx.runMutation(api.users.syncUser, {
          clerkId: id,
          email,
          name: name || "",
          image: image_url || "",
        });
      }

      return new Response("Webhook processed successfully", { status: 200 });

    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Invalid signature", { status: 401 });
    }
  }),
});

export default http;