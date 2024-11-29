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

          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-8">

            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Acme Inc. ✨</h1>
            </div>

            <!-- Right: Actions  -->
            <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
              <!-- Search form -->
              <SearchForm />
              <!-- Add member button -->
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                </svg>
                <span class="hidden xs:block ml-2">Add Member</span>
              </button>
            </div>            

          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">
            <UsersTilesCard
              v-for="item in items"
              :key="item.id"
              :item="item"
            />
          </div>
          
          <!-- Pagination -->
          <div class="mt-8">
            <PaginationNumeric />
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
import SearchForm from '../../components/SearchForm.vue'
import UsersTilesCard from '../../partials-main/community/UsersTilesCard.vue'
import PaginationNumeric from '../../components/PaginationNumeric.vue'

import Image01 from '../../images/user-64-01.jpg'
import Image02 from '../../images/user-64-02.jpg'
import Image03 from '../../images/user-64-03.jpg'
import Image04 from '../../images/user-64-04.jpg'
import Image05 from '../../images/user-64-05.jpg'
import Image06 from '../../images/user-64-06.jpg'
import Image07 from '../../images/user-64-07.jpg'
import Image08 from '../../images/user-64-08.jpg'
import Image09 from '../../images/user-64-09.jpg'
import Image10 from '../../images/user-64-10.jpg'
import Image11 from '../../images/user-64-11.jpg'
import Image12 from '../../images/user-64-12.jpg'


export default {
  name: 'UsersTiles',
  components: {
    Sidebar,
    Header,
    SearchForm,
    UsersTilesCard,
    PaginationNumeric,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items = ref([
  {
    id: 0,
    name: '林某某',
    image: Image01,
    link: '#0',
    location: '北京',
    content: '血管病、颅内肿瘤、椎管肿瘤、脑外伤等常见病。手术技能娴熟，尤其擅长颅底疾病的手术治疗。2011年10月以人才引进加盟金山医院神经外科，率先在金山地区开展急诊脑动脉瘤的开颅夹闭术',
    email: 'xxxx@app.com'
  },
  {
    id: 1,
    name: '陈某某',
    image: Image02,
    link: '#0',
    location: '上海',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 2,
    name: '刘某某',
    image: Image03,
    link: '#0',
    location: '广州',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 3,
    name: '王某某',
    image: Image04,
    link: '#0',
    location: '深圳',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 4,
    name: '张某某',
    image: Image05,
    link: '#0',
    location: '成都',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 5,
    name: '李某某',
    image: Image06,
    link: '#0',
    location: '杭州',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 6,
    name: '杨某某',
    image: Image07,
    link: '#0',
    location: '南京',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 7,
    name: '赵某某',
    image: Image08,
    link: '#0',
    location: '武汉',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 8,
    name: '黄某某',
    image: Image09,
    link: '#0',
    location: '重庆',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 9,
    name: '周某某',
    image: Image10,
    link: '#0',
    location: '西安',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 10,
    name: '吴某某',
    image: Image11,
    link: '#0',
    location: '长沙',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  },
  {
    id: 11,
    name: '徐某某',
    image: Image12,
    link: '#0',
    location: '青岛',
    content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
    email: 'xxxx@app.com'
  }      
]);
    return {
      sidebarOpen,
      items,
    }  
  }
}
</script>