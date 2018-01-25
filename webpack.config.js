const webpack = require("webpack");
const { resolve } = require("path");
const { name } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Jarvis = require("webpack-jarvis");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = env => {
  const isProd = env === "prod";
  const SRC_PATH = resolve("src");
  const DIST_PATH = resolve("build");

  const toAppend = isProd
    ? [new CleanWebpackPlugin([resolve("build/**/**.**")]),
      new webpack.optimize.CommonsChunkPlugin({
        name: "vendor",
        filename: "vendor.[hash:7].js",
        minChunks: m => m.context && m.context.includes("node_modules")
      }),
      new webpack.optimize.CommonsChunkPlugin({ name: "runtime" }),
      new UglifyJsPlugin({
        test: /.jsx?$/,
        uglifyOptions: {
          ie8: false,
          ecma: 6,
          // compress: false,
        },
        sourceMap: true,
      })]
    : [new webpack.HotModuleReplacementPlugin(),
      /*new Jarvis({ port: 8081 })*/];
  
  return {
    entry: resolve("src"),
    output: {
      filename: "[name].[hash:7].js",
      path: DIST_PATH
    },
    module: {
      rules: [
        {
          test: /.jsx?$/,
          include: SRC_PATH,
          use: {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              presets: [
                ["@babel/preset-env", {
                  "browsers": "last 3 versions"
                }],
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/transform-runtime",
                "@babel/plugin-proposal-class-properties"
              ]
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: name,
        template: resolve(SRC_PATH, "index.html")
      }),
      new webpack.NamedModulesPlugin()
    ].concat(toAppend),
    resolve: {
      extensions: [".js", ".json", ".jsx"],
      alias: {
        "~": SRC_PATH
      }
    },
    devtool: isProd ? "hidden-source-map" : "source-map",
    devServer: {
      hot: true,
      compress: true,
      // noInfo: true,
      overlay: true
    },
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
    },
  }
}