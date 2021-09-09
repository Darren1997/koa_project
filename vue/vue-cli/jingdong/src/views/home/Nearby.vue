<template>
    <div class="nearby">
      <h3 class="nearby__title">附近商店</h3>
      <div v-for="item in nearList" :key="item.id" class="nearby__item">
        <img :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`" alt="" class="nearby__item__img">
        <div class="nearby__content">
          <div class="nearby__content__title">{{item.title}}</div>
          <div class="nearby__content__tags">
            <span v-for="(item, index) in item.tags" :key="index" class="nearby__content__tag">{{item}}</span>
          </div>
          <p class="nearby__content__hightline">{{item.des}}</p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearList = [
      {
        id: 1,
        title: '沃尔玛',
        imgName: 'near',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        des: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 2,
        title: '沃尔玛',
        imgName: 'near',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        des: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 3,
        title: '沃尔玛',
        imgName: 'near',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        des: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 4,
        title: '沃尔玛',
        imgName: 'near',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        des: 'VIP尊享满89元减4元运费券（每月3张）'
      },
      {
        id: 5,
        title: '沃尔玛',
        imgName: 'near',
        tags: ['月售1万+', '起送¥0', '基础运费¥5'],
        des: 'VIP尊享满89元减4元运费券（每月3张）'
      }
    ]
    return { nearList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/variables.scss';
@import '../../styles/mixins.scss';
.nearby{
  color: $content-fontcolor;
  &__title{
    font-size: .18rem;
    margin: .16rem 0 .02rem 0;
  }
  &__item{
    display: flex;
    padding: .12rem 0;
    &__img{
      width: .56rem;
      height: .56rem;
      margin-right: .16rem;
    }
  }
  &__content{
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid #F1F1F1;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      margin-bottom: .08rem;
    }
    &__tags{
      line-height: .18rem;
      font-size: .13rem;
    }
    &__tag{
      margin-right: .16rem;
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
