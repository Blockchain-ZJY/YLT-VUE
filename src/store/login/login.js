import { defineStore } from "pinia";
import { userMenus } from "../../common/data/menu";
import { mapMenusToRoutes } from "../../utils/map-menu";
import { getUserInfo, login, register, editPassword } from "../../services/login/login";
import router from "../../router";
import localCache from "../../utils/cache";

const useLoginStore = defineStore("login", {
  state: () => ({
    userMenus: null,
    userInfo: null,
    loginAccount: null,
    token: null,
    loginsuccess :1,
  }),
  actions: {
    //注册
    async registerAction(payload) {
      const res = await register(payload);
      if (res.code === 200) {
        router.push("/signin");
      }
    },
    //登录
    async loginAction(payload) {

      const res = await login(payload);
      console.log(res); 

      this.loginAccount = payload;
      localCache.cacheSet("loginAccount", payload);

      const token = `${Math.round(Math.random()) * 1000000}`;
      this.token = token;
      localCache.cacheSet("token", token);
      if(res){
        if (res.code === 200) {
          this.loginsuccess = 1;
          console.log("login success");
          console.log(payload);
          const { account } = payload;
          this.getUserInfoAction({ account });
        } 
      }else{
        this.loginsuccess ++;
        console.log("login failed");
        return ;
      }


      this.userMenus = userMenus;
      localCache.cacheSet("userMenus", userMenus);

      // 动态添加路由
      // const routes = mapMenusToRoutes(this.userMenus);
      // routes.forEach((route) => {
      //   router.addRoute("main", route);
      // });


      router.push("/dashboard/analytics");
    },
    //获取用户信息
    async getUserInfoAction(payload) {
      const res = await getUserInfo(payload);
      this.userInfo = res.data;
      this.userInfo.avatar = `http://localhost:8000/img/${this.userInfo.account}.jpg`;
      localCache.cacheSet("userInfo", this.userInfo);
      console.log(this.userInfo, "user info");
    },
    // 修改密码
    async editPasswordAction(payload) {
      const params = { ...this.loginAccount, ...payload };
      const res = await editPassword(params);
      if (res.code === 200) {
        ElMessage({
          message: "操作成功",
          type: "success",
        });

        this.loginAccount = { ...this.loginAccount, ...payload };
      }
    },
    loadLocalCacheAction() {
      const token = localCache.cacheGet("token");
      if (token) {
        this.token = token;
      }
      const userInfo = localCache.cacheGet("userInfo");
      if (userInfo) {
        this.userInfo = userInfo;
      }
      const loginAccount = localCache.cacheGet("loginAccount");
      if (loginAccount) {
        this.loginAccount = loginAccount;
      }
      const userMenus = localCache.cacheGet("userMenus");
      if (userMenus) {
        const routes = mapMenusToRoutes(userMenus);
        routes.forEach((route) => {
          router.addRoute("main", route);
        });
      }
    },
  },
});

export default useLoginStore;
