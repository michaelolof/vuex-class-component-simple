<template>
  <div class="inner-app">
    Vuex Class Component Tester
    <div>Value: {{ name }}</div>
    <div>Increase: <button @click="increase">Click Me +</button></div>
    <div>Decrease: <button @click="decrease">Click Me -</button></div>
    <div>Alert Message: <button @click="alert">Click Me!</button></div>
  </div>
</template>


<script lang="ts">
  import Vue from "vue";
  import { vxm } from "../store";
  
  export default Vue.extend({
    computed: {
      name:() => vxm.counter.value,
    },
    methods: {
      increase:() => vxm.counter.increaseValue(),
      decrease: async () => {
        console.log("About to decrease");
        await vxm.counter.delayedDecrease( 2000 );
        console.log("Done decreasing");
      },
      alert:() => vxm.alert.alert({ message: "Hello There", delay: 1000 }),
    },
    mounted() {
      console.log( this.$store.getters );
    }
  });
</script>


<style>
  
</style>