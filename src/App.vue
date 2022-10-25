<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  
  height: 150vh;
    background: linear-gradient( rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.8) ),url(./assets/femida.jpg);
    background-position: top;
    background-size: 100%;
}
</style>
