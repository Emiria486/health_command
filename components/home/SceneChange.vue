<template>
  <div class="showDemo">
    <div class="left">
      <div id="title">智能预问诊</div>
      <div class="content">
        以医疗对话交互形式，在患者就诊前模拟医生问诊流程，提前采集患者病情信息，生成电子病历格式的预问诊报告及病情分析报告发送给医生，使医生可以提前了解患者病情，同时预问诊报告可直接写入EMR系统，提升门诊就医体验与效率。
      </div>
      <button>申请合作</button>
      <button>体验demo</button>
    </div>
    <div class="right">
    </div>
  </div>
  <ul class="changeNav">
    <li tabindex="1"><router-link to="AppScenario">应用场景</router-link></li>
    <li tabindex="2"><router-link to="ProductItroduce">产品介绍</router-link></li>
    <li tabindex="3"><router-link to="ProductSuperiority">产品优势</router-link></li>
  </ul>
  <div class="panel">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "SceneChange",
};
</script>

<style lang="less" scoped>
.showDemo {
  width: 100%;
  padding: 60px 0 0 0;
  background-color: #f9fafb;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    width: 30%;
    #title {
      font-size: 36px;
      font-weight: 600;
      margin-bottom: 50px;
    }
    .content {
      width: 500px;
      font-size: 20px;
      font-weight: 400;
      color: #666;
      margin-bottom: 50px;
    }
    button {
      width: 100px;
      height: 30px;
      font-size: 16px;
      color: white;
      background-color: #4865ff;
      border: #4865ff;
      margin-left: 20px;
    }
  }
  .right {
    width: 600px;
    height: 400px;
    background-image: url("https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz.59b6922b.png");
    background-size: cover;
  }
}
.changeNav {
  width: 100%;
  display: flex;
  height: 48px;
  line-height: 48px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 40px;
  border-top: 1px solid rgba(239, 234, 234, 0.622);
  li {
    flex-grow: 1;
    list-style-type: none;
    a {
      display: block;
      font-size: 36px;
      text-align: center;
    }
  }
  
}
</style>