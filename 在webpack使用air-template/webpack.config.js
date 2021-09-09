const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
    mode:'development',
    entry:{
        index:'./src/index.js',
        list:'./src/list.js'
    },
    output:{
        path:resolve('dist'),
        filename:'js/[name].js'
    },
    devtool:'cheap-module-eval-source-map',
    module:{
        rules:[
            {
                test:/\.art$/,
                loader:'art-template-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.art',
            chunks:['index']
        }),
        new HtmlWebpackPlugin({
            filename:'list.html',
            template:'./src/list.art',
            chunks:['list']
        })
    ]
};