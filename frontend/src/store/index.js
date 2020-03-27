import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { me: {} },
  mutations: {
    /**
     * Authentication Mutations
     */
    setToken(state, payload) {
      localStorage.setItem("id_token", payload.token);
      Vue.set(state, "token", payload.token);
    },
    removeToken(state, payload) {
      localStorage.removeItem("id_token");
      Vue.set(state, "token", undefined);
      payload.router.push("/login");
    }
  },
  actions: {
    getMe({ state }, payload) {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/me")
          .then(res => {
            state.me = res.data;
            resolve();
          })
          .catch(function(error) {
            if (
              (error.response &&
                error.response.statusText === "Unauthorized") ||
              error.response.statusText === "Not Found"
            ) {
              localStorage.removeItem("id_token");
              state.token = "";
              payload.router.push("/login");
            }
          });
      });
    },
    createTask(_, payload) {
      const bodyFormData = new FormData();
      bodyFormData.append("data", JSON.stringify(payload.data));
      bodyFormData.append("voicemail", payload.file);

      return new Promise(resolve => {
        Vue.axios
          .post("/customer/admin/task", bodyFormData, {
            contentType: "multipart/form-data"
          })
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    getAllTasks() {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/task")
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    getMyTasks() {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/me/task")
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    getTask(_, payload) {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/task/" + payload)
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    updateTask(_, payload) {
      return new Promise(resolve => {
        Vue.axios
          .put("/customer/task/" + payload.taskId, {
            status: payload.status,
            comment: payload.comment
          })
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },

    // ADMIN
    ADMIN_getAllTasks() {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/admin/task")
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    ADMIN_getAllUsers() {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/admin/user")
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    ADMIN_getUser(_, payload) {
      return new Promise(resolve => {
        Vue.axios
          .get("/customer/admin/user/" + payload)
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    },
    ADMIN_updateUserRole(_, payload) {
      return new Promise(resolve => {
        Vue.axios
          .put("/customer/admin/user/" + payload.userId, {
            role: payload.role
          })
          .then(res => {
            resolve(res.data);
          })
          .catch(function() {});
      });
    }
  },
  modules: {},
  getters: {
    isAuthorized: state => {
      return !!state.token;
    }
  }
});
