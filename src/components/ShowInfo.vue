<template>
    <div class="show">
        <img :src="`${item.imgUrl}`" alt="" class="show__img">
        <div :class="{ 'show__content':true, 'show__content--bordered':hideborder?false:true }">
          <div class="show__content__title">{{item.name}}</div>
          <div class="show__content__tags">
            <span class="show__content__tag">月售：{{item.sales}}</span>
            <span class="show__content__tag">起送：{{item.expressLimit}}</span>
            <span class="show__content__tag">基础运费：{{item.expressPrice}}</span>
          </div>
          <p class="show__content__hightline">{{item.slogan}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ShowInfo',
  props: ['item', 'hideborder']
}
</script>

<style lang="scss" scoped>
.show{
  display: flex;
  padding: .12rem 0;
  &__img{
    width: .56rem;
    height: .56rem;
    margin-right: .16rem;
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    &--bordered{
      border-bottom: 1px solid #F1F1F1;
    }
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      margin-bottom: .08rem;
      color: #333333;
    }
    &__tags{
      line-height: .18rem;
      font-size: .13rem;
    }
    &__tag{
      margin-right: .16rem;
      color: #333333;
    }
    &__hightline{
      line-height: .18rem;
      font-size: .13rem;
      margin: .08rem 0 0 0;
      color: #E93B3B;
    }
  }
}
</style>
