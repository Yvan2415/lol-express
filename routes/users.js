const express = require('express');
const router = express.Router();
const { 
  register,
  list,
  userInfo,
  update,
  deleteUser
} = require('../controller/user')


// 注册
router.post('/register', register);
// 列表
router.get('/list', list);
// 获取用户信息
router.get('/:id', userInfo);
// 更新用户信息
router.post('/update/:id', update);
// 删除用户
router.delete('/del/:id', deleteUser);


module.exports = router;
