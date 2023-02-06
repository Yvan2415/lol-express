const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { uniReturn } = require('./middleware');

const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 日志打印
app.use(logger('dev'));
// 处理application/json数据
app.use(express.json());
// 处理application/form数据
app.use(express.urlencoded({ extended: false }));
// 解析cookie
app.use(cookieParser());
// 加载静态资源
app.use(express.static(path.join(__dirname, 'public')));

// 路由加载
app.use(indexRouter);

// 数据操作正常,统一返回格式
app.use(uniReturn)

// 页面404
app.use(function(req, res, next) {
  next(createError(404));
});

// 错误处理
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
