<template>
  <div class="app">
    <div class="header">应用场景</div>
    <div class="card">
      <div class="LeftContent">
        <div id="select1" v-if="select == 1">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/fzkf_1.b80243ae.png"
            alt=""
            class="main"
          />
          <div class="contentRight">
            <p>智慧医院</p>
            <ul>
              <li>就诊前进行患者病情信息收集，提高问诊效率</li>
              <li>可对接EMR系统，核对无误直接写入系统</li>
              <li>辅助医生进行患者病情分析及风险评估</li>
            </ul>
            <p  class="p2">上线案例</p>
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/bei-jing-fu-you.c0196de3.png"
              alt=""
            />
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/shang-hai-hong-fang-zi.763fa8eb.png"
              alt=""
            />
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/bei-jing-yi-yuan.eba2378f.png"
              alt=""
            />
          </div>
        </div>
        <div id="select2" v-else-if="select == 2">
          <img
            class="main"
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-2.8fe34d7c.png"
            alt=""
          />
          <div class="contentRight">
            <p>分级诊疗</p>
            <ul>
              <li>根据采集的信息判断患者病情危重程度实现分流/分级就诊</li>
            </ul>
            <p class="p2">上线案例</p>
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/bei-jing-tian-tan.1e921fd6.png"
              alt=""
            />
            <img
              class="else"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/zhong-guo-yi-ke-da-xue.99709c55.png"
              alt=""
            />
          </div>
        </div>
        <div id="select3" v-if="select == 3">
            <p>互联网医院</p>
            <img
              class="main"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/fzkf_2.8a242fa9.png"
              alt=""
            />
            <div class="contentRight">
            <ul>
              <li>在线诊疗诊前病情信息收集</li>
              <li>可对接EMR系统，核对无误直接写入系统</li>
            </ul>
            <p class="p2">上线案例</p>
            <img
              class="else"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/bei-jing-tian-tan.1e921fd6.png"
              alt=""
            />
            <img
              class="else"
              src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/zhong-guo-yi-ke-da-xue.99709c55.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="RightSelect">
        <div class="Select" tabindex="1" @click="changeCard(1)">
        <p>智慧医院</p>
        </div>
        <div class="Select" tabindex="2"  @click="changeCard(2)">
        <p>分级诊疗</p>
        </div>
        <div class="Select" tabindex="3" @click="changeCard(3)">
        <p>互联网医院</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "AppScenario",
  setup() {
    let select = ref(1);
    function changeCard(data) {
      this.select = data;
    }
    return { select, changeCard };
  },
};
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 700px;
  background-color: #f9fafb;
  .header {
    font-size: 36px;
    text-align: center;
  }
  .card {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    position: relative;
    .LeftContent {
      .main {
        width: 480px;
        height: 452px;
        margin-right: 100px;
      }
      .contentRight {
        width: 300px;
        position: absolute;
        left: 45%;
        top: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
          font-size: 30px;
        }
        li {
          font-size: 15px;
          margin: 10px 0;
        }
        .else {
          width: 158px;
          height: 50px;
          margin: 15px 0;
        }
        .p2{
          margin-top: 50px;
          margin-bottom: 10px;
        }
      }
    }
    .RightSelect {
      width: 15%;
      height: 100%;
      margin-left:10% ;
      margin-right: 10%;
      .Select {
        width: 100%;
        height: 33%;
        border: 1px solid gray;
        cursor: pointer;
        p{
          font-size: 20px;
          font-weight: 400;
          text-align: center;
          padding: 50px;
        }
      }
      .Select:focus{
        background-color:#4865ff;
      }
    }
  }
}
</style>