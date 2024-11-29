<template>
  <div class="bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">所有病例 <span class="text-slate-400 dark:text-slate-500 font-medium">442</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300 divide-y divide-slate-200 dark:divide-slate-700">
          <!-- Table header -->
          <thead class="text-xs uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-200 dark:border-slate-700">
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <span class="sr-only">Select all</span>
                    <input class="form-checkbox" type="checkbox" v-model="selectAll" @click="checkAll" />
                  </label>
                </div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">用户</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">时间</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">用户名</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">交易价格</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">状态</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">数量</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">地点</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">支付类型</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">Menu</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <Order
            v-for="order in orders"
            :key="order.id"
            :order="order"
            v-model:selected="selected"
            :value="order.id"
          />
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Order from './OrdersTableItem.vue'

import Image01 from '../../images/icon-01.svg'
import Image02 from '../../images/icon-02.svg'
import Image03 from '../../images/icon-03.svg'

export default {
  name: 'OrdersTable',
  components: {
    Order,
  },  
  props: ['selectedItems'],
  setup(props, { emit }) {

    const selectAll = ref(false)
    const selected = ref([])

    const checkAll = () => {
      selected.value = []
      if (!selectAll.value) {
        selected.value = orders.value.map(order => order.id)
      }
    }
    
    watch(selected, () => {
      selectAll.value = orders.value.length === selected.value.length ? true : false
      emit('change-selection', selected.value)
    })    
    
    const orders = ref([
  {
    id: '0',
    image: Image01,
    order: '#123567',
    date: '2024/01/01', // 假设时间为2024年1月1日，你可根据实际需求修改具体日期
    customer: '张某某',
    total: '$129.00',
    status: '已退款',
    items: '1',
    location: '中国北京',
    type: '订阅',
    description: '添加相关用药说明'
  },
  {
    id: '1',
    image: Image01,
    order: '#779912',
    date: '2024/01/02',
    customer: '李某某',
    total: '$89.00',
    status: '已批准',
    items: '2',
    location: '中国上海',
    type: '订阅',
    description: '添加相关用药说明'
  },
  {
    id: '2',
    image: Image02,
    order: '#889924',
    date: '2024/01/03',
    customer: '王某某',
    total: '$89.00',
    status: '已批准',
    items: '2',
    location: '中国广州',
    type: '一次性',
    description: '添加相关用药说明'
  },
  {
    id: '3',
    image: Image01,
    order: '#897726',
    date: '2024/01/04',
    customer: '赵某某',
    total: '$59.00',
    status: '待处理',
    items: '1',
    location: '中国深圳',
    type: '一次性',
    description: '添加相关用药说明'
  },
  {
    id: '4',
    image: Image03,
    order: '#123567',
    date: '2024/01/05',
    customer: '陈某某',
    total: '$39.00',
    status: '已退款',
    items: '1',
    location: '中国成都',
    type: '订阅',
    description: '添加相关用药说明'
  },
  {
    id: '5',
    image: Image01,
    order: '#896644',
    date: '2024/01/06',
    customer: '刘某某',
    total: '$59.00',
    status: '已批准',
    items: '1',
    location: '中国杭州',
    type: '一次性',
    description: '添加相关用药说明'
  },
  {
    id: '6',
    image: Image03,
    order: '#136988',
    date: '2024/01/07',
    customer: '杨某某',
    total: '$89.00',
    status: '已批准',
    items: '1',
    location: '中国南京',
    type: '订阅',
    description: '添加相关用药说明'
  },
  {
    id: '7',
    image: Image03,
    order: '#442206',
    date: '2024/01/08',
    customer: '黄某某',
    total: '$129.00',
    status: '已批准',
    items: '2',
    location: '中国武汉',
    type: '订阅',
    description: '添加相关用药说明'
  },
  {
    id: '8',
    image: Image02,
    order: '#764321',
    date: '2024/01/09',
    customer: '吴某某',
    total: '$89.00',
    status: '待处理',
    items: '2',
    location: '中国重庆',
    type: '一次性',
    description: '添加相关用药说明'
  },
  {
    id: '9',
    image: Image01,
    order: '#908764',
    date: '2024/01/10',
    customer: '周某某',
    total: '$59.00',
    status: '已退款',
    items: '1',
    location: '中国西安',
    type: '订阅',
    description: '添加相关用药说明'
  }
]);
    return {
      selectAll,
      selected,
      checkAll,
      orders,
    }
  }
}
</script>