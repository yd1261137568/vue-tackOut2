<template>
  <div>
    <router-view />
    <FootGuide v-if="$route.meta.showFoot"/>
  </div>
</template>

<script>
import FootGuide from './components/FootGuide/FootGuide.vue'
export default {
  components: {
    FootGuide
  }
}
</script>

<style>

</style>
