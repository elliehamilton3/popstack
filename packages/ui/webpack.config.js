/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.tsx',
  },

  node: {
    fs: 'empty',
  },

  output: {
    filename: '[name].[hash].bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/',
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.yaml'],
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: '/node_modules/',
      },

      {
        test: /\.svg$/,
        loader: 'url-loader',
      },

      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'image/png',
            name: './src/assets/image/[name].[hash].[ext]',
          },
        },
      },

      {
        test: /\.(jpg|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'image/jpeg',
            name: './src/assets/image/[name].[hash].[ext]',
          },
        },
      },
      {
        test: /\.(ttf|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-ttf',
            name: './src/assets/font/[name].[ext]',
          },
        },
      },

      {
        test: /\.(js)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: './src/assets/[name].[hash].[ext]',
          },
        },
      },


      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            name: './src/assets/font/[name].[hash].[ext]',
          },
        },
      },

      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.ejs`,
      inject: 'body',
      favicon: "./src/assets/favicon.svg"
    }),
    new webpack.DefinePlugin({
      'process.env': ((envs) => {
        let output = {};
        Object.entries(envs).forEach(([key, value]) => {
          if (key.startsWith("API_")) {
            output[key] = JSON.stringify(value);
          }
        });
        return output;
      })(process.env)
    }),
  ],
};
