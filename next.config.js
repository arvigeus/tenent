const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withSvgr = require("next-svgr");
const checkEnv = require("@47ng/check-env").default;

const __DEV__ = process.env.NODE_ENV !== "production";

// Environment variables
checkEnv({
  required: ["NEXT_PUBLIC_DEPLOYMENT_URL"],
});

const nextConfig = {
  devIndicators: { autoPrerender: false },
};

module.exports = withPlugins(
  [
    withPWA({
      pwa: {
        disable: __DEV__,
        dest: "public",
        runtimeCaching,
      },
    }),
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === "true",
    }),
    withSvgr,
    // your other plugins here
  ],
  nextConfig
);
