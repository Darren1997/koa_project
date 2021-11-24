const router = require('koa-router')()
const { SuccessModel, ErrorModel } = require('../re-model/index')
const { getHotList, getShopInfo, getProducts } = require('../controller/shop')

router.prefix('/api/shop')

//获取商店列表
router.get('/hot-list', async function(ctx, next) {
    const list = await getHotList()
    ctx.response.body = new SuccessModel(list)
})

//获取商店详情
router.get('/:id', async function(ctx, next) {
    const shopId = ctx.params.id
    const shopInfo = await getShopInfo(shopId)
    ctx.response.body = new SuccessModel(shopInfo)
})

// 获取某个商店的产品列表
router.get('/:id/products', async function(ctx, next){
    const shopId = ctx.params.id
    const tab = ctx.query.tab || 'all'
    const productList = await getProducts(shopId, tab)
    ctx.response.body = new SuccessModel(productList)
})

module.exports = router