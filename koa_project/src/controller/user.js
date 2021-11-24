/**
 * @description User Controller
 */

const User = require('../models/User')

/**
 * @param {String} username 用户名
 * @param {String} password 密码
 */

async function register(username, password){
    const newUser = await User.create({ username, password })
    return newUser
}

/**
 * @param {String} username 用户名
 * @param {String} password 密码
 */
async function login(username, password) {
    const user = await User.findOne({ username, password })
    if (user != null) return true
    else return false
}

module.exports = {
    register, login
}