// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const packageInfo = require("./package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require('vue-loader');

const isProduction = process.env.NODE_ENV == "production";

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, `dist/${packageInfo.name}`),
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new VueLoaderPlugin()

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader",
        }, {
          loader: "css-loader",
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
      {
        test: /\.vue$/i,
        use: "vue-loader"
      },
      {
        test: /.ts$/,
        use: [{
            loader: 'ts-loader',
            options: {
                appendTsSuffixTo: [/.vue$/],
            }
        }]
      },
      // {
      //   test: /\.styl$/,
      //   loader: "stylus-loader", // compiles Styl to CSS
      // },
      

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", "..."],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
