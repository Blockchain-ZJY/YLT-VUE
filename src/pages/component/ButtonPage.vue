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
            <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Button ✨</h1>
          </div>

          <div class="border-t border-slate-200 dark:border-slate-700">

            <!-- Components -->
            <div class="space-y-8 mt-8">

              <!-- Appearances -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Appearances</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">Primary</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-indigo-500">Secondary</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">Tertiary</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn bg-rose-500 hover:bg-rose-600 text-white">Danger</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500">Danger</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn bg-emerald-500 hover:bg-emerald-600 text-white">Success</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-emerald-500">Success</button>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- States -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">States</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none" disabled>Disabled</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn w-full bg-indigo-500 hover:bg-indigo-600 text-white disabled:border-slate-200 dark:disabled:border-slate-700 disabled:bg-slate-100 dark:disabled:bg-slate-800 disabled:text-slate-400 dark:disabled:text-slate-600 disabled:cursor-not-allowed shadow-none" disabled>
                      <svg class="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                      </svg>
                      <span class="ml-2">Loading</span>
                    </button>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Sizes -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Sizes</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn-lg bg-indigo-500 hover:bg-indigo-600 text-white">Button</button>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Buttons with an Icon -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Buttons with an Icon</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                      <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                      </svg>
                      <span class="ml-2">Add Event</span>
                    </button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
                      <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0" viewBox="0 0 16 16">
                        <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                      </svg>
                      <span class="ml-2">Edit Content</span>
                    </button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-500">
                      <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                        <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                      </svg>
                      <span class="ml-2">Delete</span>
                    </button>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Icon Buttons -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Icon Buttons</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                      <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0" viewBox="0 0 16 16">
                        <path d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
                      </svg>
                    </button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                      <svg class="w-4 h-4 fill-current text-rose-500 shrink-0" viewBox="0 0 16 16">
                        <path d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
                      </svg>
                    </button>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600">
                      <svg class="w-4 h-4 fill-current text-indigo-500 shrink-0" viewBox="0 0 16 16">
                        <path d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z" />
                      </svg>
                    </button>
                    <!-- End -->
                  </div>
                </div>
              </div>

              <!-- Button Groups -->
              <div>
                <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-6">Button Groups</h2>
                <div class="flex flex-wrap items-center -m-1.5">
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex flex-wrap -space-x-px">
                      <button class="btn bg-indigo-600 text-white rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-l-transparent">Weekly</button>
                      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-indigo-100 rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent">Monthly</button>
                      <button class="btn bg-indigo-500 hover:bg-indigo-600 text-indigo-100 rounded-none border-l-indigo-400 first:rounded-l last:rounded-r first:border-r-transparent">Yearly</button>
                    </div>
                    <!-- End -->
                  </div>
                  <div class="m-1.5">
                    <!-- Start -->
                    <div class="flex flex-wrap -space-x-px">
                      <button class="btn bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:bg-slate-50 text-indigo-500 rounded-none first:rounded-l last:rounded-r">Weekly</button>
                      <button class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Monthly</button>
                      <button class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300 rounded-none first:rounded-l last:rounded-r">Yearly</button>
                    </div>
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
  name: 'ButtonPage',
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