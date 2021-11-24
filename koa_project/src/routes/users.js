const router = require('koa-router')()
const { register, login } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../re-model/index')

router.prefix('/api/user')

// router.get('/', function (ctx, next) {
//   ctx.body = 'this is a users response!'
// })

// router.get('/bar', function (ctx, next) {
//   ctx.body = 'this is a users/bar response'
// })

router.post('/register', async function (ctx, next) {
  const { username, password } = ctx.request.body
  try{
    const newUser = await register(username, password)
    // ctx.response.body = {
    //   errno: 0,
    //   newUser: newUser
    // }
    ctx.response.body = new SuccessModel(newUser)
  }catch(e){
    // ctx.response.body = {
    //   errno: 1001,
    //   message: `注册失败 --- ${e.message}`
    // }
    ctx.response.body = new ErrorModel(1001, `注册失败  --- ${e.message}`)
  }
})


router.post('/login', async function(ctx, next){
  const {username, password} = ctx.request.body
  try {
    const res = await login(username, password)
    if (res) {
      ctx.session.userInfo = { username }
      ctx.response.body = new SuccessModel()
    }
    else ctx.response.body = new ErrorModel(1002, '登录验证失败！')
  }catch (e){
    ctx.response.body = new ErrorModel(1111, '未知错误，请联系管理员！')
  }
})

module.exports = router
