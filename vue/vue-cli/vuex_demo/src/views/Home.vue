<template>
  <div class="home" @click="changeName">
    {{name}}
  </div>
</template>

<script>
import { toRefs } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Home',
  setup(){
    const store = useStore()
    const { name } = toRefs(store.state)
    // console.log(name.value)
    const changeName = ()=>{
      store.dispatch('change', 'fhk-world')
    }
    return { name, changeName }
  }
}
</script>
