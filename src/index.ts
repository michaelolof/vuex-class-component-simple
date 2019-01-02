import Vue from "vue";
import App from "./components/App.vue";
import { store } from "./store";

new Vue({
    el: "#app",
    store,   
    components: {
      App,
    },
    render: h => h( App ),
});