import { createRouter, createWebHistory } from "vue-router";
import { firstMenu } from "../utils/map-menu";
import localCache from "../utils/cache";
import routerContext from '../router/main';
const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/main.vue"),
    children: [],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/views/register/register.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("@/views/not-found/not-found.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to) => {
  if (to.path !== "/login" && to.path !== "/register") {
    const token = localCache.cacheGet("token");
    if (!token) {
      return "/login";
    }
  }
  if (to.path === "/main") {
    return firstMenu.url;
  }
});

const routerFiles = Object.keys(routerContext).reduce((acc, key) => {
  acc[key] = routerContext[key];
  return acc;
}, {});

console.log(routerFiles);

// 你可以进一步处理这些模块，例如注册路由
routerFiles.forEach((module, key) => {
  // 假设每个模块导出一个路由配置对象
  const routeConfig = module.default;
  // 注册路由
  // router.addRoute(routeConfig);
});

export default {router, routerFiles};
