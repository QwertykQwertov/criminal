<template>
  <div class="">
    <nav>
      <div class="nav-wrapper">
        <a @click="$router.push('/')" class="brand-logo"
          ><i class="large material-icons">account_balance</i>Сервис проверки
          судимостей</a
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a @click="$router.push('/policy')">Политика конфиденциальности</a>
          </li>
          <li><a @click="$router.push('/about')">О проекте</a></li>
          <li><a @click="showAccount">Профиль</a></li>
          <li><a @click="$router.push('/cabinet')">Кабинет</a></li>
          <li><a @click="$router.push('/login')">Войти</a></li>
          <li><a @click="$router.push('/register')">Регистрация</a></li>
        </ul>
      </div>
    </nav>
    <!-- Mobile menu -->
    <ul ref="mobile-menu" class="sidenav sidenav-mobile" id="mobile-demo">
      <li>
        <a @click="$router.push('/policy')" class="sidenav-close">Политика конфиденциальности</a>
      </li>
      <li><a @click="$router.push('/about')" class="sidenav-close">О проекте</a></li>
      <li><a @click="$router.push('/login')" class="sidenav-close">Войти</a></li>
      <li><a @click="$router.push('/register')" class="sidenav-close">Регистрация</a></li>
    </ul>
    <ModalAccount/>
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
  data() {
    return {
      store,
    };
  },
  created() {
    this.$nextTick(() => {
      const mobileBar = this.$refs["mobile-menu"];
      M.Sidenav.init(mobileBar);
    });
  },
  methods: {
    registrations() {
      this.$router.push("/register");
    },
   showAccount() {
    this.store.showAccount = true
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "materialize-css/dist/css/materialize.min.css";
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
