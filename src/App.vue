<template>
  <div id="app">
    <router-view />
    <!-- <Home></Home> -->
  </div>
</template>

<script>
// import Home from "./views/Home.vue";
export default {
  name: "AllitemApp",

  data() {
    return {};
  },
  components: {
    // Home,
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
