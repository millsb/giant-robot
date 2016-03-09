'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var changeCase = require('change-case');
var path = require('path');

var patternBasePath = 'src/app/patterns';

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the polished ' + chalk.red('generator-gr') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'patternName',
        message: 'Give your pattern a name',
        default: 'pattern-name'
      },
      {
        type: 'list',
        name: 'patternType',
        message: 'Where should we put this pattern?',
        choices: ['atoms', 'molecules', 'organisms', 'templates'],
        default: 'molecules'
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.folder = props.patternType + path.sep + selectorName(props.patternName);
      this.componentFile = this.folder + path.sep + componentName(props.patternName) + '.ts';
      this.htmlFile = this.folder + path.sep + selectorName(props.patternName) + '.html';
      this.componentName = componentName(props.patternName);
      this.selectorName = selectorName(props.patternName);
      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('component.ts'),
      this.destinationPath('src/app/patterns/' + this.componentFile),
      {
        componentName: this.componentName,
        selectorName: this.selectorName,
        htmlFile: this.htmlFile
      }
    );

    this.fs.copy(
      this.templatePath('component.html'),
      this.destinationPath(patternBasePath + path.sep + this.htmlFile)
    )
  }
});

function componentName(patternName) {
  return changeCase.pascalCase(patternName);
}

function selectorName(patternName) {
  return changeCase.paramCase(patternName);
}
