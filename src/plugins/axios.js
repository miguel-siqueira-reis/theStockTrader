import Vue from "vue";
import axios from "axios";

Vue.use({
  install(vue) {
    vue.prototype.$http = axios.create({
      baseURL: "https://curso-vue-473ed-default-rtdb.firebaseio.com/",
    });
  }
})