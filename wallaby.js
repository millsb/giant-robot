var wallabyWebpack = require('wallaby-webpack');
const webpackConfig = require('./webpack.config.js');
const webpackTestingConfig = {
    entryPatterns: [
        'test/unit.wallaby.js',
        'src/**/*.spec.js'
    ],

    module: {
        loaders: [
            {test: /\.css$/, loader: 'raw-loader'},
            {test: /\.html$/, loader: 'raw-loader'}
        ]
    }
};

var wallabyPostprocessor = wallabyWebpack(webpackTestingConfig);

module.exports = function (wallaby) {
    return {
        debug: true,
        files: [
            { pattern: 'test/unit.wallaby.js', load: false },
            { pattern: 'typings.d.ts', load: false },
            { pattern: 'src/**/*.ts', load: false },
            { pattern: 'src/**/*.spec.ts', ignore: true },
            { pattern: 'src/**/*.css', load: false },
            { pattern: 'src/**/*.html', load: false }
        ],

        tests: [
            { pattern: 'src/**/*.spec.ts', load: false }
        ],

        testFramework: 'jasmine',
        postprocessor: wallabyPostprocessor,
        compilers: {
            'app/**/*.ts': wallaby.compilers.typeScript({
                "emitDecoratorMetadata": true,
                "experimentalDecorators": true,
                "noImplicitAny": false
            })
        },

       bootstrap: function () {
            // required to trigger test loading
            window.__moduleBundler.loadTests();
        }
    };
};
