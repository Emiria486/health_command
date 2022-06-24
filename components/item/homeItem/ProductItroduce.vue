<template>
  <div class="app">
    <div 产品介绍 class="title">产品介绍</div>
    <div class="introductions">
      <div class="intro">
        <div class="left">
          <div id="title1">智能交互采集完整病情</div>
          <div class="content">
            对话机器人模拟医生问诊流程，智能采集患者病情信息，包括主诉、现病史、既往史、过敏史、月经婚育史、个人史等信息，并根据患者回复动态追问，帮助医生深入了解患者情况。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-1.5a120998.png"
            alt=""
          />
        </div>
      </div>
      <div class="intro">
        <div class="left">
          <div id="title1">多模态交互样式</div>
          <div class="content">
            支持患者口语化表达主诉，可上传就诊病历图片，支持选择既往就诊记录信息，多模态交互，提升交互体验与信息采集准确度。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-2.955f1086.png"
            alt=""
          />
        </div>
      </div>
      <div class="intro">
        <div class="left">
          <div id="title1">异常危急即时提醒</div>
          <div class="content">
            对话交互过程中，提醒患者异常、危急情况并给出处理建议。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-3.e0d1c6cb.png"
            alt=""
          />
        </div>
      </div>
      <div class="intro">
        <div class="left">
          <div id="title1">规范EMR生成与一键导入</div>
          <div class="content">
            信息采集完成后，自动生成规范化的电子病历文本
            ；医生确认无误可一键导入EMR系统，有效节省医生书写病历时间。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-4.c2c73499.png"
            alt=""
          />
        </div>
      </div>
      <div class="intro">
        <div class="left">
          <div id="title1">医生端丰富信息呈现</div>
          <div class="content">
            医生可便捷查看基于患者对话生成的规范电子病历，患者的预问诊病情分析报告，包括症状评估、可视化病情展示等内容，方便医生快速定位重点信息。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-5.2d7fdb09.png"
            alt=""
          />
        </div>
      </div>
      <div class="intro">
        <div class="left">
          <div id="title1">产品运营数据可视化展示</div>
          <div class="content">
            系统整体运营情况可视化展示，包括使用人次、使用率、完成率、初诊和复诊分布情况等。
          </div>
          <button>了解详情</button>
        </div>
        <div class="right">
          <img
            src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/ywz-6.269bd231.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProdectItroduce",
};
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  padding: 60px 0 0 0;
  background-color: #f9fafb;
  .title {
    font-size: 36px;
    text-align: center;
    font-weight: 600;
  }
  .introductions {
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    button {
      width: 100px;
      height: 30px;
      font-size: 16px;
      color: white;
      background-color: #4865ff;
      border: #4865ff;
    }
    .intro {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .left {
        #title1 {
          font-size: 25px;
          font-weight: 400;
        }
        .content {
          width: 200px;
          height: 250px;
          font-size: 20px;
          font-weight: 400;
          color: #666;
        }
      }
      .right {
        img {
          width: 600px;
          height: 400px;
        }
      }
    }
  }
}
</style>