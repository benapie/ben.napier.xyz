const path = require("path");
const webpack = require("webpack");
const PACKAGE = require("./package.json");
const WebpackReactComponentNamePlugin = require("webpack-react-component-name");

const createStyledComponentsTransformer =
  require("typescript-plugin-styled-components").default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg/,
        use: {
          loader: "svg-url-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.join(__dirname, "/"),
      watch: true,
    },
    historyApiFallback: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        APP_VERSION: JSON.stringify(PACKAGE.version),
      },
    }),
    new WebpackReactComponentNamePlugin(),
  ],
};
