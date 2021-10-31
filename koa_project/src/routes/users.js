const router = require('koa-router')()
const { register } = require('../controller/user')

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
    ctx.response.body = {
      errno: 0,
      newUser: newUser
    }
  }catch(e){
    ctx.response.body = {
      errno: 1001,
      message: `注册失败 --- ${e.message}`
    }
  }
})

module.exports = router
