<template>
     <div class="blur" v-if="showCart" @click="handleShowCart"></div>
     <div class="cart">
       <div class="product" v-if="showCart">
          <div class="product__header">
            <div class="product__header__checked iconfont"
            v-html="showAllChecked ? '&#xe653;':'&#xe654;'"
            @click="() => {handleCheckAll(shopId)}"></div>
            全选
            <div class="product__header__clearAll" @click="() => {handleClearCart(shopId)}">清空购物车</div>
          </div>
       <template
         v-for="item in productList"
         :key="item._id"
       >
         <div class="product__item" v-if="item.count > 0">
           <div
            class="product__item__checked iconfont"
            v-html="item.check ? '&#xe653;': '&#xe654;'"
            @click="() => changeCartItemChecked(shopId, item._id)"
          />
           <img class="product__item__img" :src="item.imgUrl" />
           <div class="product__item__detail">
             <h4 class="product__item__title">{{item.name}}</h4>
             <p class="product__item__price">
               <span class="product__item__yen">&yen;</span>{{item.price}}
               <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
             </p>
           </div>
           <div class="product__number">
             <span
               class="product__number__minus"
               @click="() => { changeCartItemInfo(shopId, item._id, item, -1) }"
             >-</span>
               {{item.count || 0}}
             <span
               class="product__number__plus"
               @click="() => { changeCartItemInfo(shopId, item._id, item, 1) }"
             >+</span>
           </div>
         </div>
       </template>
     </div>
     <div class="check">
         <div class="check__icon" @click="handleShowCart">
             <img src="http://www.dell-lee.com/imgs/vue3/basket.png"
              alt="" class="check__icon__img">
              <div class="check__icon__tag" v-if="cartCount">{{totalCount}}</div>
         </div>
         <div class="check__info" >
             <template v-if="cartCount">总计：<span class="check__info__price">&yen;{{totalPrice}}</span></template>
             <template v-if="cartCount==0">总计：购物车为空</template>
         </div>
         <div class="check__btn">
         <router-link v-if="totalPrice" :to="{ path: `/orderConfirmation/${shopId}` }">
             去结算
             </router-link>
           </div>
     </div>
 </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from './commonCartEffect'

const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const cartList = store.state.cartList
  const showCart = ref(false)
  // console.log(cartList[shopId])

  const totalCount = computed(() => {
    const productList = cartList[shopId]?.productList
    let count = 0
    if (productList) {
      for (var i in productList) {
        if (productList[i].check) {
          const product = productList[i]
          count += product.count
        }
      }
    }
    return count
  })
  const totalPrice = computed(() => {
    const productList = cartList[shopId]?.productList
    let price = 0
    if (productList) {
      for (var i in productList) {
        if (productList[i].check) {
          price += (productList[i].count * productList[i].price)
        }
      }
    }
    return price.toFixed(2)
  })
  const cartCount = computed(() => {
    const productList = cartList[shopId]?.productList
    let count = 0
    if (productList) {
      for (var i in productList) {
        count += productList[i].count
      }
    }
    return count
  })
  const showAllChecked = computed(() => {
    const productList = cartList[shopId]?.productList
    let show = true
    if (productList) {
      for (var i in productList) {
        if (productList[i].count > 0 && productList[i].check === false) {
          show = false
        }
      }
    } else {
      show = false
    }
    return show
  })
  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || []
    return productList
  })
  const changeCartItemChecked = (shopId, productId) => {
    // console.log(shopId, productId)
    store.commit('changeCartItemChecked', { shopId, productId })
  }
  const handleCheckAll = (shopId) => {
    store.commit('checkAll', { shopId })
  }
  const handleClearCart = (shopId) => {
    store.commit('clearCart', { shopId })
  }
  const handleShowCart = () => {
    showCart.value = !showCart.value
  }
  return {
    totalCount,
    totalPrice,
    productList,
    shopId,
    cartCount,
    showAllChecked,
    showCart,
    changeCartItemChecked,
    handleCheckAll,
    handleClearCart,
    handleShowCart
  }
}

export default {
  name: 'Cart',
  setup () {
    const {
      totalCount, totalPrice, productList, shopId, cartCount,
      showCart, showAllChecked, changeCartItemChecked,
      handleCheckAll, handleClearCart, handleShowCart
    } = useCartEffect()
    const { changeCartItemInfo } = useCommonCartEffect()
    return {
      totalCount,
      totalPrice,
      productList,
      shopId,
      cartCount,
      showAllChecked,
      showCart,
      changeCartItemInfo,
      changeCartItemChecked,
      handleCheckAll,
      handleClearCart,
      handleShowCart
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixins.scss';

a{
  text-decoration: none;
  color: #F1F1F1;
}
.cart{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    // height: .49rem;
}
.blur{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: .50rem;
  background: rgba(0,0,0,0.50);
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #FFF;
  &__header {
    display: flex;
    height: .52rem;
    border-bottom: 1px solid #F1F1F1;
    font-size: .14rem;
    line-height: .52rem;
    position: relative;
    &__checked{
      margin-left: .16rem;
      margin-right: .09rem;
      font-size: .2rem;
      color: #0091FF;
    }
    &__clearAll{
      position: absolute;
      right: .18rem;
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid #F1F1F1;
    &__checked {
      line-height: .5rem;
      margin-right: .2rem;
      color: #0091FF;
      font-size: .2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #333;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: #E93B3B;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: #999;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;
      &__minus, &__plus
       {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .16rem;;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }
      &__minus {
        border: .01rem solid #666;
        color: #666;
        margin-right: .05rem;
      }
      &__plus {
        background: #0091FF;
        color: #FFF;
        margin-left: .05rem;
      }
    }
  }
}
.check{
    display: flex;
    box-shadow: 0 -1px 1px 0 #F1F1F1;
    height: .49rem;
    line-height: .49rem;
    &__icon{
        position: relative;
        width: .76rem;
        height: 100%;
        &__img{
            display: block;
            width: .28rem;
            height: .26rem;
            margin: .11rem auto;
        }
        &__tag{
            position: absolute;
            left: .47rem;
            top: .02rem;
            width: .2rem;
            height: .2rem;
            line-height: .2rem;
            background: #E93B3B;
            border-radius: 50%;
            color: #F1F1F1;
            text-align: center;
            font-size: .14rem;
            transform: scale(.5);
        }
    }
    &__info{
        flex: 1;
        height: 100%;
        padding-left: .08rem;
        font-size: .12rem;
        &__price{
            line-height: .49rem;
            font-size: .18rem;
            color: #E93B3B;
            font-weight: bold;
        }
    }
    &__btn{
        width: .98rem;
        height: 100%;
        line-height: .49rem;
        font-size: .14rem;
        background: #4FB0F9;
        color: #F1F1F1;
        text-align: center;
    }
}
</style>
