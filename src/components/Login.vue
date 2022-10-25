<template>
  <div style="display:flex; justify-content: center; margin-top:5%;">
    <div class="form ki_form">
      <h3
        style='color:rgb(94 94 94);    font-family: "Helvetica Neue","Segoe UI",helvetica,verdana,sans-serif;'
      >
        Вход
      </h3>
      <hr style="border: 1px solid #f5f5f5;" />
      <div class="dx-fieldset">
        <div class="dx-field">
          <div class="dx-field-label">Логин:</div>
          <div class="dx-field-value">
            <DxTextBox
              v-model="email"
              :value="email"
              mode="email"
              :show-clear-button="true"
              :hover-state-enabled="false"
              placeholder="Введите email"
            >
              <DxValidator>
                <DxRequiredRule message="Email обязателен для заполнения" />
                <DxEmailRule message="Некорректный Email!" />
              </DxValidator>
            </DxTextBox>
          </div>
        </div>
        <div class="dx-field">
          <div class="dx-field-label">Пароль:</div>
          <div class="dx-field-value">
            <DxTextBox
              v-model="password"
              :value="password"
              :show-clear-button="true"
              mode="password"
              placeholder="Введите пароль"
            >
              <DxValidator>
                <DxRequiredRule message="Пароль не заполнен" />
              </DxValidator>
            </DxTextBox>
          </div>
        </div>
       
      </div>
      <div class="dx-fieldset">
        <DxValidationSummary id="summary" />
        <DxButton
          id="button"
          :use-submit-behavior="true"
          text="Продолжить"
          type="success"
          @click="handleSubmit($event)"
        />
      </div>
    </div>

    <!-- <h4>Login</h4>
    <form>
      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" v-model="email" required autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="password" type="password" v-model="password" required />
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">
          Login
        </button>
      </div>
    </form> -->
  </div>
</template>
<script>
import DxTextBox from "devextreme-vue/text-box";
import DxButton from "devextreme-vue/button";
import DxValidationSummary from "devextreme-vue/validation-summary";
import {
  DxValidator,
  DxRequiredRule,
  DxCompareRule,
  DxEmailRule,
  DxPatternRule,
  DxStringLengthRule,
  DxRangeRule,
  DxAsyncRule
} from "devextreme-vue/validator";

export default {
  components: {
    DxTextBox,
    DxValidator,
    DxRequiredRule,
    DxCompareRule,
    DxEmailRule,
    DxPatternRule,
    DxStringLengthRule,
    DxRangeRule,
    DxAsyncRule,
    DxButton,
    DxValidationSummary
  },
  name: "Header",
  data() {
    return {
      email: "",
      password: ""
    };
  },created(){
    document.title = 'Суды - Вход'
  },
  methods: {
    handleSubmit(e) {
      // e.preventDefault();
      if (this.password.length > 0) {
        this.$http
          .post("http://localhost:3000/login", {
            email: this.email,
            password: this.password
          })
          .then(response => {
            let is_admin = response.data.user.is_admin;
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("jwt", response.data.token);
            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                if (is_admin == 1) {
                  this.$router.push("admin");
                } else {
                  this.$router.push("dashboard");
                }
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>
<style scoped>
.ki_form{
  width:60% !important; 
  border: 8px solid #f5f5f5;
  background: rgb(255 255 255 / 60%);
}
/* #443837  #483218 */
</style>
