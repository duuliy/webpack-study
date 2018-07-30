const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: "./src/index.js"
  },
  devtool: 'inline-source-map',
  //修改配置文件，告诉开发服务器(dev server)，在哪里查找文件：
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: ['style-loader', 'css-loader']
       }
     ]
   },
  plugins: [
      //清空dist
    new CleanWebpackPlugin(["dist"]),
    //创建新html.js
    new HtmlWebpackPlugin({
      title: "Output Management"
    }),
    //热更webpack的模块
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  }
};
