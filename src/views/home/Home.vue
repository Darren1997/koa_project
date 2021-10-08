<template>
    <div class="wrapper">
      <StaticPart />
      <Nearby />
    </div>
    <Docker />
</template>

<script>
import StaticPart from './StaticPart'
import Nearby from './Nearby'
import Docker from './Docker'
export default {
  name: 'Home',
  components: {
    StaticPart,
    Nearby,
    Docker
  }
}
</script>

<style lang="scss" scoped>
.wrapper{
  position: absolute;
  overflow-y: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: .50rem;
  padding: .16rem .18rem 0 .18rem;
  // background-color: green;
}
</style>
