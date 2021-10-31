const Product = require('../Product')

!(async () => {
    // await Product.create({
    //     shopId: '617a69abc1130b6604e2f287',
    //     name: '苹果',
    //     imgUrl: 'images/product/apple.jpeg',
    //     sales: 300,
    //     price: 5,
    //     oldPrice: 10,
    //     tabs: ['all', 'seckill', 'frauts']
    // }, {
    //     shopId: '617a69abc1130b6604e2f287',
    //     name: '葡萄',
    //     imgUrl: 'images/product/grape.jpg',
    //     sales: 30,
    //     price: 15,
    //     oldPrice: 30,
    //     tabs: ['all', 'seckill', 'frauts']
    // }, {
    //     shopId: '617a69abc1130b6604e2f287',
    //     name: '桃子',
    //     imgUrl: 'images/product/peach.jpg',
    //     sales: 600,
    //     price: 11,
    //     oldPrice: 10,
    //     tabs: ['all',  'frauts']
    // }, {
    //     shopId: '617a69abc1130b6604e2f287',
    //     name: '西瓜',
    //     imgUrl: 'images/product/watermelon.jpg',
    //     sales: 1000,
    //     price: 2.5,
    //     oldPrice: 2,
    //     tabs: ['all', 'frauts']
    // }, {
    //     shopId: '617a69abc1130b6604e2f286',
    //     name: '西瓜',
    //     imgUrl: 'images/product/watermelon.jpg',
    //     sales: 1032,
    //     price: 2,
    //     oldPrice: 2.3,
    //     tabs: ['all', 'seckill', 'frauts']
    // }, {
    //     shopId: '617a69abc1130b6604e2f286',
    //     name: '苹果',
    //     imgUrl: 'images/product/apple.jpeg',
    //     sales: 784,
    //     price: 3,
    //     oldPrice: 6,
    //     tabs: ['all', 'frauts']
    // })

    //查询某商店某tabs下的商品
    const list = await Product.find(
        {
            shopId: '617a69abc1130b6604e2f287',
            tabs: {
                $in: 'seckill'
            }
        }
    ).sort({sales: 1})
    console.log(list)
})()