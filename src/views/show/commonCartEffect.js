import { useStore } from 'vuex'

export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    // console.log(shopId, productId, productInfo)
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
  }
  return { changeCartItemInfo }
}
