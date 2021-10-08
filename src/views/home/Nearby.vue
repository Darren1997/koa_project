<template>
    <div class="nearby">
      <h3 class="nearby__title">附近商店</h3>
      <router-link :to="`/show/${item._id}`" v-for="item in nearList" :key="item._id">
        <ShowInfo :item="item"/>
      </router-link>
    </div>
</template>

<script>
import ShowInfo from '../../components/ShowInfo'
import { ref } from 'vue'
import { get } from '../../utils/request'

const getNearByEffect = () => {
  const nearList = ref([])
  const getNearBy = async () => {
    try {
      const result = await get('/api/shop/hot-list')
      nearList.value = result.data
      // console.log(result.data)
    } catch {
      console.log('err')
    }
  }
  return { nearList, getNearBy }
}

export default {
  name: 'Nearby',
  components: { ShowInfo },
  setup () {
    const { nearList, getNearBy } = getNearByEffect()
    getNearBy()
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
  a{
    text-decoration: none;
  }
}
</style>
