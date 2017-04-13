const path = require('path');

module.exports = {
    entry: {
        client : './src/client/client.jsx'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './js/develop')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};