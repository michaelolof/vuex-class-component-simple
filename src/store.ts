import Vuex from "vuex";
import Vue from "vue";
import { counter, CounterStore } from "./modules/Counter.vuex";
import { alertMessage, AlertStore } from "./modules/AlertStore.vuex";

Vue.use( Vuex );

export const store = new Vuex.Store({
  modules: {
    counter,
    "alert": alertMessage, // Makesure your namespacedPath is the same as your modules key.
  }
})

export const vxm = {
  // You have to explicitly cast it to CounterStore to get intellisense working in .vue files
  counter: CounterStore.CreateProxy( store, CounterStore ) as CounterStore,
  alert: AlertStore.CreateProxy( store, AlertStore ) as AlertStore,
}

// console.log( vxm.counter.value );