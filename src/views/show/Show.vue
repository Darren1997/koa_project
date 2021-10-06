<template>
<div class="wrapper">
  <div class="search">
    <div class="search__back iconfont" @click="handleBackClick">&#xe677;</div>
    <div class="search__content">
      <span class="search__content__icon iconfont">&#xe898;</span>
      <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
    </div>
  </div>
  <ShowInfo :item="item" :hideborder="hideborder" v-if="item.imgUrl"/>
  <Content :shopName="item.name"/>
  <Cart />
</div>

</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShowInfo from '../../components/ShowInfo'
import Content from './Content'
import Cart from './Cart'

const getItemDataEffect = () => {
  const route = useRoute()
  const data = reactive({
    item: {}
  })
  const getItemData = async () => {
    const result = await get(`api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  getItemData()
  const { item } = toRefs(data)
  return { item }
}

const handleBackClickEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return { handleBackClick }
}

export default {
  name: 'Show',
  components: { ShowInfo, Content, Cart },
  setup () {
    const { item } = getItemDataEffect()
    const { handleBackClick } = handleBackClickEffect()
    const hideborder = true

    return { item, hideborder, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
   padding: 0 .18rem;
 }
.search{
  display: flex;
  height: .32rem;
  margin: .16rem 0 .04rem 0;
  line-height: .32rem;
  // background-color: red;
  &__back{
    width: .32rem;
    color: #B6B6B6;
    font-size: .24rem;
    // background-color: red;
  }
  &__content{
    display: flex;
    flex: 1;
    background: #F5F5F5;
    border-radius: .16rem;
    padding-right: .2rem;
    &__icon{
      width: .32rem;
      padding-left: .16rem;
      color: #B7B7B7;
      // background-color: blue;
    }
    &__input{
      flex: 1;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      padding-right: .2rem;
      font-size: .14rem;
      color: #333333;
    }
  }
}
</style>
