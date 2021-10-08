<template>
    <div class="docker">
      <div v-for="(item, index) in dockerList" :key="item.iconcode"
      :class="{'docker__item': true, 'docker__item--active': index === 0}">
        <div class="iconfont" v-html="item.iconcode"></div>
        <div class="docker__title">{{item.des}}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Docker',
  setup () {
    const dockerList = [
      { iconcode: '&#xe619;', des: '首页' },
      { iconcode: '&#xe613;', des: '购物车' },
      { iconcode: '&#xe615;', des: '订单' },
      { iconcode: '&#xe611;', des: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.docker{
  position: absolute;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: .49rem;
  left: 0;
  bottom: 0;
  padding: 0 .18rem;
  color: $content-fontcolor;
  // background-color: green;
  border-top: solid 1px #F1F1F1;
  &__item{
    flex: 1;
    text-align: center;
    .iconfont{
      font-size: .20rem;
      line-height: .20rem;
      margin-top: .07rem;
    }
    &--active{
      color: #1FA4FC;
    }
  }
  &__title{
    font-size: .20rem;
    line-height: .14rem;
    transform: scale(.5, .5);
  }
}
</style>
