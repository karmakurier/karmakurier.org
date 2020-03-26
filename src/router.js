import Vue from "vue";
import VueRouter from "vue-router";

// ---------------------------------------------------------

import HelperForgotPassword from "./views/HelperForgotPassword.vue";
import HelperLeaderboard from "./views/HelperLeaderboard.vue";
import HelperLogin from "./views/HelperLogin.vue";
import HelperMissionDetails from "./views/HelperMissionDetails.vue";
import HelperMissionList from "./views/HelperMissionList.vue";
import HelperMissionSignUp from "./views/HelperMissionSignUp.vue";
import HelperProfile from "./views/HelperProfile.vue";
import HelperRedeem from "./views/HelperRedeem.vue";
import HelperSignUp from "./views/HelperSignUp.vue";
import HelpFAQ from "./views/HelpFAQ.vue";
import Home from "./views/Home.vue";
import Impressum from "./views/Impressum.vue";
import MissionDetailsPublic from "./views/MissionDetailsPublic.vue";
import MissionListPublic from "./views/MissionListPublic.vue";
import MissionSignUpThankYou from "./views/MissionSignUpThankYou.vue";
import MissionSignUp from "./views/MissionSignUp.vue";
import Privacy from "./views/Privacy.vue";
import TermsConditions from "./views/TermsConditions.vue";

// ---------------------------------------------------------

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/passwort-vergessen",
        name: "HelperForgotPassword",
        component: HelperForgotPassword
    },
    {
        path: "/rangliste",
        name: "HelperLeaderboard",
        component: HelperLeaderboard
    },
    {
        path: "/login",
        name: "HelperLogin",
        component: HelperLogin
    },
    {
        path: "/missions-details/:id",
        name: "HelperMissionDetails",
        component: HelperMissionDetails
    },
    {
        path: "/missionsliste",
        name: "HelperMissionList",
        component: HelperMissionList
    },
    {
        path: "/mission-eintragen",
        name: "HelperMissionSignUp",
        component: HelperMissionSignUp
    },
    {
        path: "/profil",
        name: "HelperProfile",
        component: HelperProfile
    },
    {
        path: "/karma-einloesen",
        name: "HelperRedeem",
        component: HelperRedeem
    },
    {
        path: "/registrieren",
        name: "HelperSignUp",
        component: HelperSignUp
    },
    {
        path: "/hilfe",
        name: "HelpFAQ",
        component: HelpFAQ
    },
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/impressum",
        name: "Impressum",
        component: Impressum
    },
    {
        path: "/mission",
        name: "MissionDetailsPublic",
        component: MissionDetailsPublic
    },
    {
        path: "/mission-in-deiner-naehe",
        name: "MissionListPublic",
        component: MissionListPublic
    },
    {
        path: "/danke",
        name: "MissionSignUpThankYou",
        component: MissionSignUpThankYou
    },
    {
        path: "/ich-brauche-hilfe",
        name: "MissionSignUp",
        component: MissionSignUp
    },
    {
        path: "/datenschutz",
        name: "Privacy",
        component: Privacy
    },
    {
        path: "/agb",
        name: "TermsConditions",
        component: TermsConditions
    }
];


// ---------------------------------------------------------

Vue.use(VueRouter);
export default new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});