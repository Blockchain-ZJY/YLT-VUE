<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">数据调用信息</h2>
    </header>
    <div class="grow p-3">
      <div class="flex flex-col h-full">
        <!-- Card content -->
        <div class="grow">
          <ul class="flex justify-between text-xs uppercase text-slate-400 dark:text-slate-500 font-semibold px-2 space-x-2">
            <li>类型</li>
            <li>数量</li>
          </ul>

          <ul class="space-y-1 text-sm text-slate-800 dark:text-slate-100 mt-3 mb-4">
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 82%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>血液检查表</div>
                <div class="font-medium">4.7K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 70%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>影像学检查类</div>
                <div class="font-medium">4.2K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 60%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>MRI 检查</div>
                <div class="font-medium">3.4K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 44%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>超声检查（B 超）</div>
                <div class="font-medium">3.1K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 40%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>心电图（ECG）检查</div>
                <div class="font-medium">2.2K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 30%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>病理检查类</div>
                <div class="font-medium">1.7K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-indigo-100 dark:bg-indigo-500/30" aria-hidden="true" style="width: 22%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>细胞学检</div>
                <div class="font-medium">924</div>
              </div>
            </li>
            <!-- Item -->
          </ul>
        </div>
        <!-- Card footer -->
        <div class="text-center pt-4 pb-1 border-t border-slate-100 dark:border-slate-700">
          <router-link class="text-sm font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="#0">详情 -&gt;</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnalyticsCard05',
}
</script>