import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect:'/AppScenario',
  children: [{
    path: "/AppScenario",
    name: "AppScenario",
    component: ()=>import('../components/item/homeItem/AppScenario')
  },
  {
    path: "/ProductItroduce",
    name: "ProductItroduce",
    component: ()=>import('../components/item/homeItem/ProductItroduce')
  },
  {
    path: "/ProductSuperiority",
    name: "ProductSuperiority",
    component:()=>import('../components/item/homeItem/ProductSuperiority')
  }
]
  },
  {
    path:"/diagnose",
    name:"diagnose",
    component:()=>import("../components/realizePages/ForDiagnose")
  },
  {
    path:"/advance",
    name:"advance",
    component:()=>import("../components/realizePages/ForAdvance")
  },
  {
    path:"/record",
    name:"record",
    component:()=>import("../components/realizePages/ForRecord")
  },
  {
    path:"/Login",
    name:"Login",
    component:()=>import('../components//item/Login/UserLogin')
  },
  {
    path:"/register",
    name:"register",
    component:()=>import('../components//item/Login/UserRegister')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
