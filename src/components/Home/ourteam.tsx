import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

function TeamSection() {
  return (
    <Element name="ourteam" className="element">
      <div className="max-w-7xl mx-auto  px-8 text-center">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 mb-6 rounded-full bg-zinc-800/50 border border-zinc-700/50 text-sm font-medium text-zinc-400">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-white">Meet the</span>{" "}
                <span className="text-purple-400">visionaries</span>
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                A diverse group of creative minds united by a shared passion for
                building extraordinary products.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Ansh Ajay Mishra",
                  role: "Founder & CEO",
                  image: "/team/ansh.jpg",
                },
                {
                  name: "Sam Rivera",
                  role: "Chief Technology Officer",
                  image: "/team/1.jpg",
                },
                {
                  name: "Taylor Chen",
                  role: "Head of Design",
                  image: "/team/2.png",
                },
                {
                  name: "Jordan Lee",
                  role: "Product Director",
                  image: "/team/3.png",
                },
              ].map((member, index) => (
                <div key={index} className="group">
                  <div className="relative mb-5 overflow-hidden rounded-xl border border-zinc-800 aspect-square">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl text-white font-bold">
                    {member.name}
                  </h3>
                  <p className="text-purple-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
}

export default TeamSection;
