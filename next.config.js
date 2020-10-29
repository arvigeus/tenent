const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const withSvgr = require("next-svgr");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
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
    [
      withCSS,
      {
        webpack: (config) => {
          config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
              loader: "url-loader",
              options: {
                limit: 100000,
              },
            },
          });

          config.plugins.push(
            new MonacoWebpackPlugin({
              // Add languages as needed...
              languages: ["javascript", "typescript"],
              filename: "static/[name].worker.js",
            })
          );

          return config;
        },
      },
    ],
    withSvgr,
    // your other plugins here
  ],
  nextConfig
);
