<template>
  <div class="flex h-[100dvh] overflow-hidden bg-white">

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
              <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">专家信息</h1>
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
                <span class="hidden xs:block ml-2">添加专家</span>
              </button>
            </div>            

          </div>

          <!-- Cards -->
          <div class="grid grid-cols-12 gap-6">
            <UsersTabsCard
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
import UsersTabsCard from '../../partials-main/community/UsersTabsCard.vue'
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
  name: 'UsersTabs',
  components: {
    Sidebar,
    Header,
    SearchForm,
    UsersTabsCard,
    PaginationNumeric,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items = ref([
  {
    id: 0,
    name: '林医生',
    image: Image01,
    link: '#0',
    location: '北京',
    content: '现任心血管代谢中心副主任。林医生，[性别]，[职称]、[学位]，擅长[专业领域]等。',
    email: 'xxxx@app.com'
  },
  {
    id: 1,
    name: '陈医生',
    image: Image02,
    link: '#0',
    location: '上海',
    content: '陈医生，在[医院名称]工作，专注于[擅长领域]，有着丰富的临床经验和专业技能。',
    email: 'xxxx@app.com'
  },
  {
    id: 2,
    name: '刘医生',
    image: Image03,
    link: '#0',
    location: '广州',
    content: '刘医生，从事医疗工作多年，曾在[相关经历]，目前致力于[研究方向或擅长治疗的病症]。',
    email: 'xxxx@app.com'
  },
  {
    id: 3,
    name: '王医生',
    image: Image04,
    link: '#0',
    location: '深圳',
    content: '王医生，毕业于[毕业院校]，擅长[专业特长]，以其精湛的医术和耐心的服务受到患者好评。',
    email: 'xxxx@app.com'
  },
  {
    id: 4,
    name: '张医生',
    image: Image05,
    link: '#0',
    location: '成都',
    content: '张医生，[具体职位]，在[医疗领域的成就或贡献]，对[擅长病症]有深入研究和丰富的治疗经验。',
    email: 'xxxx@app.com'
  },
  {
    id: 5,
    name: '李医生',
    image: Image06,
    link: '#0',
    location: '杭州',
    content: '李医生，长期从事[医疗专业方向]工作，参与过[相关项目或研究]，在业内具有一定的知名度。',
    email: 'xxxx@app.com'
  },
  {
    id: 6,
    name: '杨医生',
    image: Image07,
    link: '#0',
    location: '南京',
    content: '杨医生，拥有[专业资质或荣誉]，擅长运用[独特的治疗方法或技术]治疗[相关疾病]。',
    email: 'xxxx@app.com'
  },
  {
    id: 7,
    name: '赵医生',
    image: Image08,
    link: '#0',
    location: '武汉',
    content: '赵医生，在[医学领域的专长或特色治疗领域]有突出表现，为众多患者提供了优质的医疗服务。',
    email: 'xxxx@app.com'
  },
  {
    id: 8,
    name: '黄医生',
    image: Image09,
    link: '#0',
    location: '重庆',
    content: '黄医生，曾赴[国外进修或学习的地方]学习交流，将先进的医疗理念和技术带回国内，应用于临床实践。',
    email: 'xxxx@app.com'
  },
  {
    id: 9,
    name: '周医生',
    image: Image10,
    link: '#0',
    location: '西安',
    content: '周医生，作为[医学团队或项目的角色]，积极参与[医疗公益活动或科研项目]，为医学事业的发展贡献力量。',
    email: 'xxxx@app.com'
  },
  {
    id: 10,
    name: '吴医生',
    image: Image11,
    link: '#0',
    location: '长沙',
    content: '吴医生，专注于[细分医学领域]的研究和治疗，在[该领域的成果或突破]，为患者带来了新的希望。',
    email: 'xxxx@app.com'
  },
  {
    id: 11,
    name: '徐医生',
    image: Image12,
    link: '#0',
    location: '青岛',
    content: '徐医生，以其严谨的治学态度和精湛的医术，在[当地医疗界的声誉或影响力]，深受同行和患者的尊敬。',
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