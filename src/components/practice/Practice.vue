<template>
  <div class="practice">
    <p>Practice页面</p>
    <!-- 1、声明式渲染 -->
    <div>1.{{ message }}</div>
    <div v-bind:title="message2">
      2.鼠标悬停几秒钟查看此处动态绑定的提示信息！
    </div>
    <!-- 2、条件与循环 -->
    <div v-if="seen">3.现在你看到我了</div>
    <div>
      4.
      <ol>
        <li v-for="todo in todos" :key="todo">{{ todo.text }}</li>
      </ol>
    </div>
    <!-- 3、反转信息 -->
    <div>
      5. <span>{{ message3 }}</span
      ><br />
      <button v-on:click="reverseMessage3">反转信息</button>
    </div>
    <!-- 4、双向数据绑定 -->
    <div>
      6. <span>{{ message4 }}</span
      ><br />
      <input v-model="message4" type="text" name="" id="" />
    </div>
    <div>
      7. <span>{{ message5 }}</span
      ><br />
      <span>{{ reverseMessage5 }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllitemPractice",

  data() {
    return {
      // 1声明式渲染
      message: "hello Vue!",
      message2: "页面加载于",
      // 2条件与循环
      seen: true, //false
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个项目" },
      ],
      //3 反转的信息
      message3: "Hello Vue.js",
      // 4双向绑定
      message4: "Hello vue!",
      //5使用计算属性
      message5: "Hello",
    };
  },
  computed: {
    // 5使用计算属性
    reverseMessage5() {
      return this.message5.split("").reverse().join("");
    },
  },
  mounted() {},
  methods: {
    // 3点击反转信息按钮
    reverseMessage3() {
      this.message3 = this.message3.split("").reverse().join("");
    },
  },
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
  div {
    border-bottom: 1px solid #777;
    padding-bottom: 5px;
    padding-top: 5px;
  }
}
</style>
