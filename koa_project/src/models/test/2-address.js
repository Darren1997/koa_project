const Address = require('../Address')

!(async() => {
    await Address.create({
        username: '13112115561',
        city: '深圳11',
        department: 'xx小区',
        houseNumber: 'c栋601',
        name: 'fhc',
        phone: '13112115588'
    })
    // await Address.deleteOne({
    //     username: '13112115576'
    // })
    // const addressInfo = await Address.find({
    //     username: '13112115576'
    // })
    // const id = '617a5ffc55ca0f84d41dc905'
    // const newData = {
    //     city: '广州',
    //     department: 'a小区',
    //     houseNumber: 'b座333',
    //     name: 'kfc',
    //     phone: '110'
    // }
    // const updated = await Address.findByIdAndUpdate(
    //     id,
    //     newData,
    //     { new: true }
    // )
    // console.log(updated)
})()