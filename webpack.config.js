var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "./dist/bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.jsx' as resolvable extension.
        extensions: ["", ".webpack.js", ".web.js", ".js", ".jsx"]
    },

    module: {
        loaders: [
            // All files with a '.jsx' extension will be handled by 'babel'.
            { 
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/, 
                loader: "babel", 
                query:
                  {
                    presets: [
                        'babel-preset-es2015',
                        'babel-preset-react',
                        'babel-preset-stage-0',
                      ].map(require.resolve),
                  }
            }
        ],

        preLoaders: [
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        'react-dom': 'ReactDOM'
    },
};
