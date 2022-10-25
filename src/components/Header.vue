<template>
      <nav>
    <div class="nav-wrapper">
      <a href="" @click="$router.push('/')" class="brand-logo" style="left:5%">artydev & co</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="" @click="$router.push('/about')">О проекте</a></li>
        <li><a href="" @click="$router.push('/login')">Войти</a></li>
        <li><a href="" @click="$router.push('/register')">Регистрация</a></li>
      </ul>
    </div>
  </nav>
  </template>
  
  <script>

    export default {
      data () {
        return {
          msg: 'Hello World!'
        }
      },
      methods:{
        registrations(){
            this.$router.push('/register')
        }
      }
    }
  </script>
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    @import 'materialize-css/dist/css/materialize.min.css';
    .nav-wrapper{
      background: linear-gradient(to right,#50381a, #141111) !important;
    }
    /* #443837  #483218 */
  </style>