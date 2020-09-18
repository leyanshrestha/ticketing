module.exports = {
  webpackDevMidddleware: config => {
    config.watchOptions.poll = 300;
    return config;
  }
};
