<template>
  <div class="background">
    <div class="app">
      <div class="title">登录</div>
      <div class="infos">
        <el-input
          v-model="account"
          placeholder="请输入电话号码"
          clearable
          maxlength="11"
          show-word-limit
          type="text"
        />
        <el-input
          v-model="password"
          type="password"
          placeholder="请输入密码"
          show-password
          show-word-limit
        />
      </div>
      <el-form-item class="btns">
        <el-button type="primary" @click="login" round>登录</el-button>
        <el-button type="primary" @click="resetLoginForm" round>重置</el-button>
        <el-button type="primary" round @click="$router.push('/register')"
          >注册</el-button
        >
      </el-form-item>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import LocalSetUserINfo from "@/hook/LocalSetUserINfo"
import {getLoginUser} from "@/request/api/home"
export default {
  name: "UserLogin",
  setup() {
    const $router = useRouter();
    const $store=useStore();
    let account = ref("");
    let password = ref("");

    function resetLoginForm() {
      account.value = "";
      password.value = "";
    }
    async function  login() {
      let phoneReg = /^1[3-9][0-9]{9}$/;
      let flag = phoneReg.test(account.value);
      if (flag) {
        let res=await getLoginUser();
        let userDate=res.data;
        console.log("(userDate)",userDate);
        $store.commit("updateUserInfo",userDate);
        LocalSetUserINfo(userDate)
        $router.push("/");
      } else {
        alert("请输入正确的手机号码格式");
      }
    }
    return { account, password, resetLoginForm, login };
  },
};
</script>

<style lang="less" scoped>
.background{
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
.infos input {
  border-radius: 3px;
  margin-top: 8px;
  margin-bottom: 12px;
}
.btns {
  /* text-align: center; */
  padding-left: 113px;
  margin-top: 50px;
}
.btns button {
  /* background-color:rgb(195,205,244); */
  margin-right: 17px;
}
}
</style>