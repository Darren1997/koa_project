<template>
  <div class="content">
      <div class="category">
          <div :class="{ 'category__item':true,'category__item--active':currenTab==item.tab }"
           v-for="(item, index) in categories" :key="index"
           @click="() => handleTabClick(item.tab)">{{item.name}}</div>
      </div>
      <div class="product">
          <div class="product__item" v-for="item in resultData" :key="item._id">
              <img :src="item.imgUrl" alt="" class="product__item__img">
              <div class="product__item__details">
                  <h4 class="product__item__title">{{item.name}}</h4>
                  <p class="product__item__sales">月售{{item.sales}}件</p>
                  <p class="product__item__price">
                      <span class="product__item__yen">&yen;</span>{{item.price}}
                      <span class="product__item__oragin">&yen;{{item.oldPrice}}</span>
                  </p>
                  <div class="product__item__num">
                      <span class="product__item__minus"
                      @click="() => { addItemToCart(shopId, item._id, item, -1, shopName)}">-</span>
                        {{cartList?.[shopId]?.productList[item._id]?.count || 0}}
                      <span class="product__item__plus"
                      @click="() => { addItemToCart(shopId, item._id, item, 1, shopName)}">+</span>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'
const categories = [{
  name: '全部商品',
  tab: 'all'
}, {
  name: '秒杀',
  tab: 'seckill'
}, {
  name: '新鲜水果',
  tab: 'fruit'
}]
const useTabEffect = () => {
  const currenTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currenTab.value = tab
  }
  return { currenTab, handleTabClick }
}
const useCurrentListEffect = (currenTab) => {
  const route = useRoute()
  // console.log(route.params.id)
  const data = reactive({
    resultData: []
  })
  const getData = async () => {
    const result = await get(`/api/shop/${route.params.id}/products`, { tab: currenTab.value })
    if (result.errno === 0 && result.data.length) {
      data.resultData = result.data
    }
  }
  watchEffect(() => { getData() })
  const { resultData } = toRefs(data)
  return { resultData }
}
const useCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)
  const addItemToCart = (shopId, productId, productInfo, num, shopName) => {
    store.commit('changeCartItemInfo', {
      shopId, productId, productInfo, num
    })
    // console.log(shopName)
    store.commit('changeShopName', { shopId, shopName })
    // console.log(111, cartList)
  }
  return { cartList, addItemToCart }
}
export default {
  name: 'Content',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currenTab, handleTabClick } = useTabEffect()
    const { resultData } = useCurrentListEffect(currenTab)
    const { cartList, addItemToCart } = useCartEffect()
    return {
      categories,
      resultData,
      currenTab,
      handleTabClick,
      shopId,
      cartList,
      addItemToCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';
.content{
  display: flex;
  position: absolute;
  top: 1.5rem;
  bottom: .5rem;
  left: 0;
  right: 0;
//   background: red;
}
.category{
  overflow-y: scroll;
  width: .76rem;
  height: 100%;
  background: #F5F5F5;
  border-radius: 2px;
  &__item{
      width: 100%;
      height: .4rem;
      text-align: center;
      line-height: .4rem;
      font-size: .14rem;
      color: #333;
      &--active{
          background: #fff;
      }
  }
}
.product{
    flex: 1;
    height: 100%;
    overflow-y: scroll;
    // background-color: red;
    &__item{
        display: flex;
        margin: 0 .16rem;
        padding: .12rem 0;
        border-bottom: solid .01rem #F1F1F1;
        &__img{
            width: .68rem;
            height: .68rem;
            margin-right: .16rem;
        }
        &__details{
            flex: 1;
            position: relative;
            overflow: hidden;
        }
        &__title{
            margin: 0;
            font-size: .14rem;
            line-height: .2rem;
            color: #333;
            @include ellipsis;
        }
        &__sales{
            margin: .06rem 0;
            line-height: .16rem;
            font-size: .12rem;
            color: #333;
        }
        &__price{
            margin: 0;
            line-height: .2rem;
            color: #E93B3B;
            font-size: .14rem;
            font-weight: bold;
        }
        &__yen{
            font-size: .1rem;
            font-weight: normal;
        }
        &__oragin{
            font-size: .1rem;
            font-weight: normal;
            color: #999;
            text-decoration: line-through;
        }
        &__num{
            position: absolute;
            height: .24rem;
            line-height: .17rem;
            font-size: .14rem;
            color: #333;
            right: 0;
            bottom: 0;
        }
        &__minus, &__plus{
            display: inline-block;
            width: .19rem;
            height: .19rem;
            border-radius: 50%;
            // line-height: .17rem;
            text-align: center;
            font-size: .25rem;
        }
        &__minus{
            color: #666;
            border: solid .01rem #666;
            margin-right: .1rem;
        }
        &__plus{
            background: #0091FF;
            border: solid .01rem #0091FF;
            color: #fff;
            margin-left: .1rem;
        }
    }
}
</style>
