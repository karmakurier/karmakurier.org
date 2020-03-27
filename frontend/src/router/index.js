import Vue from "vue";
import VueRouter from "vue-router";

// PUBLIC
import LandingPage from "../views/public/LandingPage.vue";
import UserLogin from "../views/public/UserLogin.vue";
import UserSignUp from "../views/public/UserSignUp.vue";

// USER
import Dashboard from "../views/user/Dashboard.vue";
// import Mission from "../views/Mission.vue";
// import User from "../views/User.vue";

// ADMIN
// import AdminCreateMission from "../views/admin/CreateMission.vue";
// import AdminUsers from "../views/admin/Users.vue";
// import AdminMissions from "../views/admin/Missions.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage
  },
  {
    path: "/login",
    name: "UserLogin",
    component: UserLogin
  },
  {
    path: "/signup",
    name: "UserSignUp",
    component: UserSignUp
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
  // {
  //   path: "/faq",
  //   name: "FAQ",
  //   component: FAQ
  // },
  // {
  //   path: "/suche-hilfe",
  //   name: "MissionForm",
  //   component: MissionForm
  // },
  // {
  //   path: "/mission/:missionId",
  //   name: "Mission",
  //   props: true,
  //   component: Mission
  // },
  // {
  //   path: "/user/:userId",
  //   name: "User",
  //   props: true,
  //   component: User
  // },
  // {
  //   path: "/me",
  //   name: "Me",
  //   component: User
  // },

  // Admin
  // {
  //   path: "/admin/create-mission",
  //   name: "AdminCreateMission",
  //   component: AdminCreateMission
  // },
  // {
  //   path: "/admin/users",
  //   name: "AdminUsers",
  //   component: AdminUsers
  // },
  // {
  //   path: "/admin/missions",
  //   name: "AdminMissions",
  //   component: AdminMissions
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
