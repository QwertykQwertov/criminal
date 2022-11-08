<template>
  <div class="">
    <nav>
      <div class="nav-wrapper">
        <a
          @click="changeLocation('/')"
          class="brand-logo"
        ><i class="large material-icons">account_balance</i>Сервис проверки
          судимостей</a>
        <a
          href="#"
          data-target="mobile-demo"
          class="sidenav-trigger"
        ><i class="material-icons">menu</i></a>
        <ul
          id="nav-mobile"
          class="right hide-on-med-and-down"
        >
          <li>
            <a @click="changeLocation('/policy')">Политика конфиденциальности</a>
          </li>
          <li><a @click="changeLocation('/about')">О проекте</a></li>
          <template v-if="store.authorization">
            <li><a @click="showAccount">Профиль</a></li>
            <li><a @click="changeLocation('/cabinet')">Кабинет</a></li>
          </template>
          <template v-else>
            <li><a @click="changeLocation('/login')">Войти</a></li>
            <li><a @click="changeLocation('/register')">Регистрация</a></li>
          </template>
        </ul>
      </div>
    </nav>
    <!-- Mobile menu -->
    <ul
      ref="mobile-menu"
      class="sidenav sidenav-mobile"
      id="mobile-demo"
    >
      <li>
        <a
          @click="changeLocation('/policy')"
          class="sidenav-close"
        >Политика конфиденциальности</a>
      </li>
      <li><a
          @click="changeLocation('/about')"
          class="sidenav-close"
        >О проекте</a></li>
      <li><a
          @click="changeLocation('/login')"
          class="sidenav-close"
        >Войти</a></li>
      <li><a
          @click="changeLocation('/register')"
          class="sidenav-close"
        >Регистрация</a></li>
    </ul>
    <ModalAccount />
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";
import ModalAccount from "./ModalAccount.vue"
import store from "../store"
export default {
  components: {
    DxButton,
    ModalAccount,
  },
  data () {
    return {
      store,
    };
  },
  created () {
    this.$nextTick(() => {
      const mobileBar = this.$refs["mobile-menu"];
      M.Sidenav.init(mobileBar);
    });
  },
  methods: {
    showAccount () {
      this.$emit('openMenu')
      // this.store.openState = true
    },
    changeLocation (route) {
      if (this.$router.currentRoute.path != route) this.$router.push(route)
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
.brand-logo {
  cursor: pointer;
}
a {
  transition: 0.5s linear !important;
}
a:hover {
  color: #c2783b;
  transition: 0.3s linear;
}
.nav-wrapper .brand-logo {
  font-size: 1.5rem;
}
.nav-wrapper {
  background: linear-gradient(to right, #50381a, #141111) !important;
}
.sidenav-mobile {
  padding-top: 5%;
  background-color: rgb(86 61 20 / 74%) !important;
}
.sidenav-mobile a {
  color: #fff !important;
}

/* #443837  #483218 */
</style>
