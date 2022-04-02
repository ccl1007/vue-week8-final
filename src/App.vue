<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<script>
import Navbar from './components/FrontNavbar.vue'
import Footer from './components/FrontFooter.vue'
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/stylesheet/all.scss';
</style>
