import Vue from 'vue';
import App from './App.vue';
import router from './router';
import {Button} from 'mint-ui';
import TopHeader from './components/TopHeader/TopHeader.vue';
import Split from'./components/Split/Split.vue'

import store from './store';
// import Shop from './pages/Shop/Shop.vue';

//注册全局组件
Vue.component('TopHeader',TopHeader);
Vue.component('Split',Split);
import './mock/mockServer';
// import './filters';

Vue.component(Button.name, Button);

export default new Vue({
  el:'#app',
  render:h => h(App),
  router,
  store,
})
