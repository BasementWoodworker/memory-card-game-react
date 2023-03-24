const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Memory Card Game (ReactJS)"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/i,
        type: "asset/resource"
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  devServer: {
    static: "./dist"
  },
  optimization: {
    runtimeChunk: "single"
  },
  mode: "production"
}