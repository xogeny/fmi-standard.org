// load the default config generator.
var genDefaultConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (config, env) {
    var config = genDefaultConfig(config, env);

    config.module.loaders.push({
        test: /\.tsx$/,
        loader: 'awesome-typescript-loader'
    })
    config.module.loaders.push({
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
    })

    config.plugins.push(new CopyWebpackPlugin([
        // {output}/file.txt
        { from: '../results.json', to: "results.json" }
    ], { debug: false }));

    config.resolve.extensions.push(".tsx");
    config.resolve.extensions.push(".ts");

    return config;
};
