<template>
  <div>
    <router-view/>
    <FootGuide v-if="$route.meta.showFoot"/>
  </div>
</template>


<script>
  import FootGuide from './components/FootGuide/FootGuide.vue';
  export default {

    mounted () {
      this.$store.dispatch('getAddress')
    },
    components:{
      FootGuide
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
