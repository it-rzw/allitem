<template>
  <div class="apple">
    <div class="out" @click="outapple">退出</div>
    <div class="apple_box">
      <div class="apple_title">
        <div class="title_log">
          <img src="" alt="" />
          <span><b>WATCH</b></span>
        </div>
        <div class="title_tabs">
          <ul class="tabs">
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AllitemApple",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    outapple() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.apple {
  height: 100vh;
  background-color: #f5f5f5;
  .out {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 20px;
  }
}
</style>
