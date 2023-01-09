// @ts-check
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = /** @type { import('webpack').Configuration } */ ({
  entry: {
    popup: path.resolve("./src/popup/Popup.tsx"),
    options: path.resolve("./src/options/Options.tsx"),
    background: path.resolve("./src/background/background.ts"),
    contentScript: path.resolve("./src/contentScript/index.tsx"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        use: "assets/resources",
        type: "asset/resource",
        test: /\.(png|jpg|jpeg|gif|svg)$/,
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    clean: true,
    publicPath: "",
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
});

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "ReactJS chrome extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
