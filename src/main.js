import Vue from 'vue'
import App from './App.vue'
import BaseHeader from '@/components/Layouts/BaseHeader'
import BaseCard from '@/components/UI/BaseCard'
import BaseButton from '@/components/UI/BaseButton'

Vue.config.productionTip = false

Vue.component('base-header', BaseHeader)
Vue.component('base-card', BaseCard)
Vue.component('base-button', BaseButton)

new Vue({
  render: h => h(App)
}).$mount('#app')
