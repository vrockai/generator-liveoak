'use strict';
var util = require('util');
var URL = require('url');
var path = require('path');
var yeoman = require('yeoman-generator');
var angular = require('generator-angular');
var yosay = require('yosay');
var chalk = require('chalk');

var LiveoakGenerator = yeoman.generators.Base.extend({

  initializing: function () {
    this.pkg = require('../package.json');

    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
  },

  prompting: function () {
    var done = this.async();

    console.log(chalk.green('     ______       '));
    console.log(chalk.green('   .(o#%@o'+chalk.bold.green(')'+chalk.white(').       _      _            ____        _    '))));
    console.log(chalk.green('  (o%#@#%#%o'+chalk.bold.green(')'+chalk.green(')     | |    (_)          / __ \\      | |  '))));
    console.log(chalk.green('   (o%#@#$%o'+chalk.bold.green(')'+chalk.green(')     | |     ___   _____| |  | | __ _| | __'))));
    console.log(chalk.green('    (o%#%o'+chalk.bold.green(')'+chalk.green.reset(')       | |    | \\ \\ / / _ \\ |  | |/ _` | |/ /'))));
    console.log(chalk.bold.gray('      \\\\//         '+chalk.dim.green('| |____| |\\ V /  __/ |__| | (_| |   < ')));
    console.log(chalk.bold.gray('     __||__        '+chalk.dim.green('|______|_| \\_/ \\___|\\____/ \\__,_|_|\\_\\')));
    console.log(chalk.bold.gray('    ///\\\\\\\\\\'));
    console.log(chalk.dim.gray  ('                  '+ chalk.bold.magenta('Welcome to the LiveOak project generator!\n\n')));

    this.prompt([{
      type: 'input',
      name: 'serverPrefix',
      message: 'What\'s the URL (including port) of your LiveOak server?',
      default: 'http://localhost:8080'
    }], function (props) {
      this.serverPrefix = props.serverPrefix;
      var url = URL.parse(this.serverPrefix);
      this.serverHost = url.hostname;
      this.serverPort = url.port;
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.dest.mkdir('app');
      this.dest.mkdir('app/templates');
      this.dest.mkdir('app/scripts');
      this.dest.mkdir('app/scripts/controllers');
      this.dest.mkdir('app/views');

      this.template('index.html', 'app/index.html');
      this.src.copy('views/main.html', 'app/views/main.html');

      this.template('scripts/app.js', 'app/scripts/app.js');
      this.template('scripts/controllers/main.js', 'app/scripts/controllers/main.js');
      this.template('scripts/services/liveoak.js', 'app/scripts/services/liveoak.js');

      this.template('_Gruntfile.js', 'Gruntfile.js');

      this.template('_bowerrc', '.bowerrc');
      this.template('_bower.json', 'bower.json');
      this.template('_package.json', 'package.json');
      this.template('_application.json', 'application.json');

      this.src.copy('.gitignore', 'app/templates/.gitignore');
    },

    projectfiles: function () {
      this.src.copy('editorconfig', '.editorconfig');
      this.src.copy('jshintrc', '.jshintrc');
    }
  },

  end: function () {
    this.installDependencies();
  }

});

module.exports = LiveoakGenerator;
