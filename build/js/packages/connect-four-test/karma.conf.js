
module.exports = function(config) {

config.set({
  "singleRun": true,
  "autoWatch": false,
  "basePath": "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\packages\\connect-four-test",
  "files": [
    "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\node_modules\\kotlin-test-js-runner\\kotlin-test-karma-runner.js",
    "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\packages\\connect-four-test\\kotlin\\connect-four-test.js",
    {
      "pattern": "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\packages\\connect-four-test\\kotlin\\**\\*",
      "watched": false,
      "included": false
    }
  ],
  "frameworks": [
    "webpack-output",
    "mocha",
    "webpack"
  ],
  "client": {
    "args": [
      "--include",
      "GameTest"
    ]
  },
  "browsers": [
    "ChromeHeadless"
  ],
  "customLaunchers": {},
  "failOnFailingTestSuite": false,
  "failOnEmptyTestSuite": false,
  "reporters": [
    "karma-kotlin-reporter"
  ],
  "preprocessors": {
    "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\node_modules\\kotlin-test-js-runner\\kotlin-test-karma-runner.js": [
      "webpack",
      "sourcemap"
    ],
    "C:\\Users\\Mila\\Downloads\\project\\project\\build\\js\\packages\\connect-four-test\\kotlin\\connect-four-test.js": [
      "webpack",
      "sourcemap"
    ]
  },
  "proxies": {
    "/": "/base/kotlin/"
  }
});
config.plugins = config.plugins || [];
config.plugins.push('kotlin-test-js-runner/karma-kotlin-reporter.js');

config.loggers = [
    {
        type: 'kotlin-test-js-runner/tc-log-appender.js',
        //default layout
        layout: { type: 'pattern', pattern: '%[%d{DATETIME}:%p [%c]: %]%m' }
    }
]
config.plugins = config.plugins || [];
config.plugins.push('kotlin-test-js-runner/karma-webpack-output.js');

// webpack config
function createWebpackConfig() {
let config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// source maps
config.module.rules.push({
        test: /\.m?js$/,
        use: ["source-map-loader"],
        enforce: "pre"
});
config.devtool = false;
config.ignoreWarnings = [
    /Failed to parse source map/,
    /Accessing import\.meta directly is unsupported \(only property access or destructuring is supported\)/
]

                // optimization
                config.optimization = config.optimization || {
  "splitChunks": false
};
// KotlinWebpackCssRule[css]
;(function(config) {
            const use = [{
    loader: 'style-loader',
    options: {}
},{
    loader: 'css-loader',
    options: {}
}]
config.module.rules.push({
    test: /\.css$/,
    use: use,
    exclude: undefined,
    include: undefined,
})
})(config);

// noinspection JSUnnecessarySemicolon
;(function(config) {
    const tcErrorPlugin = require('kotlin-test-js-runner/tc-log-error-webpack');
    config.plugins.push(new tcErrorPlugin())
    config.stats = config.stats || {}
    Object.assign(config.stats, config.stats, {
        warnings: false,
        errors: false
    })
})(config);
config.experiments = {
    topLevelAwait: true,
}
// noinspection JSUnnecessarySemicolon
;(function(config) {
    const webpack = require('webpack');

    // https://github.com/webpack/webpack/issues/12951
    const PatchSourceMapSource = require('kotlin-test-js-runner/webpack-5-debug');
    config.plugins.push(new PatchSourceMapSource())
    
    config.plugins.push(new webpack.SourceMapDevToolPlugin({
        moduleFilenameTemplate: "[absolute-resource-path]"
    }))
})(config);
   return config;
}

config.set({webpack: createWebpackConfig()});


}
