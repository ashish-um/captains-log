/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/series/:id",
        destination: "/series/:id/1/1",
        permanent: true,
      },
      {
        source: "/series/:id/1",
        destination: "/series/:id/1/1",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.tenor.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
