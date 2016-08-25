#!/usr/bin/env node

const chalk = require('chalk');
const argv = require('minimist')(process.argv.slice(2));

switch (argv._[0]) {
    case 'init':
        console.log(chalk.cyan('进入init模块'));
        if(argv._[1] !== undefined){
            console.log(chalk.green('项目名称:',argv._[1]));
            require('../lib/init')(argv._[1]);
        }else{
            console.log(chalk.red('错误：请输入项目名称'));
        }
        break;
    case 'server':
        console.log(chalk.cyan('进入server模块'));
        var port = 3000;
        if(argv.p !== undefined && !isNaN(argv.p) && argv.p !== true){
            port = argv.p;
        }
        console.log(chalk.green('端口:',port));
        break;
    case 'test':
        console.log(chalk.cyan('进入test模块'));
        break;
    case 'build':
        console.log(chalk.cyan('进入build模块'));
        break;
    case 'publish':
        console.log(chalk.cyan('进入publish模块'));
        break;
    default:
        console.log(chalk.red('错误：uba 执行命令不正确！'));
        break;
}
console.log(argv);
