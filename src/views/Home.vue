<template>
  <div class="home">
    <button @click="apple">apple</button>
    <button @click="popup">弹窗</button>
    <button @click="practice">vue练习</button>
    <!-- <button @click="popup">弹窗</button>
    <button @click="popup">弹窗</button>
    <button @click="popup">弹窗</button>
    <button @click="popup">弹窗</button>
    <button @click="popup">弹窗</button>
    <button @click="popup">弹窗</button> -->
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
    popup() {
      this.$router.push("/popup");
    },
    practice() {
      this.$router.push("/practice");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  line-height: 0;
  button {
    width: 80px;
    height: 40px;
    border-radius: 30px;
    border: 1px solid #ccc;
    outline: none;
    background: none;
    font-size: 20px;
    margin-right: 5px;
  }
}
</style>
