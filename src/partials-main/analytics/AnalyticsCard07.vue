<template>
  <div class="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <header class="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">来源地</h2>
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
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 82%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>博华医院</div>
                <div class="font-medium">4.2K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 70%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>和济医院</div>
                <div class="font-medium">3.4K</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 60%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>骨安骨科医院</div>
                <div class="font-medium">1.6k</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 44%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>爱尔眼科医院</div>
                <div class="font-medium">1.2k</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 40%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>杏林中医医院</div>
                <div class="font-medium">912</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 30%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>馨悦妇幼保健院</div>
                <div class="font-medium">677</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 22%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>宝康妇幼医院</div>
                <div class="font-medium">449</div>
              </div>
            </li>
            <!-- Item -->
            <li class="relative px-2 py-1">
              <div class="absolute inset-0 bg-sky-100 dark:bg-sky-400/30" aria-hidden="true" style="width: 12%;"></div>
              <div class="relative flex justify-between space-x-2">
                <div>瑞康综合医院</div>
                <div class="font-medium">269</div>
              </div>
            </li>
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
  name: 'AnalyticsCard07',
}
</script>