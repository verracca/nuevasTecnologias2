import Vue from 'vue'
import App from './App.vue'
import TaTeTi from '../src/components/TaTeTi.vue';
import Celda from '../src/components/Celda.vue';

Vue.component('tateti', TaTeTi);
Vue.component('celda', Celda);

new Vue({
  el: '#app',
  render: h => h(App)
});