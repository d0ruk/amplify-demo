const webpack = require("webpack");
const { resolve } = require("path");
const { name } = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Jarvis = require("webpack-jarvis");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env = {}) => {
  const isProd = env.production;
  const SRC_PATH = resolve("src");
  const DIST_PATH = resolve("build");

  const toAppend = isProd
    ? [
        new CleanWebpackPlugin([resolve("build/**/**.**")]),
        new BundleAnalyzerPlugin()
      ]
    : [new webpack.HotModuleReplacementPlugin(), new Jarvis({ port: 1337 })];

  return {
    mode: isProd ? "production" : "development",
    entry: [resolve("src")],
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
                [
                  "@babel/preset-env",
                  {
                    // debug: !isProd,
                    useBuiltIns: "entry",
                    targets: {
                      browsers: "last 3 versions"
                    }
                  }
                ],
                "@babel/preset-react"
              ],
              plugins: [
                "@babel/transform-runtime",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-syntax-async-generators"
              ]
            }
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: isProd ? MiniCssExtractPlugin.loader : "style-loader"
            },
            "css-loader"
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: name,
        template: resolve(SRC_PATH, "index.html")
      }),
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify(
          isProd ? "production" : "development"
        )
      }),
      new MiniCssExtractPlugin({
        filename: isProd ? "[name].[hash].css" : "[name].css",
        chunkFilename: isProd ? "[id].[hash].css" : "[id].css"
      })
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
      historyApiFallback: true,
      stats: { modules: false },
      overlay: true,
      contentBase: DIST_PATH
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
      warnings: true
    },
    optimization: {
      runtimeChunk: "single",
      splitChunks: {
        // chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            chunks: "all",
            name(module) {
              // https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];

              return `npm.${packageName.replace("@", "")}`;
            }
          }
        }
      }
    }
  };
};
