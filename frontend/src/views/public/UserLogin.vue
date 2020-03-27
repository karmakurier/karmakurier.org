<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h1 class="title">
        <span>Mega-schön</span> dich wiederzusehen!
      </h1>
      <ValidationObserver v-slot="{ handleSubmit }">
        <div class="form">
          <ValidationProvider
            class="email"
            name="E-Mail"
            rules="required|min:5"
            v-slot="{ errors }"
          >
            <label for="email">E-Mail</label>
            <input type="text" v-model="loginData.email" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <ValidationProvider name="Passwort" rules="required|min:8" v-slot="{ errors }">
            <label for="email">Passwort</label>
            <input type="password" v-model="loginData.password" />
            <div class="error">{{errors[0]}}</div>
          </ValidationProvider>

          <div class="btn-wrapper">
            <Btn type="is-primary" @click="handleSubmit(login)">Einloggen</Btn>
          </div>
        </div>
      </ValidationObserver>
    </div>
    <p>
      Du hast dein Passwort vergessen? Dann
      <router-link to="/forgot-password">klick hier.</router-link>
      <br />Du hast noch keinen Account? Dann
      <a href="/signup">registriere dich hier.</a>
    </p>
  </div>
</template>

<script>
import Btn from "@/components/atoms/Btn.vue";

export default {
  data() {
    return {
      loginData: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    Btn
  },
  methods: {
    async login() {
      this.loader = true;
      const self = this;

      this.axios
        .post("/login", this.loginData)
        .then(async res => {
          self.axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.token;
          self.$store.commit("setToken", { token: res.data.token });
          await self.$store.dispatch("getMe", { router: self.$router });
          self.$router.push("/dashboard");
          self.loader = false;
        })
        .catch(function() {
          self.loader = false;
        });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/Branding.scss";

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 16px 64px 16px;
}

.form-wrapper {
  border-radius: 4px;
  width: 100%;
  max-width: 320px;
  @media only screen and (min-width: 560px) {
    width: 100%;
    max-width: 420px;
  }
  .title {
    // background-color: $primary;
    span {
      font-weight: 700;
      color: $secondary;
    }
    padding: 16px;
  }
  .form {
    padding: 0 16px 16px 16px;
  }
}

.btn-wrapper {
  margin-top: 4px;
}

p {
  width: 100%;
  max-width: 320px;
  margin-top: 12px;
  padding: 0 16px 0px 16px;
  box-sizing: border-box;
  @media only screen and (min-width: 560px) {
    width: 100%;
    max-width: 420px;
  }
}
</style>
