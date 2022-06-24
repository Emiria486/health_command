import { createStore } from 'vuex'

export default createStore({
  state: {
    UserInfo:{
      name:'刘永杰',
      NickName:'tetu137',
      email:'liuyongjiesb@163.com',
      phoneNumber:'18141445244',
      passWord:'throneofelves',
      isAdministrators:false,
      age:20,
      weight:100,
      height:175
    },
    isLogin:false
  },
  getters: {
  },
  mutations: {
    updateUserInfo:function(state,value){
      console.log("+++",value)
      state.UserInfo.phoneNumber=value.userAccount
      state.UserInfo.passWord=value.userPassWord
      state.isLogin=true
    }
  },
  actions: {
  },
  modules: {
  }
})
