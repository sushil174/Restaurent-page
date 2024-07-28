const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');



module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'dist'),
        clean: true,
    },

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
        watchFiles: {
            paths: ['dist/**/*.html'],

            options: {
                usePolling: true
            }
        }
    },

    plugins: [
        new htmlWebpackPlugin({
            title: 'Restaurent Page',
            template: './src/index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },

            {
                test: /\.(webp|png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },

            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    }
}