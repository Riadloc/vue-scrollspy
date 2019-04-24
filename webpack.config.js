const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const resolve = function(dir) {
  return path.join(__dirname, dir);
}

let config = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/',
    chunkFilename: '[id].chunk.js'
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
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/,
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
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vue Scrollspy',
      template: './index.html'
    })
  ]
}

module.exports = (env, argv) => {
  if (env.development) {
    config.mode = 'development'
  } else if (env.production) {
    let { output, plugins } = config
    output = Object.assign(output, {
      path: resolve('lib'),
      library: 'vue-use-scrollspy',
      libraryTarget: 'umd',
      umdNamedDefine: true
    })
    plugins.pop() // delete HtmlWebpackPlugin
    config = Object.assign(config, {
      mode: 'production',
      entry: {
        scrollspy: './src/components/scrollspy.js'
      },
      output,
      plugins,
      externals: 'vue'
    })
  } else if (env.docs) {
    let { output } = config
    output = Object.assign(output, {
      path: resolve('dist'),
      publicPath: './'
    })
    config = Object.assign(config, {
      mode: 'production',
      output
    })
  }
  
  return config;
}