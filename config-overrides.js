const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = { "http": require.resolve("stream-http"),
"stream": require.resolve("stream-browserify"),
"https": require.resolve("https-browserify"),
"zlib": require.resolve("browserify-zlib"),
"url": require.resolve("url/"),
   };

  return config;
};