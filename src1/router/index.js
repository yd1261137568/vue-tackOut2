import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import MSite from '../pages/MSite/MSite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue';

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/msite',
      component:MSite,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        showFoot:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]

})
