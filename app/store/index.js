import vue from 'vue'
import Vuex from 'vuex'
import state from './public-state'
import actions from './pubic-actions'
import mutations from './public-mutation'

vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations
})