<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="mb-8">
            <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Badge ✨</h1>
          </div>

          <div class="border-t border-slate-200 dark:border-slate-700">

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Basic Small -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Basic Small</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">Working on</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-sky-100 dark:bg-sky-500/30 text-sky-600 dark:text-sky-400 rounded-full text-center px-2.5 py-1">Exciting news</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">Product</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">Announcement</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-500 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-slate-100 dark:bg-slate-300 text-slate-500 dark:text-slate-600 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-xs inline-flex font-medium bg-slate-700 text-slate-100 dark:text-slate-400 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic Large -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Basic Large</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">Working on</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-sky-100 dark:bg-sky-500/30 text-sky-600 dark:text-sky-400 rounded-full text-center px-2.5 py-1">Exciting news</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">Product</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-amber-100 dark:bg-amber-400/30 text-amber-600 dark:text-amber-400 rounded-full text-center px-2.5 py-1">Announcement</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-rose-100 dark:bg-rose-500/30 text-rose-500 dark:text-rose-400 rounded-full text-center px-2.5 py-1">Bug Fix</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-500 rounded-full text-center px-2.5 py-1">Customer Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-slate-100 dark:bg-slate-300 text-slate-300 dark:text-slate-600 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm inline-flex font-medium bg-slate-700 text-slate-100 dark:text-slate-400 rounded-full text-center px-2.5 py-1">All Stories</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic with Icon -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Basic with Icon</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="inline-flex items-center text-xs font-medium text-slate-100 dark:text-slate-300 bg-slate-700 rounded-full text-center px-2 py-0.5">
                      <svg class="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                      <span>Special Offer</span>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="inline-flex items-center text-sm font-medium text-slate-100 dark:text-slate-300 bg-slate-700 rounded-full text-center px-2 py-0.5">
                      <svg class="w-3 h-3 shrink-0 fill-current text-amber-500 mr-1" viewBox="0 0 12 12">
                        <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                      </svg>
                      <span>Special Offer</span>
                    </div>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Basic for Charts -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Basic for Charts</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">+29%</div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="text-sm font-semibold text-white px-1.5 bg-amber-500 rounded-full">-14%</div>
                    <!-- End -->
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>        
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials-main/Sidebar.vue'
import Header from '../../partials-main/Header.vue'

export default {
  name: 'BadgePage',
  components: {
    Sidebar,
    Header,
  },
  setup() {

    const sidebarOpen = ref(false)

    return {
      sidebarOpen,
    }  
  }
}
</script>