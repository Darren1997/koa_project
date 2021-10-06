<template>
<div class="orderWrap">
    <div class="top">
        <div class="top__header">
            <div class="top__back iconfont" @click="handleBack">&#xe677;</div>
            <div class="top__title">确认订单</div>
        </div>
        <div class="top__receiver">
            <div class="top__receiver__title">收货地址</div>
            <div class="top__receiver__address">北京理工大学国防科技园2号楼10层</div>
            <div class="top__receiver__info">
                <span class="top__receiver__name">瑶妹（先生）</span>&nbsp;
                <span class="top__receiver__phone">18911024266</span>
            </div>
            <div class="top__receiver__enter iconfont">&#xe677;</div>
        </div>
    </div>
    <div class="orderinfo">
        <div class="orderinfo__shopName">{{shopName}}</div>
        <div class="orderinfo__item" v-for="item in checkedList" :key="item._id">
            <img :src="item.imgUrl" alt="" class="orderinfo__item__img">
            <div class="orderinfo__item__tag">
                <div class="orderinfo__item__title">{{item.name}}</div>
                <div class="orderinfo__item__pricetag">
                    <div class="orderinfo__item__num iconfont">
                    <span class="orderinfo__item__yen">&yen;</span>{{item.price}}&#xe663;{{item.count}}
                    </div>
                    <div class="orderinfo__item__price">
                        <span class="orderinfo__item__yen">&yen;</span>{{(item.price*item.count).toFixed(2)}}
                    </div>
                </div>
            </div>
        </div>
        <div class="orderinfo__totalNum">共计{{totalCount}}件/1.4kg&nbsp;&nbsp;<span class="iconfont">&#xe677;</span></div>
    </div>
</div>
<div class="bottom">
        实付金额
        <div class="bottom__price">&yen;{{totalPrice}}</div>
        <div class="bottom__btn" @click="handleShowToast">提交订单</div>
</div>
<div class="mask" v-if="showToast" @click="handleShowToast">
    <div class="toast" @click.stop="">
        <div class="toast__title">确认要离开收银台？</div>
        <div class="toast__des">请尽快完成支付，否则将被取消</div>
        <div class="toast__btns">
            <div class="toast__btn toast__btn1"  @click.stop="handleShowToast">取消订单</div>
            <div class="toast__btn toast__btn2"  @click.stop="handleShowToast">确认支付</div>
        </div>
    </div>
</div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { ref } from 'vue'

const showToast = ref(false)

const handleBackEffect = () => {
  const router = useRouter()
  const handleBack = () => {
    router.back()
  }
  return { handleBack }
}

// 获取购物车详情
const useCartEffect = () => {
  const route = useRoute()
  const store = useStore()
  const shopId = route.params.shopId
  const state = store.state
  const shopName = state.cartList[shopId]?.shopName
  const productList = state.cartList[shopId]?.productList || {}
  const checkedList = []
  let totalCount = 0
  let totalPrice = 0
  for (var i in productList) {
    if (productList[i].check) {
      checkedList.push(productList[i])
      totalCount += productList[i].count
      totalPrice += productList[i].count * productList[i].price
    }
  }
  totalPrice = totalPrice.toFixed(2)
  return { checkedList, shopName, totalCount, totalPrice }
}

// 控制显示toast
const usehanleShowToastEffect = () => {
  const handleShowToast = () => {
    showToast.value = !showToast.value
  }
  return { handleShowToast }
}

export default {
  name: 'OrderConfirmation',
  setup () {
    const { handleBack } = handleBackEffect()
    const { checkedList, shopName, totalCount, totalPrice } = useCartEffect()
    const { handleShowToast } = usehanleShowToastEffect()
    return { handleBack, checkedList, shopName, totalCount, totalPrice, showToast, handleShowToast }
  }
}
</script>

