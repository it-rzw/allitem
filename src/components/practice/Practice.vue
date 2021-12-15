<template>
  <div class="practice">
    <p>Practice页面</p>
    <!-- 声明式渲染 -->
    <div>1、{{ message }}</div>
    <div>
      <div v-bind:title="message2">
        2、鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllitemPractice",

  data() {
    return {
      // 声明式渲染
      message: "hello Vue!",
      message2: "页面加载于",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.practice {
  font-size: 12px;
  p {
    font-size: 30px;
    text-align: center;
    color: red;
  }
}
</style>
