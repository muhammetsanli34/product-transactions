<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/shared/Header.vue";
  import Footer from "./components/shared/Footer.vue";
  export default {
    components: {
      appHeader: Header,
      appFooter: Footer,
    },
    data () {
      return {
      
      }
    },
    created() {
      this.$store.dispatch("getTradeResult");
      this.$store.dispatch("initApp");

    },
  }
</script>

<style>
