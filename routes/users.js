const express = require('express');
const router = express.Router();
const { 
  register,
  list,
  userInfo,
  update
} = require('../controller/user')


// 注册
router.post('/register', register);
// 列表
router.get('/list', list);
// 获取用户信息
router.get('/:id', userInfo);
// 获取用户信息
router.post('/update/:id', update);


module.exports = router;
