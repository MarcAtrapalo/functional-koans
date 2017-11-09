const path = require('path');

module.exports = {
    entry: './src/main.spec.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
};
