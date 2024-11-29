<template>
  <section>
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div class="relative pb-12 md:pb-20">

        <!-- Particles animation -->
        <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
          <Particles class="absolute inset-0 -z-10" :quantity="10" :staticity="30" />
        </div>

        <!-- Carousel -->
        <div class="text-center">
          <!-- Testimonial image -->
          <div class="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
            <transition-group
              tag="div"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-20"
              enter-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
              enter-from-class="opacity-0 -rotate-[60deg]"
              enter-to-class="opacity-100 rotate-0"
              leave-active-class="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
              leave-from-class="opacity-100 rotate-0"
              leave-to-class="opacity-0 rotate-[60deg]"
            >               
              <template :key="index" v-for="(item, index) in items">
                <div v-show="active === index" class="absolute inset-0 h-full -z-10">
                  <img class="relative top-11 left-1/2 -translate-x-1/2 rounded-full" :src="item.img" width="56" height="56" :alt="item.name">
                </div>
              </template>
            </transition-group>
          </div>
          <!-- Text -->
          <div class="mb-10">
            <transition-group
              tag="div"
              class="relative flex flex-col"
              enter-active-class="transition ease-in-out duration-500 delay-200 order-first"
              enter-from-class="opacity-0 -translate-x-4"
              enter-to-class="opacity-100 translate-x-0"
              leave-active-class="transition ease-out duration-300 delay-300 absolute"
              leave-from-class="opacity-100 translate-x-0"
              leave-to-class="opacity-0 translate-x-4"
            >              
              <template :key="index" v-for="(item, index) in items">
                <div v-show="active === index">
                  <div class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">{{ item.quote }}</div>
                </div>
              </template>
            </transition-group>
          </div>
          <!-- Buttons -->
          <div class="flex flex-wrap justify-center -m-1.5">
            <template :key="index" v-for="(item, index) in items">
              <button class="btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none" :class="active === index ? 'opacity-100' : 'opacity-30 hover:opacity-60'" @click="active = index; stopAutorotate();">
                <span class="relative">
                  <span class="text-slate-50">{{ item.name }}</span> <span class="text-slate-600">-</span> <span>{{ item.role }}</span>
                </span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Particles from './Particles.vue'
import TestimonialImg01 from '../images/team-03.png'
import TestimonialImg02 from '../images/testimonial-01.jpg'
import TestimonialImg03 from '../images/testimonial-03.jpg'

export default {
  name: 'Testimonials',
  components: {
    Particles
  },
  setup() {
    const active = ref(0)
    const autorotate = ref(true)
    const autorotateTiming = ref(7000)
    const items = [
  {
    img: TestimonialImg01,
    quote: "医链通的区块链技术彻底改变了我们对医疗数据管理的认知。它不仅保护了患者的隐私，还避免了重复检查，真正做到了让数据多跑路，患者少跑腿。",
    name: '李恒',
    role: '患者'
  },
  {
    img: TestimonialImg02,
    quote: "作为一名医生，医链通让我能够更高效地访问患者的医疗记录。这不仅提高了工作效率，还确保了患者信息的安全性，我对此感到非常满意。",
    name: '张医生',
    role: '医生'
  },
  {
    img: TestimonialImg03,
    quote: "作为患者的家属，医链通让我能够随时了解家人的健康状况。这种透明度和便捷性让我感到安心，也减轻了我的担忧。",
    name: '李芳芳',
    role: '家属'
  }
];

    const stopAutorotate = () => {
      clearInterval(autorotateInterval.value)
    }

    let autorotateInterval = ref(null)

    onMounted(() => {
      if (autorotate.value) {
        autorotateInterval.value = setInterval(() => {
          active.value = active.value + 1 === items.value.length ? 0 : active.value + 1
        }, autorotateTiming.value)
      }
    })

    onBeforeUnmount(() => {
      stopAutorotate()
    })

    return {
      active,
      autorotate,
      autorotateTiming,
      items,
      stopAutorotate
    }
  }
}

</script>