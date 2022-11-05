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
          <!-- <li><a @click="openAccountMenu">Аккаунт</a></li> -->
          <li><a @click="$router.push('/cabinet')">Аккаунт</a></li>
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

    <ul
      ref="account-menu"
      class="sidenav "
      :class="{ 'sidenav-right': isOpenAccountMenu }"
      id="account-menu"
    >
      <li>
        <div class="user-view">
          <div class="background">
            <img src="../assets/office.jpg" />
          </div>
          <a href="#user"><img class="circle" src="../assets/yuna.jpg"/></a>
          <a href="#name"><span class="white-text name">Name</span></a>
          <a href="#email"><span class="white-text email">email@gmail.com</span></a>
          <a href=""><span class="white-text email">balance: 10₽</span></a>
        </div>
      </li>
      <li>
        <a href="#!"><i class="material-icons sidenav-close" >work</i>В кабинет</a>
      </li>
      <li><a href="#!"><i class="material-icons sidenav-close">monetization_on</i>Пополнить баланс</a></li>
      <li><div class="divider"></div></li>
      <li><a class="waves-effect" href="#!"><i class="material-icons sidenav-close">room_service</i>Техподдержка</a></li>
      <!-- <li><DxButton type="default" icon="runner" text="Выйти" /></li>1  -->
      <li><a @click="$router.push('/login')" class="waves-effect waves-light btn blue darken-4 sidenav-close">Выход</a></li>
    </ul>
  </div>
</template>

<script>
import DxButton from "devextreme-vue/button";
export default {
  components: {
    DxButton
  },
  data() {
    return {
      msg: "Hello World!",
      instanceAccountNav: null,
      isOpenAccountMenu: false
    };
  },
  created() {
    this.$nextTick(() => {
      const mobileBar = this.$refs["mobile-menu"];
      M.Sidenav.init(mobileBar);
      const accountNav = this.$refs["account-menu"];
      M.Sidenav.init(this.$refs["account-menu"]);
      this.instanceAccountNav = M.Sidenav.getInstance(accountNav);
    });
  },
  methods: {
    registrations() {
      this.$router.push("/register");
    },
    openAccountMenu() {
      this.instanceAccountNav.open();
      this.isOpenAccountMenu = true;
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
.sidenav-right {
  right: 0;
  left: auto;
}
/* #443837  #483218 */
</style>
