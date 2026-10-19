const nextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/meshki-dlya-ciklonnykh-filtrov/",
        destination: "/meshki-dlya-ciklonov-i-uvp/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
