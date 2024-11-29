<template>
  <main class="grow">
    <section class="relative -mt-32">
      <div
        class="md:block absolute left-1/2 -translate-x-1/2 -mt-36 blur-2xl opacity-70 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <img
          src="../images/auth-illustration.svg"
          class="max-w-none"
          width="1440"
          height="450"
          alt="Page Illustration"
        />
      </div>

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div class="pt-32 pb-12 md:pt-40 md:pb-20">
          <!-- Page header -->
          <div class="max-w-3xl mx-auto text-center pb-12">
            <!-- Logo -->
            <div class="mb-5">
              <router-link class="inline-flex" to="/">
                <div
                  class="relative flex items-center justify-center w-16 h-16 border border-transparent rounded-2xl shadow-2xl [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-2xl"
                >
                  <img
                    class="relative"
                    src="../images/logo.svg"
                    width="42"
                    height="42"
                    alt="Stellar"
                  />
                </div>
              </router-link>
            </div>
            <!-- Page title -->
            <h1
              class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60"
            >
              免费创建账号
            </h1>
          </div>

          <!-- Form -->
          <div class="max-w-sm mx-auto">
            <form>
              <div class="space-y-4">
                <div>
                  <label
                    class="block text-sm text-slate-300 font-medium mb-1"
                    for="company"
                    >账号<span class="text-rose-500">*</span></label
                  >
                  <input
                    id="company"
                    class="form-input w-full"
                    type="text"
                    v-model="account.account"
                    placeholder="用户名"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block text-sm text-slate-300 font-medium mb-1"
                    for="full-name"
                    >全名<span class="text-rose-500">*</span></label
                  >
                  <input
                    id="full-name"
                    class="form-input w-full"
                    type="text"
                    placeholder="张三"
                    v-model="account.name"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block text-sm text-slate-300 font-medium mb-1"
                    for="password"
                    >密码 <span class="text-rose-500">*</span></label
                  >
                  <input
                    id="password"
                    class="form-input w-full"
                    type="password"
                    autocomplete="on"
                    v-model="account.password"
                    required
                  />
                </div>
                <div>
                  <label
                    class="block text-sm text-slate-300 font-medium mb-1"
                    for="referrer"
                    >选择您的用户类型
                    <span class="text-rose-500">*</span></label
                  >
                  <select
                    id="referrer"
                    class="form-select text-sm py-2 w-full"
                    v-model="account.usertype"
                    required
                  >
                    <option>医生</option>
                    <option>患者</option>
                  </select>
                </div>
              </div>
              <div class="mt-6">
                <button
                  type="button"
                  @click="handleRegister"
                  class="btn text-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm group"
                >
                  注册
                  <span
                    class="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                    >-&gt;</span
                  >
                </button>
              </div>
            </form>

            <div class="text-center mt-4">
              <div class="text-sm text-slate-400">
                已经有账号?
                <router-link
                  class="font-medium text-purple-500 hover:text-purple-400 transition duration-150 ease-in-out"
                  to="/signin"
                  >登 录</router-link
                >
              </div>
            </div>

            <!-- Divider -->
            <div class="flex items-center my-6"></div>

            <!-- Social login -->
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Header from "../partials/Header.vue";
import useLoginStore from "@/store/login/login";
import { reactive, ref } from "vue";
const account = reactive({
  account: "",
  name: "",
  password: "",
  usertype: "",
});
const loginStore = useLoginStore();
const handleRegister = () => {
  console.log(account);
  loginStore.registerAction(account);
};
</script>
