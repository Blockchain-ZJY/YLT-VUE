<template>
  <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
  <!-- * Custom styles in src/css/additional-styles/theme.scss -->
  <div class="stellar-carousel swiper-container group">
    <div class="swiper-wrapper w-fit">
      <!-- Carousel items -->
      <div class="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
        <div class="flex flex-col p-5 h-full">
          <div class="flex items-center space-x-3 mb-3">
            <div class="relative">
              <img src="../images/integrations-01.svg" width="40" height="40" alt="Icon 01">
              <img class="absolute top-0 -right-1" src="../images/star.svg" width="16" height="16" alt="Star" aria-hidden="true">
            </div>
            <router-link class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" to="/integrations-single">Hypledger Fabric</router-link>
          </div>
          <div class="grow mb-4">
            <div class="text-sm text-slate-400">Hyperledger Fabric 是一个开源的企业级许可区块链框架。它是 Hyperledger 项目中的一个重要组成部分，由 Linux 基金会主导开发。在众多区块链解决方案中，Fabric 以其适合企业应用场景的特性而备受关注。</div>
          </div>
          <div class="flex justify-between">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-01.jpg" width="24" height="24" alt="Avatar 01">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-02.jpg" width="24" height="24" alt="Avatar 02">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-03.jpg" width="24" height="24" alt="Avatar 03">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-04.jpg" width="24" height="24" alt="Avatar 04">
            </div>
            <button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
              <span class="sr-only">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
              </svg>
              <span>12.3K</span>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
        <div class="flex flex-col p-5 h-full">
          <div class="flex items-center space-x-3 mb-3">
            <div class="relative">
              <img src="../images/integrations-02.svg" width="40" height="40" alt="Icon 02">
              <img class="absolute top-0 -right-1" src="../images/star.svg" width="16" height="16" alt="Star" aria-hidden="true">
            </div>
            <router-link class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" to="/integrations-single">Go-Gin</router-link>
          </div>
          <div class="grow mb-4">
            <div class="text-sm text-slate-400">Gin 是一个用 Go 语言编写的 Web 应用框架。它是一个轻量级的框架，具有高效、易用等特点，在 Go 语言的 Web 开发领域中被广泛应用。</div>
          </div>
          <div class="flex justify-between">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-05.jpg" width="24" height="24" alt="Avatar 05">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-06.jpg" width="24" height="24" alt="Avatar 06">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-07.jpg" width="24" height="24" alt="Avatar 07">
            </div>
            <button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
              <span class="sr-only">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
              </svg>
              <span>4.5K</span>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
        <div class="flex flex-col p-5 h-full">
          <div class="flex items-center space-x-3 mb-3">
            <div class="relative">
              <img src="../images/integrations-03.svg" width="40" height="40" alt="Icon 03">
              <img class="absolute top-0 -right-1" src="../images/star.svg" width="16" height="16" alt="Star" aria-hidden="true">
            </div>
            <router-link class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" to="/integrations-single">Go-Grom</router-link>
          </div>
          <div class="grow mb-4">
            <div class="text-sm text-slate-400">Gorm 是一个功能强大的 Go 语言对象关系映射（ORM）框架。它提供了方便的方式来操作数据库，使得开发人员能够使用 Go 语言的结构体和方法来与数据库进行交互，而不是编写复杂的 SQL 语句。</div>
          </div>
          <div class="flex justify-between">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-08.jpg" width="24" height="24" alt="Avatar 08">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-09.jpg" width="24" height="24" alt="Avatar 09">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-10.jpg" width="24" height="24" alt="Avatar 10">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-11.jpg" width="24" height="24" alt="Avatar 11">
            </div>
            <button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
              <span class="sr-only">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
              </svg>
              <span>4.7K</span>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
        <div class="flex flex-col p-5 h-full">
          <div class="flex items-center space-x-3 mb-3">
            <div class="relative">
              <img src="../images/integrations-04.svg" width="40" height="40" alt="Icon 04">
              <img class="absolute top-0 -right-1" src="../images/star.svg" width="16" height="16" alt="Star" aria-hidden="true">
            </div>
            <router-link class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" to="/integrations-single">Nginx</router-link>
          </div>
          <div class="grow mb-4">
            <div class="text-sm text-slate-400">Nginx（发音为 “engine - x”）是一款轻量级的高性能 HTTP 和反向代理服务器，同时也可以作为邮件代理服务器。它在互联网架构中扮演着至关重要的角色，被广泛应用于各种规模的网站和网络服务中。</div>
          </div>
          <div class="flex justify-between">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-12.jpg" width="24" height="24" alt="Avatar 12">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-13.jpg" width="24" height="24" alt="Avatar 13">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-14.jpg" width="24" height="24" alt="Avatar 14">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-15.jpg" width="24" height="24" alt="Avatar 15">
            </div>
            <button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
              <span class="sr-only">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
              </svg>
              <span>4.4K</span>
            </button>
          </div>
        </div>
      </div>
      <div class="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
        <div class="flex flex-col p-5 h-full">
          <div class="flex items-center space-x-3 mb-3">
            <div class="relative">
              <img src="../images/integrations-05.svg" width="40" height="40" alt="Icon 05">
              <img class="absolute top-0 -right-1" src="../images/star.svg" width="16" height="16" alt="Star" aria-hidden="true">
            </div>
            <router-link class="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0" to="/integrations-single">Docker</router-link>
          </div>
          <div class="grow mb-4">
            <div class="text-sm text-slate-400">Docker 是一个开源的容器化平台，它可以将应用程序及其依赖项打包成一个标准化的单元，称为容器。容器是一种轻量级、可移植、自包含的软件打包技术，使应用程序能够在几乎任何环境中以一致的方式运行。</div>
          </div>
          <div class="flex justify-between">
            <div class="flex -space-x-3 -ml-0.5">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-16.jpg" width="24" height="24" alt="Avatar 16">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-17.jpg" width="24" height="24" alt="Avatar 17">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-18.jpg" width="24" height="24" alt="Avatar 18">
              <img class="rounded-full border-2 border-slate-800 box-content" src="../images/avatar-19.jpg" width="24" height="24" alt="Avatar 19">
            </div>
            <button class="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
              <span class="sr-only">Like</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path class="fill-slate-500" d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z" />
              </svg>
              <span>3.4K</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Arrows -->
  <div class="flex py-8 justify-end">
    <button class="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
      <span class="sr-only">Previous</span>
      <svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
      </svg>
    </button>
    <button class="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
      <span class="sr-only">Next</span>
      <svg class="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
      </svg>
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'

// Import Swiper
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
Swiper.use([Navigation])

export default {
  name: 'IntegrationssCarousel',
  setup() {

    const swiperInitialized = ref(false)

    onMounted(() => {
      const carousel = new Swiper('.stellar-carousel', {
        breakpoints: {
          320: {
            slidesPerView: 1
          },
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        },
        grabCursor: true,
        loop: false,
        centeredSlides: false,
        initialSlide: 0,
        spaceBetween: 24,
        navigation: {
          nextEl: '.carousel-next',
          prevEl: '.carousel-prev',
        },
      })
      swiperInitialized.value = true
    })

    return {
      swiperInitialized,
    }
  }
}
</script>