<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">年龄分析</h2>
    </header>
    <!-- Chart built with Chart.js 3 -->
    <!-- Change the height attribute to adjust the chart height -->
    <DoughnutChart :data="chartData" width="389" height="260" />
  </div>
</template>

<script>
import { ref } from 'vue'
import DoughnutChart from '../../charts/DoughnutChart.vue'

// Import utilities
import { tailwindConfig } from '../../utils/Utils'

export default {
  name: 'AnalyticsCard09',
  components: {
    DoughnutChart,
  },
  setup() {
    const chartData = ref({
      labels: ['<18', '18-24', '24-36', '>35'],
      datasets: [
        {
          label: 'Visit By Age Category',
          data: [
            30, 50, 5, 15,
          ],
          backgroundColor: [
            tailwindConfig().theme.colors.indigo[500],
            tailwindConfig().theme.colors.sky[400],
            tailwindConfig().theme.colors.rose[500],
            tailwindConfig().theme.colors.emerald[500],
          ],
          hoverBackgroundColor: [
            tailwindConfig().theme.colors.indigo[600],
            tailwindConfig().theme.colors.sky[500],
            tailwindConfig().theme.colors.rose[600],
            tailwindConfig().theme.colors.emerald[600],
          ],
          borderWidth: 0,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>