const path = require('path')

module.exports = {
    entry: __dirname + '/src/App.js',
    devtool: 'source-maps',
    resolve: {
        alias: {
            Components: path.resolve('src', 'components'),
            Services: path.resolve('src', 'services'),
        }
    },
    output: {
        filename: 'bundle.js',
        path: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:3]'
                        }
                    },
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    }
}