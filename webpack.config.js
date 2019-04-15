const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = function(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: './'
  },
  resolve: {
    extensions: ['.js', '.vue', 'json'],
    modules: [
      resolve('node_modules'),
      resolve('src')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, './src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        include: resolve('src'),
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: resolve('src'),
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        include: resolve('src'),
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        include: resolve('src'),
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ]
  },
  devServer: {
    compress: true,
    port: 9000,
    // before: function() {
    //   console.log('> Starting dev server...')
    // },
    // after: function() {
    //   const uri = 'http://localhost:' + 9000
    //   console.log('> Listening at ' + uri + '\n')
    // }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue Scrollspy',
      filename: 'index.html',
      template: 'index.html'
    })
  ]
}