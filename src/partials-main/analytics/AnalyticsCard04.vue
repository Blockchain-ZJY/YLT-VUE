<template>
  <div class="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 class="font-semibold text-slate-800 dark:text-slate-100">医疗来源</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <BarChart :data="chartData" width="595" height="248" />
  </div>  
</template>

<script>
import { ref } from 'vue'
import BarChart from '../../charts/BarChart04.vue'

// Import utilities
import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'AnalyticsCard04',
  components: {
    BarChart,
  },
  setup() {
    const chartData = ref({
      labels: [
        '02-01-2021', '03-01-2021', '04-01-2021', '05-01-2021',
      ],
      datasets: [
        // Blue bars
        {
          label: '本地患者',
          data: [
            8000, 3800, 5350, 7800,
          ],
          backgroundColor: tailwindConfig().theme.colors.indigo[500],
          hoverBackgroundColor: tailwindConfig().theme.colors.indigo[600],
          categoryPercentage: 0.66,
        },
        // Light blue bars
        {
          label: '外地患者',
          data: [
            4000, 6500, 2200, 5800,
          ],
          backgroundColor: tailwindConfig().theme.colors.sky[400],
          hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
          categoryPercentage: 0.66,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>