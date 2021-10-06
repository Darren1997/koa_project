<template>
    <div class="position">
      <span class="iconfont position__icon">&#xe62f;</span>
      <span class="position__text">北京理工大学国防科技园2号楼10层</span>
      <span class="iconfont position__notice">&#xe628;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe898;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img class="banner__img" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="">
    </div>
    <div class="icons">
      <div v-for="(item, index) in iconList" :key="index"  class="icons__item">
        <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="" class="icons__item__img">
        <p class="icons__item__des">{{item.des}}</p>
      </div>
    </div>
    <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [
      { imgName: '超市', des: '超市便利' },
      { imgName: '菜市场', des: '菜市场' },
      { imgName: '水果店', des: '水果店' },
      { imgName: '鲜花', des: '鲜花绿植' },
      { imgName: '医药健康', des: '医药健康' },
      { imgName: '家居', des: '家居时尚' },
      { imgName: '蛋糕', des: '烘培蛋糕' },
      { imgName: '签到', des: '签到' },
      { imgName: '大牌免运', des: '大牌免运' },
      { imgName: '红包', des: '红包套餐' }
    ]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.position{
    display: block;
    position: relative;
    height: .22rem;
    width: 100%;
    color: $content-fontcolor;
    // background-color: green;
    &__icon{
      position: absolute;
      left: 0;
      font-size: .20rem !important;
    }
    &__text{
      position: absolute;
      font-size: .16rem;
      line-height: .22rem;
      top: 0;
      left: .24rem;
      right: .60rem;
      @include ellipsis;
    }
    &__notice{
      position: absolute;
      font-size: .20rem !important;
      right: 0;
    }
  }
.search{
  width: 100%;
  height: .32rem;
  background-color: #f5f5f5;
  margin: .16rem 0 .12rem 0;
  border-radius: 16px;
  font-size: 14px;
  color: #B7B7B7;
  line-height: .32rem;
  .iconfont{
    margin: 0 .12rem 0 .16rem;
  }
}
.banner{
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img{
    width: 100%;
  }
}
.icons{
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    &__img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__des{
      text-align: center;
      margin: .06rem 0 .16rem 0;
      color: $content-fontcolor;
    }
  }
}
.gap{
  height: .10rem;
  background-color: #f1f1f1;
  margin: 0 -.18rem;
}
</style>
