/*
 * @Author: your name
 * @Date: 2020-11-21 08:37:09
 * @LastEditTime: 2020-11-21 08:58:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lerna-demo/packages/lib/lib/lib.js
 */
'use strict';
const myApp = require('my-app');

module.exports = lib;

function lib() {
    console.log('Come to lib inner');
    // TODO
    myApp();
}

console.log('lib outsider');