<template>
  <div class="apple">
    <div class="out" @click="outapple">X</div>
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
      <!-- 手表网页 -->
      <div class="watches_page">
        <div class="ches_con">
          <div class="ches_box">
            <div class="ches_head">
              <p><b>Change</b></p>
              <p><b>starts within.</b></p>
            </div>
            <div class="ches_part">
              <p>Apple Watch Series 4.</p>
              <p>Fundamentally redesigned and</p>
              <p>re-engineered to help you be even</p>
              <p>more active, healthy, and connectad.</p>
            </div>
            <div class="ches_http">
              <p>Visit website ></p>
            </div>
          </div>
          <div class="ches_btn">Buy</div>
        </div>
        <div class="ches_img">
          <img src="../../assets/imgs/che.png" alt="" />
        </div>
      </div>
      <!-- 商品区域 -->
      <div class="apple_goods">
        <div class="goods_title">
          <div class="gdstle_left">
            <span><b>Check also</b></span>
          </div>
          <div class="gdstle_right">
            <span>See all ></span>
          </div>
        </div>
        <div class="goods">
          <div class="gds_box">
            <div class="gds_img">
              <img src="../../assets/imgs/Airpods.png" alt="" />
            </div>
            <div class="gds_part">
              <div class="gds_model">
                <span><b>AirPods</b></span>
              </div>
              <div class="gds_price"><span>$199.00</span></div>
              <div class="gds_btn"><span>Buy</span></div>
            </div>
          </div>

          <div class="gds_box">
            <div class="gds_img">
              <img src="../../assets/imgs/Apple card.png" alt="" />
            </div>
            <div class="gds_part">
              <div class="gds_model">
                <span><b>lphone XR</b></span>
              </div>
              <div class="gds_price"><span>$799.00</span></div>
              <div class="gds_btn"><span>Buy</span></div>
            </div>
          </div>

          <div class="gds_box">
            <div class="gds_img">
              <img src="../../assets/imgs/Apple tv.png" alt="" />
            </div>
            <div class="gds_part">
              <div class="gds_model">
                <span><b>Apple TV 4k</b></span>
              </div>
              <div class="gds_price"><span>$179.00</span></div>
              <div class="gds_btn"><span>Buy</span></div>
            </div>
          </div>

          <div class="gds_box">
            <div class="gds_img">
              <img src="../../assets/imgs/Apple card.png" alt="" />
            </div>
            <div class="gds_part">
              <div class="gds_model">
                <span><b>Apple Card</b></span>
              </div>
              <div class="gds_price"><span>Free*</span></div>
              <div class="gds_btn"><span>Buy</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer_con_left">
          <p
            style="
              padding-top: 20px;
              padding-bottom: 10px;
              font-size: 18px;
              font-weight: 700;
            "
          >
            Follow Us.
          </p>
          <p>We are always looking for new</p>
          <p>projects and collaborations.</p>
          <p>Feel free contact us.</p>
          <div class="footer_tu">
            <img src="../../assets/imgs/Vector.png" alt="" />
            <img
              src="../../assets/imgs/Vectorr.png"
              alt=""
              style="width: 18px"
            />
            <img
              src="../../assets/imgs/Vectoor.png"
              alt=""
              style="width: 18px"
            />
          </div>
        </div>
        <div class="footer_con_right">
          <p
            style="
              padding-top: 20px;
              padding-bottom: 15px;
              font-size: 18px;
              font-weight: 700;
              color: #0c1014;
            "
          >
            Contact Us.
          </p>
          <p style="margin-bottom: 5px">One Apple Park Way</p>
          <p>Cupertino,CA 95014</p>
          <p style="padding-bottom: 10px; padding-top: 10px; color: #515658">
            (408)996-1010
          </p>
          <p style="padding-bottom: 20px; color: #1890ff">support@apple.com</p>
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
* {
  box-sizing: border-box;
}
.apple {
  background-color: #f5f5f5;
  .out {
    position: fixed;
    top: 0;
    left: 0;
    font-size: 20px;
    border: 1px solid #ccc;
    background-color: red;
    color: #fff;
    padding: 3px;
  }
  .apple_box {
    margin: 0 20px;
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
            width: 28px;
            height: 26px;
          }
          span {
            b {
              font-size: 24.23px;
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
          width: 320px;
          .tabs {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-size: 14px;
            padding: 16px 0;
          }
        }
      }
    }
    .watches_page {
      height: 496px;
      background-color: #fff;
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      border-radius: 8px;
      margin-bottom: 40px;
      .ches_con {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        .ches_head {
          p {
            b {
              font-size: 30px;
              font-weight: bold;
            }
          }
        }
        .ches_box {
          height: 230px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-top: -50px;
          .ches_head {
            p {
              // width: 150px;
              // white-space: nowrap;
              // text-overflow: ellipsis;
              // overflow: hidden;
              b {
                font-size: 30px;
                font-weight: bold;
              }
            }
          }
          .ches_part {
            color: #515658;
            // p {
            //   width: 150px;
            //   white-space: nowrap;
            //   text-overflow: ellipsis;
            //   overflow: hidden;
            // }
          }
          .ches_http {
            font-size: 14px;
            color: #1890ff;
          }
        }
        .ches_btn {
          width: 128px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border-radius: 8px;
          font-size: 20px;
          background-color: #1890ff;
          color: #fff;
        }
      }
      .ches_img {
        img {
          width: 176px;
          height: 496px;
        }
      }
    }
    .apple_goods {
      height: 809px;
      background-color: #fff;
      border-radius: 8px;
      .goods_title {
        display: flex;
        justify-content: space-around;
        padding: 60px 0 40px 0;
        .gdstle_left {
          font-size: 22px;
          span {
            b {
              font-weight: bold;
            }
          }
        }
        .gdstle_right {
          color: #2395ff;
          font-size: 16px;
        }
      }
      .goods {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .gds_box {
          width: 167px;
          height: 269px;
          font-size: 16px;
          margin: 30px 0;
          .gds_img {
            height: 167px;
            margin-bottom: 20px;
            img {
              width: 167px;
              height: 167px;
            }
          }
          .gds_part {
            height: 85px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            .gds_model {
              font-weight: bold;
              font-size: 14px;
              line-height: 19px;
            }
            .gds_price {
              color: #5f6566;
              font-size: 12px;
              line-height: 20px;
            }
            .gds_btn {
              width: 56px;
              height: 24px;
              background-color: #2395ff;
              color: #fff;
              text-align: center;
              line-height: 24px;
              border-radius: 4px;
            }
          }
        }
      }
    }
    .footer {
      height: 250px;
      background: white;
      margin-top: 35px;
      border-radius: 8px 8px 8px 8px;
      margin-bottom: 35px;
      display: flex;
      font-size: 10px;
      .footer_con_left {
        width: 60%;
        height: 250px;
        // background: yellow;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          padding-left: 20px;
        }
        .footer_tu {
          width: 50%;
          height: 30px;
          // background: pink;
          margin-left: 20px;
          margin: 20px;
          display: flex;
          justify-content: space-between;
          img {
            width: 20px;
            height: 30px;
          }
        }
      }
      .footer_con_right {
        width: 40%;
        height: 250px;
        // background: green;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p {
          font-size: 11px;
          color: #515658;
        }
      }
    }
  }
}
</style>
