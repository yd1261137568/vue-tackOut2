import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import MSite from '../pages/MSite/MSite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Login from '../pages/Login/Login.vue';
import Shop from '../pages/Shop/Shop.vue';
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue';
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue';
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue';
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
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'/shop/goods',
          component:ShopGoods
        },
        {
          path:'/shop/ratings',
          component:ShopRatings
        },
        {
          path:'/shop/info',
          component:ShopInfo
        },
        {
          path:'',
          redirect:'/shop/goods'
        },
      ]
    },
    {
      path:'/',
      redirect:'/msite'
    }
  ]
})