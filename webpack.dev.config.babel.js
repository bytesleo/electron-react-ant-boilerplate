import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { spawn } from "child_process";
import postcssPresetEnv from "postcss-preset-env";
import AntdScssThemePlugin from "antd-scss-theme-plugin";

const src = path.resolve(__dirname, "src");
const port = process.env.PORT || 3100;
const host = `0.0.0.0`;

export default {
  mode: "development",
  entry: [
    "react-hot-loader/patch",
    `webpack-dev-server/client?http://${host}:${port}`,
    "webpack/hot/only-dev-server",
    src
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true
            }
          },
          {
            loader: "react-hot-loader/webpack"
          },
          {
            loader: "eslint-loader"
          }
        ]
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
        test: /\.(eot|otf|webp|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: "file-loader?name=font/[name]__[hash:base64:5].[ext]"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
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
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [postcssPresetEnv()]
            }
          },
          AntdScssThemePlugin.themify({
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
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
              sourceMap: true,
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
      template: "public/index.html",
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new AntdScssThemePlugin(
      path.join(__dirname, "src", "themes/variables.scss")
    ),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    })
  ],
  cache: true,
  devtool: "cheap-source-map",
  devServer: {
    host,
    port,
    contentBase: "public",
    compress: true,
    inline: true,
    lazy: false,
    hot: true,
    stats: "errors-only",
    historyApiFallback: {
      verbose: true,
      disableDotRule: false
    },
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
