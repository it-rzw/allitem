<template>
  <div class="apple">
    <div class="out" @click="outapple">退出</div>
    <div class="apple_box">
      <!-- 头部 -->
      <div class="apple_title">
        <div class="title_log">
          <div class="log_box">
            <img src="../../assets/imgs/apple.png" alt="" />
            <span><b>WATCH</b></span>
          </div>
        </div>
        <div class="title_tabs">
          <div class="tabs_box">
            <ul class="tabs">
              <li>Design</li>
              <li>Health</li>
              <li>Workout</li>
              <li>Activity</li>
              <li>Connect</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 手表网站 -->
      <div class="watches_page">
        <div class="che_con">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div class="che_img">
          <img src="" alt="" />
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
  .apple_box {
    margin: 0 10px;
    .apple_title {
      height: 144px;
      font-size: 18px;
      background-color: #fff;
      border-radius: 10px;
      margin-bottom: 40px;
      .title_log {
        display: flex;
        justify-content: center;
        .log_box {
          width: 149.25px;
          height: 32px;
          padding: 31px 0px 33px 0px;
          text-align: center;
          img {
            width: 24.06px;
            height: 23px;
          }
          span {
            b {
              font-size: 22.23px;
              font-weight: bold;
            }
          }
        }
      }
      .title_tabs {
        height: 48px;
        background-color: black;
        border-radius: 0 0 10px 10px;
        display: flex;
        justify-content: center;
        .tabs_box {
          width: 260px;
          .tabs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-size: 12px;
            padding: 16px 0;
          }
        }
      }
    }
  }
}
</style>
