import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { spawn } from "child_process";
import postcssPresetEnv from "postcss-preset-env";
import AntdScssThemePlugin from "antd-scss-theme-plugin";

const defaultInclude = path.resolve(__dirname, "src");

export default {
  mode: "development",
  entry: {
    app: defaultInclude
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "file-loader?name=[name]__[hash:base64:5].[ext]"
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()]
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          AntdScssThemePlugin.themify({
            loader: "sass-loader"
          })
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          AntdScssThemePlugin.themify({
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          })
        ]
      }
    ]
  },
  target: "electron-renderer",
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new AntdScssThemePlugin("./src/themes/variables.scss")
  ],
  devtool: "cheap-source-map",
  devServer: {
    hot: true,
    inline: true,
    host: "0.0.0.0",
    headers: { "Access-Control-Allow-Origin": "*" },
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
