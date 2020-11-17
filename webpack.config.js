const path = require('path');
const htmlWpPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();
module.exports = env => {
    console.log('API', process.env.REACT_APP_GOOGLE_KEY);
    return {
    
    //entry point for app is index.js
    entry: path.resolve(__dirname, './public/index.js'),
    //allows routes to fall back to index.html code
    devServer: { //for running dev server locally
        //this directs the loader to the html file
        
        contentBase: path.resolve(__dirname, './public'),
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                //for compiling react code and jsx
                test:/\.js$/,
                // include: './client/app.js',
                // exclude: '/node_modules/',
                use: 'babel-loader'
            },

            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
              },

              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },

              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                'file-loader',
                ],
              },

             
        ]
    },
    //output filename
    output: {
        // path: path.resolve(__dirname, './public'),
        filename: 'bundle.js'
    },

    //for webpack to read.env files
    node: {
        fs: "empty"
     },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.REACT_APP_GOOGLE_KEY': JSON.stringify(process.env.REACT_APP_GOOGLE_KEY || 'development'),
            'process.env.User_API': JSON.stringify(process.env.User_API || 'development')
        }),
    ]

    // plugins: [
    //     new htmlWpPlugin({
    //       template: './public/index.html'
    //     })
    // ]

}

}
//module/rules can be for supporting other file types
    //we'll use babel-loader for js files

//watch for webpack that shows us progress
//"watch": "webpack-dev-server --progress"
//npm add -D adds as dev dependencies
//@babel/core @babel/preset-env @babel/preset-react babel-loader
//first 3 are for babel, and last is for webpack