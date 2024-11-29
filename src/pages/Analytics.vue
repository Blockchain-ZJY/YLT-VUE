<template>
  <div class="flex h-[100dvh] overflow-hidden bg-gray-100">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">
          
            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">数据分析 ✨</h1>
            </div>
        
            <!-- Right: Actions -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                
              <!-- Datepicker built with flatpickr -->
              <Datepicker align="right" />
                
            </div>
          
          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">

            <!-- Line chart (Analytics) -->
            <AnalyticsCard01 />
            <!--  Line chart (数据活动) -->
            <AnalyticsCard02 />
            <!-- Stacked bar chart (Acquisition Channels) -->
            <AnalyticsCard03 />
            <!-- Horizontal bar chart (Audience Overview) -->
            <AnalyticsCard04 />
            <!-- Report card (数据调用信息) -->
            <AnalyticsCard05 />
            <!-- Report card (热门需求) -->
            <AnalyticsCard06 />
            <!-- Report card (来源地) -->
            <AnalyticsCard07 />
            <!-- Doughnut chart (Sessions By 设备) -->
            <AnalyticsCard08 />
            <!-- Doughnut chart (Visit By Age Category) -->
            <AnalyticsCard09 />
            <!-- Polar chart (Sessions By Gender) -->
            <AnalyticsCard10 />
            <!-- Table (Top Products) -->
            <!-- <AnalyticsCard11 /> -->

          </div>

        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../partials-main/Sidebar.vue'
import Header from '../partials-main/Header.vue'
import Datepicker from '../components/Datepicker.vue'
import AnalyticsCard01 from '../partials-main/analytics/AnalyticsCard01.vue'
import AnalyticsCard02 from '../partials-main/analytics/AnalyticsCard02.vue'
import AnalyticsCard03 from '../partials-main/analytics/AnalyticsCard03.vue'
import AnalyticsCard04 from '../partials-main/analytics/AnalyticsCard04.vue'
import AnalyticsCard05 from '../partials-main/analytics/AnalyticsCard05.vue'
import AnalyticsCard06 from '../partials-main/analytics/AnalyticsCard06.vue'
import AnalyticsCard07 from '../partials-main/analytics/AnalyticsCard07.vue'
import AnalyticsCard08 from '../partials-main/analytics/AnalyticsCard08.vue'
import AnalyticsCard09 from '../partials-main/analytics/AnalyticsCard09.vue'
import AnalyticsCard10 from '../partials-main/analytics/AnalyticsCard10.vue'
import AnalyticsCard11 from '../partials-main/analytics/AnalyticsCard11.vue'

export default {
  name: 'Analytics',
  components: {
    Sidebar,
    Header,
    Datepicker,
    AnalyticsCard01,
    AnalyticsCard02,
    AnalyticsCard03,
    AnalyticsCard04,
    AnalyticsCard05,
    AnalyticsCard06,
    AnalyticsCard07,
    AnalyticsCard08,
    AnalyticsCard09,
    AnalyticsCard10,
    AnalyticsCard11,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>