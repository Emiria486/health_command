import service from "@/request";
export function getLoginUser(){
    return service({
        method:'GET',
        url:'/Login'
    })
}