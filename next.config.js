module.exports = {
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index.html",
      },
      {
        source: "/api",
        destination: "/api.html"
      },
      {
        source: "/(.*)",
        destination: "/err.html"
      },
    ];
  },
};