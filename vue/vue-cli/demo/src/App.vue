<template>
  <input v-model="inputValue"/>
  <button @click="handleClick">submit</button>
  <ul>
    <list-items v-for="(item,index) in list" :key="index" :msg="item" />
  </ul>
</template>

<script>
import ListItems from './components/ListItems.vue'
import { reactive, ref } from 'vue'
export default {
  name: 'App',
  components: {
    ListItems
  },
  setup(){
    const inputValue = ref('')
    const list = reactive([])
    const handleClick = ()=>{
     list.push(inputValue.value)
     inputValue.value = ''
    }
    return {list, inputValue, handleClick}
  }
}
</script>

<style>

</style>
