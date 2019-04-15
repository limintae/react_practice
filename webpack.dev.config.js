const webpack = require('webpack');
const path = require('path');

module.exports = {

    //개발시 서버를 계속 올렷다 내렷다하지않고 실시간 반영하기위한 추가 로딩파일들
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/App.js'
    ],

    devtool: 'inline-source-map',

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        inline: true,
        port: 3000,
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015', {modules: false}],
                                'react'
                            ],
                            plugins: ['react-hot-loader/babel']
                        }
                    }
                ]
            }
        ]
    }
};
