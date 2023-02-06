const { Schema } = require('mongoose')

// 数据操作时间
const timeSchema = new Schema({
	creteTime: {
		type: Date,
		default: Date.now
	},
	updateTime: {
		type: Date,
		default: Date.now
	}
})

module.exports = {
	timeSchema
}