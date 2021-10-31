const Shop = require('../Shop')

!(async () => {
    await Shop.create({
        name: '沃尔玛',
        imgUrl: 'images/shop/wmt.jpeg',
        sales: 10000,
        expressLimit: 5,
        expressPrice: 0,
        slogan: '沃尔玛商店'
    },{
        name: '山姆',
        imgUrl: 'images/shop/sam.jpeg',
        sales: 10000,
        expressLimit: 5,
        expressPrice: 0,
        slogan: '山姆会员店'
    })
})()