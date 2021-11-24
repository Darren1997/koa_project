/**
 * @description 登录验证中间件
 * @author fhk
 */

const { ErrorModel } = require('../re-model/index')

module.exports = async (ctx, next) => {
    const session = ctx.session
    if (session && session.userInfo) {
        await next()
        return
    }
    ctx.body = new ErrorModel(1003, 'session登录信息验证失败！')
    // ctx.body = {
    //     errno: -1,
    //     message: '登录验证失败'
    // }
}