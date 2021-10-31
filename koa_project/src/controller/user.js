/**
 * @description User Controller
 */

const User = require('../models/User')

/**
 * @param {String} username 用户名
 * @param {String} password 密码
 */

async function register(username, password){
    const newUser = User.create({ username, password })
    return newUser
}

module.exports = {
    register
}