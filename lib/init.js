const chalk = require('chalk');

module.exports = function(name){
    console.log(chalk.green('创建:'+name));
    var package = {
        name : name,
        version : '0.0.1',
        private : true
    };
    console.log(package);
}