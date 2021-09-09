import { createStore } from 'vuex'

export default createStore({
  state: {
    name: 'fhk'
  },
  mutations: {
    change(state, str){
      this.state.name = str
    }
  },
  actions: {
    change(store, str){
      setTimeout(()=>{
        this.commit('change', str)
      }, 5000)
    }
  },
  modules: {
  }
})
