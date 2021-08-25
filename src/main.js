import Vue from 'vue'
import App from './App.vue'
import store from './store'

new Vue({
    render: function (createElement) {
      return createElement(App)
    },
    store
}).$mount('#app')
