
/**
 * @description 统一返回格式
 */
function uniReturn(req, res, next){
  let resData = {
    code: 0,
    type: 'success'
  }
  if (res._message || res._data) {
    res._message && (resData._message = res._message)
    res._data && (resData._data = res._data)
    res.status(200).json(resData)
  } else {
    next()
  }
}

module.exports = {
  uniReturn
}