<template>
  <div
    :style="{width: leftWidth}"
    style=" background-color: rgb(76 57 31 / 70%); padding-top:10% height:100%"
  >
    <div class="wrapper-list">
      <p class="list-item"><i class="dx-icon-group" />&nbsp&nbsp&nbsp{{store.user.fname + ' ' + store.user.lname}}</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item"><i class="dx-icon-email" />&nbsp&nbsp&nbsp{{store.user.email}}</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item"><i class="dx-icon-money" />&nbsp&nbsp&nbsp{{'Баланс: ' + store.user.balance + ' ₽'}}</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item">Пополнить баланс</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item">В кабинет</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item">Сменить пароль</p>
    </div>
    <div class="wrapper-list">
      <p class="list-item">Написать в техподдержку</p>
    </div>
        <div class="wrapper-list">
      <p class="list-item">Выйти</p>
    </div>
    <a>asfdasfd</a>
  </div>
</template>
<script>
import { DxList } from 'devextreme-vue/list';
import store from "../store"

export default {
  components: {
    DxList,
  },
  data () {
    return {
      store,
      cap: [{}],
    };
  },
  computed: {
    user () {
      return [
        { id: 1, text: this.store.user.fname + ' ' + this.store.user.lname, icon: 'dx-icon-group', },
        { id: 2, text: this.store.user.email, icon: 'dx-icon-email', },
        { id: 5, text: 'Баланс: ' + this.store.user.balance + ' ₽', icon: 'dx-icon-money', },]
    },
    navigation () {
      if (this.store.authorization) {
        return [
          { id: 1, text: 'Политика конфиденциальности', value: '/policy' },
          { id: 2, text: 'О проекте', value: '/about', },
          { id: 5, text: 'Кабинет', value: '/cabinet', },
        ]
      } else {
        return [
          { id: 1, text: 'Политика конфиденциальности', value: '/policy', },
          { id: 2, text: 'О проекте', value: '/about', },
          { id: 3, text: 'Вход', value: '/login', },
          { id: 4, text: 'Регистрация', value: '/register', },
        ]
      }
    },
    leftWidth () {
      console.log(window.innerWidth)
      return window.innerWidth * 0.25 + 'px'
    }
  },
  methods: {
    changeLocation (route) {
      if (this.$router.currentRoute.path != route) this.$router.push(route)
    },
  }
};
</script>
<style scoped>
p {
  color: #fff;
  padding: 20px;
  font-size: 1.1rem;
}
p i {
  font-size: 1.5rem;
}
.wrapper-list {
  border-top: 1px solid #ddd;
  position: static;
  cursor: pointer;
  display: table;
  width: 100%;
  table-layout: fixed;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  outline: 0;
}
.wrapper-list:hover {
  background-color: #3d2e1b;
  transition: .4s linear
}
.list-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: table-cell;
  width: 100%;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: 1000;
}
</style>
