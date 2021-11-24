/**
 * @description Order Controller
 */

const Address = require('../models/Address')
const Product = require('../models/Product')
const Order = require('../models/Order')


// 创建订单
async function createOrder(data){
    // console.log(data)
    const addressId = data.addressId
    const preAddress = await Address.findById(addressId)
    const proAddress = {
        city: preAddress.city,
        department: preAddress.department,
        houseNumber: preAddress.houseNumber,
        name: preAddress.name,
        phone: preAddress.phone
    }
    const productIds = data.products.map(product => product.productId)
    const productList = await Product.find({
        _id: {
            $in: productIds
        }
    })
    const productListWithSales = productList.map(item => {
        const id = item._id.toString()
        const filterProducts = data.products.filter(product => product.productId == id)
        if(filterProducts.length === 0) throw Error('未找到匹配的销售数据！')
        return {
            product: {
                shopId: item.shopId,
                name: item.name,
                imgUrl: item.imgUrl,
                sales: item.sales,
                price: item.price,
                oldPrice: item.oldPrice,
                tabs: [...item.tabs]
            },
            orderSales: filterProducts[0].num
        }
    })
    const createOrderResult = await Order.create({
        username: data.username,
        shopId: data.shopId,
        shopName: data.shopName,
        isCanceled: data.isCanceled,
        address: proAddress,
        products: productListWithSales
    })
    return createOrderResult
}

module.exports = {
    createOrder
}