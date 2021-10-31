const User = require('../User')

!(async () => {
    // await User.create({
    //     username: '13112115576',
    //     password: '123'
    // })
    const user = await User.findOne({
        username: '13112115561'
    })
    console.log('user', user)
})()