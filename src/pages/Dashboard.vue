<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Welcome banner -->
          <WelcomeBanner />
          
          <!-- Dashboard actions -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            <!-- Left: Avatars -->
            <DashboardAvatars />

            <!-- Right: Actions -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">

              <!-- Filter button -->
              <FilterButton align="right" />
              <!-- Datepicker built with flatpickr -->
              <Datepicker align="right" />
              <!-- Add view button -->
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span class="hidden xs:block ml-2">Add View</span>
              </button>
            </div>

          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">

            <!-- Line chart (Acme Plus) -->
            <DashboardCard01 />
            <!-- Line chart (Acme Advanced) -->
            <DashboardCard02 />
            <!-- Line chart (Acme Professional) -->
            <DashboardCard03 />
            <!-- Bar chart (Direct vs Indirect) -->
            <DashboardCard04 />
            <!-- Line chart (Real Time Value) -->
            <DashboardCard05 />
            <!-- Doughnut chart (来源地) -->
            <DashboardCard06 />
            <!-- Table (数据调用信息) -->
            <DashboardCard07 />
            <!-- Line chart (Sales Over Time) -->
            <DashboardCard08 />
            <!-- Stacked bar chart (Sales VS Refunds) -->
            <DashboardCard09 />
            <!-- Card (Recent Activity) -->
            <DashboardCard10 />
            <!-- Card (Income/Expenses) -->
            <DashboardCard11 />

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
import WelcomeBanner from '../partials-main/dashboard/WelcomeBanner.vue'
import DashboardAvatars from '../partials-main/dashboard/DashboardAvatars.vue'
import FilterButton from '../components/DropdownFilter.vue'
import Datepicker from '../components/Datepicker.vue'
import DashboardCard01 from '../partials-main/dashboard/DashboardCard01.vue'
import DashboardCard02 from '../partials-main/dashboard/DashboardCard02.vue'
import DashboardCard03 from '../partials-main/dashboard/DashboardCard03.vue'
import DashboardCard04 from '../partials-main/dashboard/DashboardCard04.vue'
import DashboardCard05 from '../partials-main/dashboard/DashboardCard05.vue'
import DashboardCard06 from '../partials-main/dashboard/DashboardCard06.vue'
import DashboardCard07 from '../partials-main/dashboard/DashboardCard07.vue'
import DashboardCard08 from '../partials-main/dashboard/DashboardCard08.vue'
import DashboardCard09 from '../partials-main/dashboard/DashboardCard09.vue'
import DashboardCard10 from '../partials-main/dashboard/DashboardCard10.vue'
import DashboardCard11 from '../partials-main/dashboard/DashboardCard11.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    Header,
    WelcomeBanner,
    DashboardAvatars,
    FilterButton,
    Datepicker,
    DashboardCard01,
    DashboardCard02,
    DashboardCard03,
    DashboardCard04,
    DashboardCard05,
    DashboardCard06,
    DashboardCard07,
    DashboardCard08,
    DashboardCard09,
    DashboardCard10,
    DashboardCard11,    
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>