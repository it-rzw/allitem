<template>
  <div class="home">
    <button @click="apple">apple</button>
    <button @click="two">第二页</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  mounted() {},

  methods: {
    apple() {
      this.$router.push("/apple");
    },
    two() {
      console.log(this.$router.push("/about"));
    },
  },
};
</script>
