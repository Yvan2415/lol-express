/**
 * 连接monogoDB数据库
 */
const mongoose = require('mongoose')
const config = require('../config')

mongoose.set('strictQuery', true);

mongoose.connect(config.mongURL, (err, res) => {
	if(err) throw err
	callback(mongoose)
})

function callback(){
	return mongoose
}

module.exports = callback