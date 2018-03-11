module.exports = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx', ' ']
  },
  module: {
    rules: [{
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: "class-to-classname"
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}