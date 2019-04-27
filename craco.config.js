const path = require("path");
const webpack = require("webpack");
const { whenDev, whenProd } = require("@craco/craco");
const { LicenseWebpackPlugin } = require("license-webpack-plugin");
const Jarvis = require("webpack-jarvis");

module.exports = function({ env, paths }) {
  return {
    webpack: {
      plugins: [
        new webpack.DefinePlugin({
          "process.env": {
            mode: JSON.stringify(env)
          }
        }),
        whenProd(() => new LicenseWebpackPlugin({ perChunkOutput: false })),
        whenDev(() => new Jarvis({ port: 1337 }))
      ].filter(Boolean),
      alias: {
        "~": path.join(__dirname, "src")
      }
    },
    plugins: [{ plugin: require("craco-plugin-react-hot-reload") }]
  };
};
