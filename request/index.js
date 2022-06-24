import axios from "axios";
let service=axios.create({
    baseURL:"https://dev.usemock.com/62b51a14bdf12effe9d1e9fc",
    timeout:3000,
    withCredentials:true
})
export default service