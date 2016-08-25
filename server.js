var config = require("./webpack.config.js");
var webpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");
//config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
    hot : true
});
server.listen(8080,function(){
    console.log("http://localhost:8080");
});