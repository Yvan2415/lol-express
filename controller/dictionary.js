const mongoose = require('../db')();
const dict = require('../db/dictionary');

// 操作字典的集合
const Dictonary = mongoose.model('Dictionary', dict.Dict)

console.log(Dictonary, '123123')

module.exports = {

}