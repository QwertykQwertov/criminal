<template>
  <div id="app">
    <Header @openMenu="openLeftMenu" />
    <DxDrawer
      ref="leftMenu"
      opened-state-mode="overlap"
      position="right"
      reveal-mode="slide"
      v-model="store.openState"
      :opened="store.openState"
      :close-on-outside-click="true"
      template="listMenu"
    >
      <template #listMenu>
        <NavigationList />
      </template>
      <div id="content">
        <router-view />
      </div>
    </DxDrawer>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import DxDrawer from "devextreme-vue/drawer"
import NavigationList from "./components/NavigationList.vue"

import store from "./store"

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    DxDrawer,
    NavigationList
  },
  data () {
    return {
      store,
    }
  },
  methods: {
    openLeftMenu () {
      this.$refs.leftMenu.$_instance.show()
      // console.log()
    }
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
.ki_form h3 {
  color: rgb(94 94 94);
  font-family: "Helvetica Neue", "Segoe UI", helvetica, verdana, sans-serif;
}
.dx-drawer-overlap.dx-drawer-left .dx-drawer-wrapper, .dx-drawer-overlap.dx-drawer-right .dx-drawer-wrapper {
    overflow-y:hidden;
}
</style>
