const { Schema } = require('mongoose')

const base = require('../base')

const User = new Schema({
	username: {
		type: String,
		require: true
	},
	telephone: String,
	nickname: String,
	sex: Number, // 0, 1 / 男， 女
	...base.TimeSchema
})

module.exports = {
	User
}