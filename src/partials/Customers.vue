<template>
  <section class="relative">
    <!-- Radial gradient -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
      <div class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
        <div class="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
      </div>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">
        <!-- Content -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">用户评论</h2>
          <p class="text-lg text-slate-400">There are many variations available, but the majority have suffered, by injected humour, or randomised words which don't look even slightly believable.</p>
        </div>
        <!-- Customers -->
        <div class="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">

          <template :key="index" v-for="(item, index) in items">
            <div class="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
              <div class="flex items-center justify-between space-x-2 mb-4">
                <div class="flex items-center space-x-4">
                  <img class="shrink-0 rounded-full" :src="item.img" width="44" height="44" :alt="item.name" />
                  <div class="grow truncate">
                    <div class="font-bold text-slate-100 truncate">{{ item.name }}</div>
                    <a class="text-sm text-slate-500 hover:text-slate-300 font-medium truncate transition-colors" :href="item.twitter.link">{{ item.twitter.handle }}</a>
                  </div>
                </div>
                <svg class="shrink-0" xmlns="http://www.w3.org/2000/svg" width="90" height="14">
                  <path class="fill-purple-500" d="M7 0 5.006 5.368H0l4.232 3.221L2.195 14 7 10.344 11.82 14 9.768 8.589 14 5.368H8.98zM26 0l-1.994 5.368H19l4.232 3.221L21.195 14 26 10.344 30.82 14l-2.052-5.411L33 5.368h-5.02zM45 0l-1.994 5.368H38l4.232 3.221L40.195 14 45 10.344 49.82 14l-2.052-5.411L52 5.368h-5.02zM64 0l-1.994 5.368H57l4.232 3.221L59.195 14 64 10.344 68.82 14l-2.052-5.411L71 5.368h-5.02zM83 0l-1.994 5.368H76l4.232 3.221L78.195 14 83 10.344 87.82 14l-2.052-5.411L90 5.368h-5.02z" />
                </svg>
              </div>
              <p class="text-sm text-slate-400">{{ item.quote }}</p>
            </div>
          </template>          

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CustomerImg01 from '../images/customer-01.jpg'
import CustomerImg02 from '../images/customer-02.jpg'
import CustomerImg03 from '../images/customer-03.jpg'
import CustomerImg04 from '../images/customer-04.jpg'
import CustomerImg05 from '../images/customer-05.jpg'
import CustomerImg06 from '../images/customer-06.jpg'
import CustomerImg07 from '../images/customer-07.jpg'
import CustomerImg08 from '../images/customer-08.jpg'
import CustomerImg09 from '../images/customer-09.jpg'

export default {
  name: 'Customers',
  setup() {
    const items = [
    {
        img: CustomerImg01,
        quote: "医链通太棒了！利用区块链技术绑定医疗数据，让数据更安全、更便捷地流通。真正实现了医疗数据多跑，患者少跑。",
        name: 'Mike Smets',
        twitter: {
            handle: '@MikeSmets',
            link: '#0'
        }
    },
    {
        img: CustomerImg02,
        quote: "医链通的出现为医疗行业带来了巨大的变革。区块链技术确保了医疗数据的真实性和安全性，患者不再需要为了获取病历等数据而四处奔波。",
        name: 'Mike Bryan',
        twitter: {
            handle: '@mike0point7',
            link: '#0'
        }
    },
    {
        img: CustomerImg03,
        quote: "医链通让医疗数据共享变得更加容易和高效。有了区块链的保障，患者可以更放心地让自己的数据在不同医疗机构间流转。",
        name: 'Liz Park',
        twitter: {
            handle: '@liz-park82',
            link: '#0'
        }
    },
    {
        img: CustomerImg04,
        quote: "医链通的创新模式为患者带来了极大的便利。医疗数据的快速流通，让诊断和治疗更加准确和及时。",
        name: 'Jessie Maison',
        twitter: {
            handle: '@jessiem9',
            link: '#0'
        }
    },
    {
        img: CustomerImg05,
        quote: "医链通真正做到了以患者为中心。通过区块链技术，医疗数据得以高效整合，患者少跑了很多冤枉路。",
        name: 'Devani Janssen',
        twitter: {
            handle: '@deva07p',
            link: '#0'
        }
    },
    {
        img: CustomerImg06,
        quote: "医链通的区块链解决方案为医疗数据管理提供了新的思路。患者不再为重复检查而烦恼，医疗效率大大提高。",
        name: 'Mark Gerkules',
        twitter: {
            handle: '@mark-gerk',
            link: '#0'
        }
    },
    {
        img: CustomerImg07,
        quote: "医链通的出现让医疗数据更加可靠和可用。患者可以轻松享受跨机构的医疗服务，无需重复提供数据。",
        name: 'Andrey Propenk',
        twitter: {
            handle: '@andrey-prok',
            link: '#0'
        }
    },
    {
        img: CustomerImg08,
        quote: "医链通是医疗行业的一大进步。区块链技术保障了医疗数据的安全共享，为患者带来了更好的就医体验。",
        name: 'Jay Master',
        twitter: {
            handle: '@masterpro',
            link: '#0'
        }
    },
    {
        img: CustomerImg09,
        quote: "医链通让医疗数据跑起来，患者的负担减轻了。这种创新的医疗数据管理方式值得推广。",
        name: 'Steve Wolf',
        twitter: {
            handle: '@imsteve',
            link: '#0'
        }
    }
];
    
    return {
      items
    }
  }
}
</script>