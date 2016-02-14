var path = require('path');
var webpack = require("webpack");

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    // Entry accepts a path or an object of entries.
    // The build chapter contains an example of the latter.
    entry: [
        PATHS.app+"/index.jsx" // Your appʼs entry point
    ],
    output: {
        path: PATHS.build,
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot','babel'],
                include: PATHS.app
            }
        ]
    }
};
