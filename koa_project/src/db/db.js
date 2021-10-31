/**
 * @description mongoose 连接数据库
 * @author fhk
 */

const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017' // 本地默认的 mongodb 服务地址
const dbName = 'koa_project' // 数据库名字

// 配置

// 开始连接
mongoose.connect(`${url}/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// 连接对象
const db = mongoose.connection

db.on('error', err => {
    console.log('mongoose connect error', err)
})

// db.on('open', () => {
//     console.log('mongoose 连接成功！')
// })

module.exports = mongoose