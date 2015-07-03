module.exports = function() {
  var clients = './src/client/';

  var config = {

    temp: './.tmp',

    /*
    * All file parths
    */
    //all JS that I want to vet
    alljs: [
      './src/**/*.js',
      './*.js'
    ],

    less: clients + 'styles/styles.less'
  };

  return config;
};
