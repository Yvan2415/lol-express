const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const { response } = require('../app');

// 默认路由
router.get('/', (req, res) => {
	res.redirect('/user/list')
})

// 用户路由
router.use('/user', usersRouter)


module.exports = router;
