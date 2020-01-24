module.exports={
    entry:'./src/Front/app/index.js',
    output:{
        path: __dirname +'/src/Front/public',
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                use:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
}