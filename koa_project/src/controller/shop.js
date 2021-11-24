/**
 * @description Shop Controller
 */

const Shop = require('../models/Shop')
const Product = require('../models/Product')

// 获取商店列表
async function getHotList(){
    const list = await Shop.find().sort({sales: 1})
    return list
}

// 获取商店详情
async function getShopInfo(shopId){
    const shopInfo = await Shop.findById(shopId)
    return shopInfo
}

// 获取某个商店产品
async function getProducts(shopId, tab){
    const productList = await Product.find({
        shopId,
        tabs: {
            $in: tab
        }
    }).sort({sales: 1})
    return productList
}

module.exports = {
    getHotList, getShopInfo, getProducts
}