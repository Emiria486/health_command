export default function LocalSetUserINfo(UserInfo){
    localStorage.setItem('UserInfo',JSON.stringify(UserInfo));
    console.log('用户账号信息保存成功！')
}