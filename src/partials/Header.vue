<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Site branding -->
        <div class="flex-1">
          <!-- Logo -->
          <router-link class="inline-flex" to="/" aria-label="Cruip">
            <img
              class="max-w-none"
              src="../images/logo.svg"
              width="38"
              height="38"
              alt="Stellar"
            />
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:grow">
          <!-- Desktop menu links -->
          <ul class="flex grow justify-center flex-wrap items-center">
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/"
                >主页</router-link
              >
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/integrations"
                >技术架构</router-link
              >
            </li>

            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/signin"
                >医链通</router-link
              >
            </li>
            <!-- <li>
              <router-link class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out" to="/changelog">Changelog</router-link>
            </li> -->
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/pricing"
                >评论</router-link
              >
            </li>

            <li>
              <router-link
                class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                to="/changelog"
                >区块链</router-link
              >
            </li>
            <li>
              <router-link
                class="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                to="/about"
                >关于我们</router-link
              >
            </li>
          </ul>
        </nav>

        <!-- Desktop sign in links -->
        <ul class="flex-1 flex justify-end items-center">
          <li>
            <router-link
              class="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
              to="/signin"
              >登录</router-link
            >
          </li>
          <li class="ml-6">
            <router-link
              class="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
              to="/signup"
            >
              <span class="relative inline-flex items-center">
                注 册<span
                  class="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1"
                  >-&gt;</span
                >
              </span>
            </router-link>
          </li>
        </ul>

        <!-- Mobile menu -->
        <div class="md:hidden flex items-center ml-4">
          <!-- Hamburger button -->
          <button
            class="hamburger"
            ref="hamburger"
            :class="{ active: mobileNavOpen }"
            @click="mobileNavOpen = !mobileNavOpen"
            aria-controls="mobile-nav"
            :aria-expanded="mobileNavOpen"
          >
            <span class="sr-only">Menu</span>
            <svg
              class="w-5 h-5 fill-current text-slate-300 hover:text-white transition duration-150 ease-in-out"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="2" width="20" height="2" rx="1" />
              <rect y="9" width="20" height="2" rx="1" />
              <rect y="16" width="20" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <nav
            id="mobile-nav"
            class="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
            ref="mobileNav"
            :style="[
              mobileNavOpen
                ? { maxHeight: $refs.mobileNav.scrollHeight + 'px', opacity: 1 }
                : { maxHeight: 0, opacity: 0.8 },
            ]"
            @click.outside="expanded = false"
            @keydown.escape.window="expanded = false"
          >
            <ul
              class="border border-transparent [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] rounded-lg px-4 py-1.5"
            >
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/about"
                  >About</router-link
                >
              </li>
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/integrations"
                  >Integrations</router-link
                >
              </li>
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/pricing"
                  >Pricing</router-link
                >
              </li>
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/customers"
                  >医链通</router-link
                >
              </li>
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/changelog"
                  >Changelog</router-link
                >
              </li>
              <li>
                <router-link
                  class="flex font-medium text-sm text-slate-300 hover:text-white py-1.5"
                  to="/changelog"
                  >区块链浏览器</router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "Header",
  setup() {
    const mobileNavOpen = ref(false);
    const mobileNav = ref(null);
    const hamburger = ref(null);

    // close on click outside
    const clickHandler = ({ target }) => {
      if (
        !mobileNavOpen.value ||
        mobileNav.value.contains(target) ||
        hamburger.value.contains(target)
      )
        return;
      mobileNavOpen.value = false;
    };

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen.value || keyCode !== 27) return;
      mobileNavOpen.value = false;
    };

    onMounted(() => {
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });

    return {
      mobileNavOpen,
      mobileNav,
      hamburger,
    };
  },
};
</script>