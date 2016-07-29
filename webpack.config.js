var path = require('path');
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname,'src'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.css$/, 
                loader: "style!css"
            }
        ]
    }
};