import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import BabiliPlugin from "babili-webpack-plugin";
import postcssPresetEnv from "postcss-preset-env";
import AntdScssThemePlugin from "antd-scss-theme-plugin";
import TerserPlugin from "terser-webpack-plugin";

const src = path.resolve(__dirname, "src");

export default {
  mode: "production",
  entry: {
    app: src
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[chunkhash].js"
  },
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
        test: /\.jsx?$/,
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
      template: "public/index.html",
      minify: {
        collapseWhitespace: true
      }
    }),
    new AntdScssThemePlugin(
      path.join(__dirname, "src", "themes/variables.scss")
    ),
    new TerserPlugin(),
    new BabiliPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  stats: {
    colors: true,
    children: false,
    chunks: false,
    modules: false
  }
};
