import Vuex from 'vuex'

const setLocalCartList = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}

const getLocalCartList = () => {
  // { shopId: {shopName:'', productList:{ productId: {} }}}
  if (localStorage.cartList) {
    return JSON.parse(localStorage.cartList)
  } else {
    return {}
  }
}

export default Vuex.createStore({
  state: {
    cartList: getLocalCartList()
  },
  mutations: {
    changeCartItemInfo (state, payload) {
      // console.log(payload)
      const { shopId, productId, productInfo } = payload
      let shopInfo = state.cartList[shopId]
      if (!shopInfo) { shopInfo = { shopName: '', productList: {} } }
      let product = shopInfo.productList[productId]
      if (!product) {
        product = productInfo
        product.count = 0
      }
      product.count += payload.num
      if (payload.num > 0) { product.check = true }
      if (product.count <= 0) {
        product.count = 0
        product.check = false
      }
      shopInfo.productList[productId] = product
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeShopName (state, payload) {
      const { shopId, shopName } = payload
      const shopInfo = state.cartList[shopId] || {
        shopName: '',
        productList: {}
      }
      shopInfo.shopName = shopName
      state.cartList[shopId] = shopInfo
      setLocalCartList(state)
    },
    changeCartItemChecked (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId].productList[productId]
      product.check = !product.check
      setLocalCartList(state)
    },
    checkAll (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId].productList
      let hasCount = 0
      let checked = 0
      for (var i in productList) {
        if (productList[i].count !== 0) {
          hasCount += 1
        }
        if (productList[i].check === true) {
          checked += 1
        }
      }
      // console.log(hasCount, checked)
      if (hasCount > 0 && checked > 0 && hasCount === checked) {
        for (var j in productList) {
          if (productList[j].count > 0 && productList[j].check) {
            productList[j].check = false
          }
        }
      } else {
        for (var k in productList) {
          if (productList[k].count > 0 && !productList[k].check) {
            productList[k].check = true
          }
        }
      }
      setLocalCartList(state)
    },
    clearCart (state, payload) {
      const { shopId } = payload
      const productList = state.cartList[shopId].productList
      for (var i in productList) {
        if (productList[i].count > 0 || productList[i].check) {
          productList[i].count = 0
          productList[i].check = false
        }
      }
      setLocalCartList(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