<style lang="scss" scoped>
.orderWrap{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .50rem;
    background-color: #F5F5F5;
}
.top{
    height: 1.96rem;
    padding: .25rem .18rem 0 .18rem;
    margin-bottom: .16rem;
    box-sizing: border-box;
    background-size: 100% 1.59rem;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    background-repeat: no-repeat;
    &__header{
        position: relative;
        margin-bottom: .22rem;
        text-align: center;
        height: .22rem;
        line-height: .22rem;
        font-size: .16rem;
    }
    &__back{
        position: absolute;
        left: 0;
        font-size: .20rem;
    }
    &__receiver{
        position: relative;
        height: 1.11rem;
        border-radius: .04rem;
        padding: .16rem;
        box-sizing: border-box;
        background-color: #fff;
        &__title{
            line-height: .22rem;
            margin-bottom: .14rem;
            font-size: .16rem;
            font-weight: bold;
            color: #333;
        }
        &__address{
            line-height: .20rem;
            font-size: .14rem;
            color: #333333;
            margin-bottom: .06rem;
        }
        &__info{
            line-height: .17rem;
            font-size: .12rem;
            color: #666666;
        }
        &__enter{
            position: absolute;
            top: .48rem;
            right: .16rem;
            transform: rotate(180deg);
        }
    }
}
.orderinfo{
    margin: 0 .18rem;
    margin-bottom: .16rem;
    padding: .16rem;
    box-sizing: border-box;
    border-radius: .04rem;
    background-color: #fff;
    max-height: 3.90rem;
    overflow-y: auto;
    &__shopName{
        line-height: .22rem;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        margin-bottom: .16rem;
    }
    &__item{
        display: flex;
        margin-bottom: .16rem;
        &__img{
            height: .49rem;
            width: .49rem;
            margin-right: .16rem;
        }
        &__tag{
            flex: 1;
        }
        &__title{
            line-height: .20rem;
            font-weight: bold;
            font-size: 14px;
            margin-bottom: .06rem;
            color: #333333;
        }
        &__pricetag{
            display: flex;
        }
        &__num{
            font-size: .14rem;
            color: #E93B3B;
            line-height: .20rem;
        }
        &__price{
            flex: 1;
            font-size: .14rem;
            color: #000000;
            text-align: right;
            line-height: .20rem;
        }
    }
    &__totalNum{
        width: 100%;
        height: .28rem;
        line-height: .28rem;
        text-align: center;
        background: #F5F5F5;
        font-size: 14px;
        color: #999999;
        .iconfont{
            display: inline-block;
            font-size: .12rem;
            transform: rotate(270deg);
        }
    }
}
.bottom{
    display: flex;
    position: absolute;
    height: .49rem;
    line-height: .49rem;
    left: 0;
    right: 0;
    bottom: 0;
    padding-left: .24rem;
    font-size: .14rem;
    color: #333;
    &__price{
        flex: 1;
        margin-left: .05rem;
        font-size: .16rem;
        font-weight: bold;
    }
    &__btn{
        text-align: center;
        width: .98rem;
        color: #fff;
        background: #4FB0F9;
    }
}
.mask{
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.50);
}
.toast{
    position: relative;
    width: 3rem;
    height: 1.57rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: .24rem 0;
    border-radius: .04rem;
    box-sizing: border-box;
    text-align: center;
    background: #FFF;
    &__title{
        margin-bottom: .08rem;
        line-height: .25rem;
        font-size: .18rem;
        font-weight: bold;
        color: #333;
    }
    &__des{
        line-height: .20rem;
        font-size: .14rem;
        color: #666666;
        margin-bottom: .24rem;
    }
    &__btns{
        display: flex;
        margin-left: .6rem;
    }
    &__btn{
        width: .80rem;
        height: .32rem;
        line-height: .32rem;
        margin-right: .24rem;
        border-radius: .16rem;
        font-size: .14rem;
        box-sizing: border-box;
    }
    &__btn1{
        border: 1px solid #4FB0F9;
        color: #4FB0F9;
    }
    &__btn2{
        background: #4FB0F9;
        border: 1px solid #4FB0F9;
        color: #FFFFFF;
    }
}
</style>
