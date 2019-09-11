import Vue from "vue";
import { VuePlugin } from "vuera";
import Hello from "./Hello.vue";

Vue.use(VuePlugin);

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    render: h => h(Hello)
  });
});
