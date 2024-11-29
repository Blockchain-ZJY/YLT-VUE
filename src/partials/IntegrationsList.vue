<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">

      <div class="pb-12 md:pb-20">
        <!-- Tobpabr -->
        <div class="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
          <!-- Links -->
          <ul class="flex flex-nowrap text-sm font-medium space-x-8">
            <li>
              <a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#engineering">
                <svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z" />
                </svg>
                <span>引 擎</span>
              </a>
            </li>
            <li>
              <a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#nocode">
                <svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z" />
                </svg>
                <span>No-code</span>
              </a>
            </li>
            <li>
              <a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#collaboration">
                <svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                </svg>
                <span>合 作</span>
              </a>
            </li>
            <li>
              <a class="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2" href="#productivity">
                <svg class="fill-slate-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                  <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                </svg>
                <span>生产效率</span>
              </a>
            </li>
          </ul>
          <div>
            <form class="relative flex items-center">
              <input class="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]" type="text" id="search" aria-label="Search…" placeholder="Search…" autocomplete="off">
              <div class="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                <svg class="absolute fill-slate-50 mx-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                  <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                </svg>
              </div>
            </form>
          </div>
        </div>

        <!-- Cards -->
        <div>
          <!-- Section #1 -->
          <div class="mt-12 md:mt-16">
            <h3 id="engineering" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">引 擎</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.category === 'Engineering'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #2 -->
          <div class="mt-12 md:mt-16">
            <h3 id="nocode" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">No-code</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.category === 'No-code'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #3 -->
          <div class="mt-12 md:mt-16">
            <h3 id="collaboration" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">Collaboration</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.category === 'Collaboration'" :item="item" />
              </template>

            </div>
          </div>
          <!-- Section #4 -->
          <div class="mt-12 md:mt-16">
            <h3 id="productivity" class="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">生产效率</h3>
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <template v-for="item in items">
                <IntegrationCard v-if="item.category === 'Productivity'" :item="item" />
              </template>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import IntegrationCard from './IntegrationCard.vue'
import IntegrationsImg01 from '../images/integrations-01.svg'
import IntegrationsImg02 from '../images/integrations-02.svg'
import IntegrationsImg03 from '../images/integrations-03.svg'
import IntegrationsImg04 from '../images/integrations-04.svg'
import IntegrationsImg05 from '../images/integrations-05.svg'
import IntegrationsImg06 from '../images/integrations-06.svg'
import IntegrationsImg07 from '../images/integrations-07.svg'
import IntegrationsImg08 from '../images/integrations-08.svg'
import IntegrationsImg09 from '../images/integrations-09.svg'
import IntegrationsImg10 from '../images/integrations-10.svg'
import IntegrationsImg11 from '../images/integrations-11.svg'
import IntegrationsImg12 from '../images/integrations-12.svg'
import IntegrationsImg13 from '../images/integrations-13.svg'
import IntegrationsImg14 from '../images/integrations-14.svg'
import IntegrationsImg15 from '../images/integrations-15.svg'
import IntegrationsImg16 from '../images/integrations-16.svg'
import IntegrationsImg17 from '../images/integrations-17.svg'
import IntegrationsImg18 from '../images/integrations-18.svg'
import IntegrationsImg19 from '../images/integrations-19.svg'
import IntegrationsImg20 from '../images/integrations-20.svg'
import IntegrationsImg21 from '../images/integrations-21.svg'
import IntegrationsImg22 from '../images/integrations-22.svg'
import IntegrationsImg23 from '../images/integrations-23.svg'
import IntegrationsImg24 from '../images/integrations-24.svg'

