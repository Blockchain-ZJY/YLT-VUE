<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <div class="px-5 pt-5">
      <header>
        <h3 class="text-xs font-semibold text-slate-500 uppercase mb-1">
          <span class="text-slate-800 dark:text-slate-100">Twtr</span> - Twitter Inc.
        </h3>
        <div class="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">$43.07</div>
        <div class="text-sm">
          <span class="font-medium text-emerald-500">+$4,20 (9,2%)</span> - Today
        </div>
      </header>
    </div>
    <!-- Chart built with Chart.js 3 -->
    <div class="grow">
      <!-- Change the height attribute to adjust the chart height -->
      <LineChart :data="chartData" width="286" height="98" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LineChart from '../../charts/LineChart08.vue'

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils'

export default {
  name: 'FintechCard12',
  components: {
    LineChart,
  },
  setup() {
    const chartData = ref({
      labels: [
        '12-01-2020', '01-01-2021', '02-01-2021',
        '03-01-2021', '04-01-2021', '05-01-2021',
        '06-01-2021', '07-01-2021', '08-01-2021',
        '09-01-2021', '10-01-2021', '11-01-2021',
        '12-01-2021', '01-01-2022', '02-01-2022',
        '03-01-2022', '04-01-2022', '05-01-2022',
        '06-01-2022', '07-01-2022', '08-01-2022',
        '09-01-2022', '10-01-2022', '11-01-2022',
        '12-01-2022', '01-01-2023',
      ],
      datasets: [
        // Line
        {
          data: [
            540, 466, 540, 466, 385, 432, 334,
            334, 289, 289, 200, 289, 222, 289,
            289, 403, 554, 304, 289, 270, 134,
            270, 829, 644, 688, 664,
          ],
          fill: true,
          backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.emerald[500])}, 0.08)`,
          borderColor: tailwindConfig().theme.colors.emerald[500],
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
          clip: 20,
        },
      ],
    })

    return {
      chartData,
    } 
  }
}
</script>