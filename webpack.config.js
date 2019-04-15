const webpack = require('webpack');
const path = require('path');
//process.traceDeprecation = true;

//빌드 환경설정
module.exports = {
    //최초접근파일 (최상위 빌드파일)
    entry: './src/App.js',

    //생성되는 exe파일(산출파일)의 이름이나 경로
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },

    //webpack에서 만들어주는 소스맵, 난독화된 스크립트 복호화(개발자 편의성)
    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

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
                                ['es2015', {modules: false}], //es2016으로 작성된 script를 es2015로 번역
                                'react' //react언어로 번역
                            ]
                        }
                    }
                ]
            }
        ]
    }
};
