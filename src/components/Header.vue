<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <a @click="$router.push('/')" class="brand-logo"
          ><i class="large material-icons">account_balance</i>Сервис проверки
          судимостей</a
        >
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a @click="$router.push('/policy')">Политика конфиденциальности</a>
          </li>
          <li><a @click="$router.push('/about')">О проекте</a></li>
          <li><a @click="$router.push('/login')">Войти</a></li>
          <li><a @click="$router.push('/register')">Регистрация</a></li>
        </ul>
      </div>
    </nav>
    <!-- Mobile menu -->
    <ul ref="mobile-menu" class="sidenav" id="mobile-demo">
      <li>
        <a @click="$router.push('/policy')">Политика конфиденциальности</a>
      </li>
      <li><a @click="$router.push('/about')">О проекте</a></li>
      <li><a @click="$router.push('/login')">Войти</a></li>
      <li><a @click="$router.push('/register')">Регистрация</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  created() {
    this.$nextTick(() => {
      const mobileBar = this.$refs['mobile-menu']
      console.log(mobileBar)
      M.Sidenav.init(mobileBar)
    });
  },
  methods: {
    registrations() {
      this.$router.push("/register");
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
.sidenav{
  padding-top: 5%;
  background-color: rgb(86 61 20 / 74%)!important;
}
.sidenav a{
  color: #fff !important;
}
/* #443837  #483218 */
</style>
