import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "nestopa-sites-staging.sgp1.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      }
    ],
  },
};

export default withNextIntl(nextConfig);
