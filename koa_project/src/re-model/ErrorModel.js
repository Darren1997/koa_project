/**
 * @description 错误返回的数据格式
 */

class ErrorModel{
    constructor(code=-1, message='未知错误！'){
        this.code = code
        this.message = message
    }
}

module.exports = ErrorModel