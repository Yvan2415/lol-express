const mongoose = require('../db')();
const user = require('../db/user');

const Users = mongoose.model('User', user.User)

/**
 * @description 用户注册
 */
function register(req, res, next){
  let data = req.body
  const user = new Users(data)
  user.save()
  res._message = '注册成功'
  next()
}

/**
 * @description 用户列表查询
 */
async function list(req, res, next){
  const list = await Users.find()
  res._data = list
  next()
}

/**
 * @description 通过id查询用户
 */
async function userInfo(req, res, next){
  const id = req.params.id
  const list = await Users.find({
    _id: id
  })
  res._data = list[0]
  next()
}

/**
 * @description 用户更新
 */
async function update(req, res, next){
  const id = req.params.id
  await Users.updateOne(
    { _id: id },
    { $set: req.body }
  )
  res._message = '更新成功'
  next()
}

/**
 * @description 删除用户
 */
async function deleteUser(req, res, next){
  const id = req.params.id
  let result = await Users.deleteOne({ _id: id })
  res._message = '删除成功'
  console.log(result)
  next()
}

module.exports = {
  register,
  list,
  userInfo,
  update,
  deleteUser
}