const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { spawn } = require("child_process");
const postcssPresetEnv = require("postcss-preset-env");
const lessToJs = require("less-vars-to-js");
const fs = require("fs");

// Theme
const themeLess = path.join(__dirname, "src/themes/antd-theme.less");
const theme = lessToJs(fs.readFileSync(themeLess, "utf8"));

// Any directories you will be adding code/files into, need to be added to this array so webpack will pick them up
const defaultInclude = path.resolve(__dirname, "src");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader", options: { singleton: true } },
          { loader: "css-loader" },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()]
            }
          }
        ],
        include: defaultInclude
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: "babel-loader"
        },
        include: defaultInclude
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "less-loader",
            options: {
              modifyVars: theme,
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [{ loader: "file-loader?name=img/[name]__[hash:base64:5].[ext]" }],
        include: defaultInclude
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          { loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]" }
        ],
        include: defaultInclude
      }
    ]
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  devtool: "cheap-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    stats: {
      colors: true,
      chunks: false,
      children: false
    },
    before() {
      spawn("electron", ["."], {
        shell: true,
        env: process.env,
        stdio: "inherit"
      })
        .on("close", code => process.exit(0))
        .on("error", spawnError => console.error(spawnError));
    }
  }
};
