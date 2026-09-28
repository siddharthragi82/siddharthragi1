/** @type {import('next').NextConfig} */

// STATIC_EXPORT=1 builds a fully static copy of the site into /out (handy for
// previews or hosts other than Vercel). Normal Vercel deploys don't need it.
const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  ...(isStaticExport ? { output: "export", trailingSlash: true } : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    // next/image optimisation needs a server; static exports serve the originals.
    unoptimized: isStaticExport,
  },
};

export default nextConfig;
