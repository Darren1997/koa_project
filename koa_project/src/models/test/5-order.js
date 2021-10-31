const Order = require('../Order')
const Address = require('../Address')
const Product = require('../Product')

!(async () => {
    const requestBody = {
        username: '13112115561',
        shopId: '617a69abc1130b6604e2f286',
        addressId: '617e8119811cf2adbd25196f',
        shopName: '沃尔玛',
        isCanceled: false,
        products: [
            {
                productId: '617a6fb6e334c41206e35ca8',
                num: 4
            }, {
                productId: '617a6fb6e334c41206e35ca9',
                num: 7
            }
        ]
    }

    const addressId = requestBody.addressId
    const preAddress = await Address.findById(addressId)
    const proAddress = {
        city: preAddress.city,
        department: preAddress.department,
        houseNumber: preAddress.houseNumber,
        name: preAddress.name,
        phone: preAddress.phone
    }
    const productIds = requestBody.products.map(product => product.productId)

    const productList = await Product.find({
        _id: {
            $in: productIds
        }
    })

    const productListWithSales = productList.map(p => {
        const _id = p._id.toString()
        const filterProducts = requestBody.products.filter(item => item.productId == _id)
        if(filterProducts.length == 0)  throw Error('未找到匹配的销售数据！')
        return {
            product: {
                shopId: p.shopId,
                name: p.name,
                imgUrl: p.imgUrl,
                sales: p.sales,
                price: p.price,
                oldPrice: p.oldPrice,
                tabs: [...p.tabs]
            },
            orderSales: filterProducts[0].num
        }
    })

    await Order.create({
        username: requestBody.username,
        shopId: requestBody.shopId,
        shopName: requestBody.shopName,
        isCanceled: false,
        address: proAddress,
        products: productListWithSales
    })
    
    // console.log(proAddress, productListWithSales)
})()

