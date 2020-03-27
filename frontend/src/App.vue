<template>
  <div id="app">
    <PublicNavigation v-if="isAuthorized === false" />
    <UserNavigation v-else-if="isAuthorized === true" />

    <router-view />
    <Footer />

    <div class="demo-wrapper">
      <div class="normalize-width">
        <div class="demo">
          <img src="@/assets/karmakurier_achtung.svg" alt="achtung icon" />
          <div class="text">
            Achtung die Seite befindet sich in der Beta-Phase. Bitte liked und teilt
            <a
              href="https://www.youtube.com/watch?v=6Kr9JdEWCt8"
              target="_blank"
            >unser Video auf Youtube.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PublicNavigation from "@/components/organisms/PublicNavigation.vue";
import UserNavigation from "@/components/organisms/UserNavigation.vue";
import Footer from "@/components/organisms/Footer.vue";

export default {
  components: {
    PublicNavigation,
    UserNavigation,
    Footer
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    isAuthorized() {
      return this.$store.getters.isAuthorized;
    },
    me() {
      return this.$store.state.me;
    }
  },
  async created() {
    const currentRoute = this.$router.currentRoute;
    const token = localStorage.getItem("id_token");
    if (token) {
      this.$store.commit("setToken", { token: token });
      this.axios.defaults.headers.common.Authorization = "Bearer " + token;
      await this.$store.dispatch("getMe", { router: this.$router });
    } else if (
      currentRoute.name !== "UserLogin" &&
      currentRoute.name !== "UserSignUp" &&
      currentRoute.name !== "LandingPage"
    ) {
      this.$router.push("/login");
    }
    // Vue-Router Guard
    this.$router.beforeEach((to, from, next) => {
      if (
        this.isAuthorized ||
        to.name === "UserLogin" ||
        to.name === "UserSignUp" ||
        to.name === "LandingPage"
      ) {
        next();
      }
    });
  }
};
</script>

<style lang="scss">
@import "@/Branding.scss";

#app {
  margin-top: 8px;
  min-height: 100%;
  margin-bottom: 60px;
}

.demo-wrapper {
  position: fixed;
  bottom: 0;
  width: 100%;

  .demo {
    box-sizing: border-box;
    border: solid 3px gold;
    border-radius: 8px;
    padding: 8px 12px 8px 12px;
    margin: 8px 0;
    font-weight: 700;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    text-align: center;

    .text {
      display: inline;
    }

    a {
      margin-left: 4px;

      &:hover {
        text-decoration: underline;
        color: $primary;
      }
    }

    img {
      display: inline-block;
      height: 32px;
      width: 32px;
      margin-right: 16px;
    }

    @media only screen and (min-width: 512px) {
      display: block;
      img {
        margin-bottom: -6px;
      }
    }
    @media only screen and (min-width: 1100px) {
      img {
        margin-bottom: -10px;
        margin-right: 8px;
      }
    }
  }
}
</style>
