<template>
  <div class="background">
    <div class="app">
      <div class="title">注册</div>
      <div class="infos">
        <el-input v-model="userInfo.name" placeholder="请输入姓名" clearable />
        <el-input
          v-model="userInfo.nickName"
          placeholder="请输入昵称"
          clearable
        />
        <el-input v-model="userInfo.email" placeholder="请输入邮箱" clearable />
        <el-input
          v-model="userInfo.phoneNumber"
          placeholder="请输入电话号码"
          clearable
        />
        <el-input
          v-model="userInfo.password"
          type="password"
          placeholder="请输入你的密码"
          show-password
        />
        <el-input
          v-model="password2th"
          type="password"
          placeholder="请确定密码"
          show-password
        />
        <el-form-item class="btns">
          <el-button type="primary" @click="register" round>注册</el-button>
          <el-button type="primary" @click="resetForm" round>重置</el-button>
        </el-form-item>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from 'vue-router';
export default {
  name: "UserRegister",
  setup() {
    const $router=useRouter()
    let userInfo = reactive({
      name: "",
      nickName: "",
      email: "",
      phoneNumber: "",
      password: "",
    });
    let password2th = ref("");
    function register() {
      let phoneReg = /^1[3-9][0-9]{9}$/;
      let flag = phoneReg.test(userInfo.phoneNumber);
      let emailReg = /^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/;
      let flag1 = emailReg.test(userInfo.email);
      if (userInfo.password != password2th.value) {
        alert("前后密码不一致，请修改");
      } else {
        if (flag && flag1) {
          alert("注册成功");
          $router.push('/')
        } else {
          alert("电话或邮箱格式出错");
        }
      }
    }
    function resetForm() {
      for (let item in userInfo) {
        userInfo[item] = "";
      }
      password2th = "";
    }
    return { userInfo, password2th, register, resetForm };
  },
};
</script>

<style lang="less" scoped>
.background {
  width: 100%;
  min-height: 1000px;
  position: relative;
  background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.soogif.com%2FiXaRtjkwlsyUF2NrJRcWOh60cJQuaLNT.gif&refer=http%3A%2F%2Fimg.soogif.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658587650&t=b12eebc648dca7abbe1cc3b865a47845");
  .app {
    width: 489px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    transform: translateX(-50%) translateY(-50%);
    margin: 100px auto;
    text-align: center;
    border-radius: 7px;
    background-color: white;
    border: 1px solid rgb(195, 205, 244);
  }
  .title {
    font-size: 29px;
    font-weight: 700;
    margin-top: 8px;
    margin-bottom: 15px;
  }
  .el-input {
    border-radius: 3px;
    /* margin-top: 8px;
  margin-bottom: 12px; */
    height: 46px;
  }
  .btns {
    /* text-align: center; */
    padding-left: 163px;
    background-color: white;
  }
  .btns button {
    /* background-color:rgb(195,205,244); */
    margin-right: 17px;
  }
}
</style>
