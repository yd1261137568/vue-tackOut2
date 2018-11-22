<template>
  <section class="msite">
    <!--首页头部-->
    <TopHeader :title="address.name">
       <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </TopHeader>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys,index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category,index) in categorys" :key="index">
              <div class="food_container">
                <img :src="'https://fuss10.elemecdn.com'+category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>
<script>
  import {mapState} from 'vuex';
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.min.css';
  import ShopList from '../../components/ShopList/ShopList.vue';
  export default {
    mounted () {
      //分发异步获取食品分类列表
      this.$store.dispatch('getFoodCategorys');// 先this.$store.dispatch('actionName')获取后台数据到前端页面中(state)
      //分发异步获取商家列表
      this.$store.dispatch('getShops');
    },
    computed:{
      ...mapState(['address','categorys']),//...mapState(['xxx'])读取state中的数据到组件中
      categorysArr () {
        const {categorys} = this;
        //大数组
        let arr = [];
        //小数组
        let smallArr = [];
        categorys.forEach(c => {
          if(smallArr.length === 0){
            arr.push(smallArr);
          }
          smallArr.push(c);
          if(smallArr.length >= 8){
            smallArr = [];
          }
        });
        return arr
      }
    },

    watch:{
      // 更新状态数据==>调用监视的回调函数 ==> 异步更新界面 ==> 执行$nextTick()指定的回调函数
      categorys () {
        this.$nextTick(() => {
          new Swiper('.swiper-container',{
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    },
    components:{
      ShopList
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774

</style>
