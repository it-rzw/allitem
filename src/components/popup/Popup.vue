<template>
  <div class="popup">
    <div @click="outpopup">退出</div>
    <div @click="pressPopup">点击弹框</div>
  </div>
</template>

<script>
export default {
  name: "AllitemPopup",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    //   点击弹框
    pressPopup() {},
    //   退出弹框
    outpopup() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  // font-size: 30px;
}
</style>
