<template>
  <div class="HomeFooter">
    <div class="communication">
     <h2>联系方式</h2>
     <p>遇到任何问题请加群讨论</p>
     <p>我们并不强大，但是我们从来不会放弃</p>
     <p>这是我俩的爱好，也是大家的爱好</p>
     <p>永远年轻，我们永远热泪盈眶</p>
     <p>联系方式在最下方</p>
    </div>
    <div class="copyRight">
     <a href="https://jq.qq.com/?_wv=1027&k=qV4yU2i3">© Night. All rights reserved.点击直链加群</a>
    </div>
  </div>
</template>

<script>
export default {
    name:"HomeFooter",

}
</script>

<style lang="less" scoped>
.HomeFooter{
  width: 100%;
   background-color: #e44c65;
   position: relative;
  .communication{
     height: 500px;
    background-color: #087de4;
    text-align: center;
    color: white;
    p{
      font-size: 20px;
      margin: 50px;
    }
  }
  .copyRight{
    width: 100%;
    height: 300px;
    background-color: #272833;
    color: white;
    text-align: center;
    position: relative;
    a{
      position: absolute;
      bottom: 0;
      left: 45%;
      text-decoration: none;
      color: white;
    }
  }
}
</style>