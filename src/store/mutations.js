
import Vue from 'vue';
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  ADD_FOOD_COUNT,
  REDECE_FOOD_COUNT
} from './mutation-types';
export default {
  [RECEIVE_ADDRESS] (state,{address}) { //adress 是我最终要更新的数据(自己定义的名字)
    state.address = address;
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops;
  },
  [RECEIVE_USER] (state,{user}) {
    state.user = user;
  },
  [RESET_USER] (state) {
    state.user = {};
  },
  [RECEIVE_GOODS] (state,{goods}) {
    state.goods = goods;
  },
  [RECEIVE_RATINGS] (state,{ratings}) {
    state.ratings = ratings;
  },
  [RECEIVE_INFO] (state,{info}) {
    state.info = info;
  },
  [ADD_FOOD_COUNT] (state,{food}) {
    if(food.count){
      food.count++
    }else{
      // food.count = 1
      Vue.set(food,'count',1);
      state.cartFoods.push(food)
    }
  },
  [REDECE_FOOD_COUNT] (state,{food}) {
    if(food.count){
      food.count--;
      if(food.count === 0){
        //清除当前购物车中的食物
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },


}
