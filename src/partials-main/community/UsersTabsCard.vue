<template>
  <div class="col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
    <div class="flex flex-col h-full">
      <!-- Card top -->
      <div class="grow p-5">
        <!-- Menu button -->
        <div class="relative">
          <EditMenu align="right" class="absolute top-0 right-0 inline-flex">
            <li>
              <router-link class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">Option 1</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-200 flex py-1 px-3" to="#0">Option 2</router-link>
            </li>
            <li>
              <router-link class="font-medium text-sm text-rose-500 hover:text-rose-600 flex py-1 px-3" to="#0">Remove</router-link>
            </li>
          </EditMenu>
        </div>
        <!-- Image + name -->
        <header>
          <div class="flex justify-center mb-2">
            <router-link class="relative inline-flex items-start" :to="item.link">
              <div class="absolute top-0 right-0 -mr-2 bg-white dark:bg-slate-700 rounded-full shadow" aria-hidden="true">
                <svg class="w-8 h-8 fill-current text-amber-500" viewBox="0 0 32 32">
                  <path d="M21 14.077a.75.75 0 01-.75-.75 1.5 1.5 0 00-1.5-1.5.75.75 0 110-1.5 1.5 1.5 0 001.5-1.5.75.75 0 111.5 0 1.5 1.5 0 001.5 1.5.75.75 0 010 1.5 1.5 1.5 0 00-1.5 1.5.75.75 0 01-.75.75zM14 24.077a1 1 0 01-1-1 4 4 0 00-4-4 1 1 0 110-2 4 4 0 004-4 1 1 0 012 0 4 4 0 004 4 1 1 0 010 2 4 4 0 00-4 4 1 1 0 01-1 1z" />
                </svg>
              </div>
              <img class="rounded-full" :src="item.image" width="64" height="64" :alt="item.name" />
            </router-link>
          </div>
          <div class="text-center ">
            <router-link class="inline-flex text-slate-800 dark:text-slate-100 hover:text-slate-900 dark:hover:text-white" :to="item.link">
              <h2 class="text-xl leading-snug justify-center font-semibold text-stone-600">{{item.name}}</h2>
            </router-link>
          </div>
          <div class="flex justify-center items-center"><span class="text-sm font-medium text-slate-400 -mt-0.5 mr-1">-&gt;</span> <span class="text-stone-600">{{item.location}}</span></div>
        </header>
        <!-- Bio -->
        <div class="text-center mt-2 text-stone-600">
          <div class="text-sm">{{item.content}}</div>
        </div>
      </div>
      <!-- Card footer -->
      <div class="border-t border-slate-200 dark:border-slate-700">
        <router-link class="block text-center text-sm text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-medium px-3 py-4" to="/messages">
          <div class="flex items-center justify-center">
            <svg class="w-4 h-4 fill-current shrink-0 mr-2" viewBox="0 0 16 16">
              <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
            </svg>
            <span>了解更多</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import EditMenu from '../../components/DropdownEditMenu.vue'

export default {
  name: 'UsersTabsCard',
  props: ['item'],
  components: {
    EditMenu,
  },  
}
</script>