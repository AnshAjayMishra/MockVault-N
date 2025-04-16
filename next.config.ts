import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
  /* config options here */
=======
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      type: "asset/resource",
    });
    return config;
  },
>>>>>>> a8d20dc45006c021288851ab400b027de99a574f
};

export default nextConfig;
