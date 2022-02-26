import Vue from "vue";
import Router from "vue-router";

import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Portifolio from "./pages/Portifolio";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/portifolio",
      component: Portifolio,
      name: "portifolio"
    },
    {
      path: "/stocks",
      component: Stocks,
      name: "stocks"
    }
  ]
})