var yeoman = require('yeoman-environment');
var env = yeoman.createEnv();

env.register(require.resolve('./generator/generator-gr/generators/pattern'), 'gr');

env.run('gr');