export default {
  name: 'IntegrationsList',
  components: {
    IntegrationCard
  },
  setup() {
    const items = [
    {
        img: IntegrationsImg06,
        name: 'Fabric',
        description: 'Hyperledger Fabric 是一个开源的企业级许可区块链框架。它是 Hyperledger 项目中的一个重要组成部分，由 Linux 基金会主导开发。在众多区块链解决方案中，Fabric 以其适合企业应用场景的特性而备受关注。',
        link: '/integrations-single',
        featured: true,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg07,
        name: 'FISCO BCOS',
        description: 'FISCO BCOS 是一个金融级区块链底层平台，具有高性能、高安全性和高可扩展性等特点，为金融领域的区块链应用提供了坚实的基础。',
        link: '/integrations-single',
        featured: false,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg04,
        name: 'Docker',
        description: 'Docker 是一个开源的容器化平台，它可以将应用程序及其依赖项打包成一个标准化的单元，称为容器。容器是一种轻量级、可移植、自包含的软件打包技术，使应用程序能够在几乎任何环境中以一致的方式运行。',
        link: '/integrations-single',
        featured: true,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg08,
        name: 'GitHub',
        description: 'GitHub 是一个面向开源及私有软件项目的托管平台，提供了版本控制、协作开发、问题跟踪等功能，是全球开发者社区的重要组成部分。',
        link: '/integrations-single',
        featured: true,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg05,
        name: 'Nginx',
        description: 'Nginx（发音为“engine - x”）是一款轻量级的高性能 HTTP 和反向代理服务器，同时也可以作为邮件代理服务器。它在互联网架构中扮演着至关重要的角色，被广泛应用于各种规模的网站和网络服务中。',
        link: '/integrations-single',
        featured: true,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg01,
        name: 'Vue3',
        description: 'Vue3 是一个渐进式 JavaScript 框架，用于构建用户界面。它具有响应式数据绑定、组件化开发、高效的虚拟 DOM 等特性，使得前端开发更加高效和可维护。',
        link: '/integrations-single',
        featured: true,
        category: 'Engineering'
    },
    {
        img: IntegrationsImg02,
        name: 'Zapier',
        description: 'Zapier 是一个功能强大的自动化工具平台，它可以将不同的应用程序和软件连接起来，实现数据在这些应用之间的自动传输和操作，让原本孤立的应用能够协同工作。',
        link: '/integrations-single',
        featured: true,
        category: 'No-code'
    },
    {
        img: IntegrationsImg03,
        name: 'Airtable',
        description: 'Airtable 是一款功能强大的在线数据管理应用，类似电子表格，用户可以创建表格来记录各种类型的数据，如文本、数字、日期、图片、链接、文档等，方便地将不同格式的信息聚合在一起，形成一个私人定制的资料库。',
        link: '/integrations-single',
        featured: true,
        category: 'No-code'
    },
    {
        img: IntegrationsImg09,
        name: 'Framer',
        description: 'Framer 是一个强大的交互设计工具，允许设计师创建高保真的原型和动画，为用户体验设计提供了丰富的可能性。',
        link: '/integrations-single',
        featured: true,
        category: 'No-code'
    },
    {
        img: IntegrationsImg10,
        name: 'Jotform',
        description: 'Jotform 是一个在线表单创建工具，用户可以轻松创建自定义的表单，收集数据，并进行分析和管理。',
        link: '/integrations-single',
        featured: false,
        category: 'No-code'
    },
    {
        img: IntegrationsImg11,
        name: 'Webflow',
        description: 'Webflow 是一个可视化网页设计和开发平台，允许用户无需编写代码即可创建专业的网站和网页应用。',
        link: '/integrations-single',
        featured: true,
        category: 'No-code'
    },
    {
        img: IntegrationsImg12,
        name: 'Coda',
        description: 'Coda 是一个文档协作工具，结合了文档编辑和数据库功能，为团队协作提供了创新的解决方案。',
        link: '/integrations-single',
        featured: false,
        category: 'No-code'
    },
    {
        img: IntegrationsImg13,
        name: 'Asana',
        description: 'Asana 是一个项目管理和团队协作工具，帮助团队组织任务、跟踪进度、进行沟通和协作。',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg14,
        name: 'Myngo',
        description: '能够加速开发体验的项目插件',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg15,
        name: 'Bonsai',
        description: '能够加速开发体验的项目插件',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg16,
        name: 'Decipad',
        description: '能够加速开发体验的项目插件',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg17,
        name: 'Miro',
        description: 'Miro 是一个在线协作白板工具，适用于团队远程协作、头脑风暴、项目规划等场景。',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg18,
        name: 'Popform',
        description: '能够加速开发体验的项目插件',
        link: '/integrations-single',
        featured: true,
        category: 'Collaboration'
    },
    {
        img: IntegrationsImg19,
        name: 'Linear',
        description: 'Linear 是一个项目管理工具，专注于简洁高效的工作流程和任务管理，适合软件开发团队使用。',
        link: '/integrations-single',
        featured: true,
        category: 'Productivity'
    },
    {
        img: IntegrationsImg20,
        name: 'Microsoft',
        description: '微软是一家全球知名的科技公司，提供广泛的软件和服务，包括操作系统、办公软件、云计算等。',
        link: '/integrations-single',
        featured: true,
        category: 'Productivity'
    },
    {
        img: IntegrationsImg21,
        name: 'Google Drive',
        description: 'Google Drive 是谷歌提供的云存储服务，用户可以存储文件、文档、图片等，并在不同设备上进行访问和共享。',
        link: '/integrations-single',
        featured: true,
        category: 'Productivity'
    },
    {
        img: IntegrationsImg22,
        name: 'InVision',
        description: 'InVision 是一个设计协作和原型制作工具，帮助设计师和团队创建、分享和测试用户界面设计。',
        link: '/integrations-single',
        featured: true,
        category: 'Productivity'
    },
    {
        img: IntegrationsImg23,
        name: 'WeTransfer',
        description: 'WeTransfer 是一个文件传输服务，允许用户轻松发送大文件，无需担心邮箱附件大小限制。',
        link: '/integrations-single',
        featured: false,
        category: 'Productivity'
    },
    {
        img: IntegrationsImg24,
        name: 'Hotjar',
        description: 'Hotjar 是一个网站分析工具，提供热图、用户反馈等功能，帮助网站所有者了解用户行为和优化用户体验。',
        link: '/integrations-single',
        featured: true,
        category: 'Productivity'
    }
];
    return {
      items
    }
  }
}
</script>