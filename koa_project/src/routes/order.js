const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../re-model/index')
const { createOrder } = require('../controller/order')

// 创建订单
router.prefix('/api/order')

router.post('/', loginCheck, async function(ctx, next){
    const data = ctx.request.body
    try {
        const createOrderResult = await createOrder(data)
        ctx.response.body = new SuccessModel(createOrderResult)
    } catch (e) {
        ctx.response.body = new ErrorModel(406, `创建订单错误---${e.message}`)
    }
})

module.exports = router