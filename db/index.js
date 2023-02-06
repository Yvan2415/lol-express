/**
 * 连接monogoDB数据库
 */
const mongoose = require('mongoose')
const config = require('../config')

mongoose.set('strictQuery', false);

mongoose.connect(config.mongURL, (err, res) => {
	if(err) throw err
	console.log('数据库连接成功');
	callback(mongoose)
})

function callback(){
	return mongoose
}

module.exports = callback