const express = require('express');
const router = express.Router();

const usersRouter = require('./users');
const dictRouter = require('./dictionary');

// 默认路由
router.get('/', (req, res) => {
	res.send('hello express lol')
})

// 用户路由
router.use('/user', usersRouter)

// 字典路由
router.use('/dict', dictRouter)

module.exports = router;
