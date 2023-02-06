const { Schema } = require('mongoose')
const base = require('../base')

const Dict = new Schema({
  key: {
    type: String,
    require: true
  },
  value: {
    type: String,
    require: true,
  },
  order: {
    type: Number,
    require: true
  },
  remarks: {
    type: String
  },
  ...base.timeSchema.obj
})

module.exports = {
	Dict
}