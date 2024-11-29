<template>
  <section class="relative">

    <!-- Particles animation -->
    <div class="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-64 h-64 -mt-24">
      <Particles class="absolute inset-0 -z-10" :quantity="6" :staticity="30" />
    </div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">提供高效的数据循环</h2>
          <p class="text-lg text-slate-400">根据用户反馈迅速迭代新版本</p>
        </div>

        <!-- Rings illustration -->
        <div class="text-center pb-8">
          <div class="inline-flex items-center justify-center relative">
            <!-- Particles animation -->
            <Particles class="absolute inset-0 -z-10" :quantity="10" />
            <div class="inline-flex">
              <img src="../images/pricing-illustration.svg" width="334" height="334" alt="Features illustration" />
            </div>
            <img class="absolute -mt-[40%]" src="../images/pricing-illustration-top.svg" width="396" height="328" alt="Features illustration top" aria-hidden="true" />
            <div class="absolute w-[200%] flex items-center justify-center space-x-5">
              <div class="-rotate-[4deg]">
                <img class="w-11 h-11 drop-shadow-lg animate-[float_2.6s_ease-in-out_infinite] opacity-10" src="../images/pricing-icon-01.svg" width="80" height="80" alt="Pricing icon 01" />
              </div>
              <div class="rotate-[4deg]">
                <img class="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src="../images/pricing-icon-02.svg" width="80" height="80" alt="Pricing icon 02" />
              </div>
              <div class="-rotate-[4deg]">
                <img class="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src="../images/pricing-icon-03.svg" width="80" height="80" alt="Pricing icon 03" />
              </div>
              <img class="drop-shadow-lg animate-float" src="../images/pricing-icon-04.svg" width="80" height="80" alt="Pricing icon 04" />
              <div class="rotate-[4deg]">
                <img class="w-16 h-16 drop-shadow-lg animate-[float_2.2s_ease-in-out_infinite] opacity-60" src="../images/pricing-icon-05.svg" width="80" height="80" alt="Pricing icon 05" />
              </div>
              <div class="-rotate-[4deg]">
                <img class="w-14 h-14 drop-shadow-lg animate-[float_2.4s_ease-in-out_infinite] opacity-25" src="../images/pricing-icon-06.svg" width="80" height="80" alt="Pricing icon 06" />
              </div>
              <div class="rotate-[4deg]">
                <img class="w-11 h-11 drop-shadow-lg animate-[float_2.6ås_ease-in-out_infinite] opacity-10" src="../images/pricing-icon-07.svg" width="80" height="80" alt="Pricing icon 07" />
              </div>
            </div>
          </div>
        </div>

        <!-- Features list -->

      </div>
    </div>
  </section>
</template>

<script>
import Particles from './Particles.vue'

export default {
  name: 'Features05',
  components: {
    Particles,
  },
}
</script>