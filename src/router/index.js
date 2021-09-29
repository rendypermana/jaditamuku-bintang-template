import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes =[
  {
    path: "/",
    name: "LayoutPage",
    component: () => import("@/views/LayoutPage"),
    redirect: {name: 'LayoutPage'},
    children: [
      {
        path: "",
        name: "MainPage",
        component: () => import("@/components/template_three/MainPage"),
        query: {
          to: ""
        },
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
