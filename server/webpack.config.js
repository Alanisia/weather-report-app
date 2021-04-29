module.exports = {
  entry: ['./index.js', './city-api-util.js'],
  output: {
    filename: 'server.js',
    path: __dirname + '/dist'
  },
  target: 'node',
  mode: 'production'
};
