<template>
  <div>
    <Header/>
    <!-- Router view -->
    <div class="my-5 py-5">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  export default {
        data() {
            return {
            }
        },
        components : {
          Header,
          Footer
        }
    }
</script>

<style>

</style>
