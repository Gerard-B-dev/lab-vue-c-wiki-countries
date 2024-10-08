// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "@/components/CountriesList.vue";
import CountryDetails from "@/components/CountryDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: CountriesList,
  },
  {
    path: "/:alpha3Code",
    name: "detail",
    component: CountryDetails,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
