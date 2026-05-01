/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://i.ibb.co.com/MkV7dXnK/cow.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
