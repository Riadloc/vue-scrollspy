const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = function(dir) {
  return path.join(__dirname, dir);
}

const config = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    library: 'vue-use-scrollspy',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      resolve('node_modules'),
      resolve('src')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
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
    overlay: {
      warnings: true,
      errors: true
    },
    port: 9000,
    stats: 'errors-only'
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.plugins.push(
      new HtmlWebpackPlugin({
        title: 'Vue Scrollspy',
        template: './index.html'
      })
    )
  }
  else if (argv.mode === 'production') {
    config.entry = {
      scrollspy: './src/components/scrollspy.js'
    }
    config.externals = 'vue'
  }
  return config;
}