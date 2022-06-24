<template>
  <div class="Products">
    <div class="title">
      <h1>相关产品</h1>
    </div>
    <div class="content">
      <div class="Left">
        <router-link to="/diagnose">
          <img src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/zhi_neng_dao_zhen.7ab87492.png" alt="">
          <h2>智能导诊</h2>
          <div class="innercontent">
            <p>
              解决患者盲目就诊问题，减轻分诊工作压力。降低患者挂错号比例，优化患者就诊流程，有效提高线上线下医疗机构接诊效率。
            </p>
          </div>
        </router-link>
      </div>
      <div class="Center">
        <router-link to="/advance">
          <img src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/zhi_neng_yu_wen_zhen.2f57827a.png" alt="" />
          <h2>智能预问诊</h2>
          <div class="innercontent">
            <p>
              以医疗对话交互形式，在患者就诊前模拟医生问诊流程，提前采集患者病情信息，生成电子病历格式的预问诊报告及病情分析报告发送给医生，使医生可以提前了解患者病情，同时预问诊报告可直接写入EMR系统，提升门诊就医体验与效率。
            </p>
          </div>
        </router-link>
      </div>
      <div class="Right">
        <router-link to="/record">
          <img src="https://open.zuoshouyisheng.com/proxy_router/pc/static/img/jian_kang_dang_an_gou_jian.8f6e4d28.png" alt="" />
          <h2>智能健康档案构建</h2>
          <div class="innercontent">
            <p>
              基于目标人群既往体检报告，结合个人史、家族史等信息，通过左手医生的底层AI能力、行业领先的医学知识图谱和重疾慢病风险预测模型，为其构建智能化的个人健康档案并持续更新完善,
              可广泛服务于医院、体检机构、保险等行业的患者或员工健康档案构建与管理。
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelateProducts",
};
</script>

<style lang="less" scoped>
.Products {
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-image: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.51pptmoban.com%2Fd%2Ffile%2F2012%2F06%2F13%2F2f3b0a6b40d7514986f0892edafd13ec.jpg&refer=http%3A%2F%2Fwww.51pptmoban.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658479200&t=78ccb22605478369b08adda671597341);
  h1 {
    text-align: center;
    color: white;
  }
  a {
    text-decoration: none;
  }
  h2{
    padding: 10px;
    color: black;
  }
  p {
    font-size: 17px;
    color: #666;
    padding: 10px;
  }
  .content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
    position: absolute;
    top: 150px;
    .Left{
      position: relative;
      width: 25%;
      height: 500px;
      img{
        width: 100%;
      }
      background-color: white;
      transition: all .3s;
    }
    .Left:hover{
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgb(0,0,0,.3);

    }
    .Center{
      width: 25%;
      height: 500px;
      img{
        width: 100%;
      }
      background: white;
      transition: all .3s;
    }
    .Center:hover{
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgb(0,0,0,.3);

    }
    .Right{
      width: 25%;
      height: 500px;
      img{
        width: 100%;
      }
      background: white;
      transition: all .3s;
    }
    .Right:hover{
      transform: translateY(-4px);
      box-shadow: 0 0 10px rgb(0,0,0,.3);

    }
  }
}
</style>