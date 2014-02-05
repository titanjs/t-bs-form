var config = {
  ns: 'form'
, filename: __filename
, scripts: {
    input: require("./input")
  , controls: require("./controls")
  , textarea: require("./textarea")
  }
};

module.exports = function(app, options) {
  app.createLibrary(config, options);
};
