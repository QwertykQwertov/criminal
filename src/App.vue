<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */

  height: auto;
  min-height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.6), rgba(0, 0, 0, 0.8)),
    url(./assets/femida.jpg);
  background-position: top;
  background-size: 100%;
}
</style>
