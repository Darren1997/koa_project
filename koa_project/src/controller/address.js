/**
 * @description Address Controller
 */

const Address = require('../models/Address')


// 创建地址
async function createAddress(username, addInfo) {
    const newAddress = await Address.create({
        username,
        ...addInfo
    })
    return newAddress
}

// 获取地址列表
async function getAddressList(username) {
    const list = await Address.find({
        username
    }).sort({updatedAt: -1})
    return list
}

// 通过id获取单个地址
async function getAddressById(id) {
    const addinfo = await Address.findById(id)
    return addinfo
}

// 更新某个地址
async function updateAddress(id, newAddInfo){
    const updatedAddInfo = await Address.findByIdAndUpdate(
        id,
        newAddInfo,
        { new: true }
    )
    return updatedAddInfo
}

module.exports = {
    createAddress, getAddressList, getAddressById, updateAddress
}