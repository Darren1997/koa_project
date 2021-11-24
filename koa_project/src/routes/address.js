const router = require('koa-router')()
const loginCheck = require('../middleware/loginCheck')
const { SuccessModel, ErrorModel } = require('../re-model/index')

const { createAddress, getAddressList, getAddressById, updateAddress } = require('../controller/address')

router.prefix('/api/user/address')


// 创建地址
router.post('/', loginCheck, async function(ctx, next){
    const username = ctx.session.userInfo.username
    addInfo = ctx.request.body
    try {
        const newAddress = await createAddress(username, addInfo)
        if (newAddress != null) {
            ctx.response.body = new SuccessModel(newAddress)
        } else {
            ctx.response = new ErrorModel(1004, '创建地址失败！')
        }
    } catch (e) {
        ctx.response.body = new ErrorModel(1111, '发生未知错误，请联系管理员！')
    }
})

// 获取地址列表
router.get('/', loginCheck, async function(ctx, next){
    const username = ctx.session.userInfo.username
    const list = await getAddressList(username)
    ctx.response.body = new SuccessModel(list)
})

// 获取单个地址
router.get('/:id', loginCheck, async function(ctx, next){
    const id = ctx.params.id
    console.log(id)
    const addinfo = await getAddressById(id)
    ctx.response.body = new SuccessModel(addinfo)
})

// 更新地址
router.patch('/:id', loginCheck, async function(ctx, next){
    const id = ctx.params.id
    const newAddInfo = ctx.request.body
    try {
        const updatedAddInfo = await updateAddress(id, newAddInfo)
        ctx.response.body = new SuccessModel(updatedAddInfo)
    } catch(e){
        ctx.response.body = new ErrorModel(1005, `更新地址失败---${e.message}`)
    }
    
    
})

module.exports = router