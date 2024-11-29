<template>
  <div class="bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 relative">
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">表单数据 <span class="text-slate-400 dark:text-slate-500 font-medium">67</span></h2>
    </header>
    <div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700">
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
                <div class="font-semibold text-left">编号ID</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">费用</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">状态</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">开单科室</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">开单时间</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">链上时间</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">开单医生</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">类型</div>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody class="text-sm divide-y divide-slate-200 dark:divide-slate-700">
            <Invoice
              v-for="invoice in invoices"
              :key="invoice.id"
              :invoice="invoice"
              v-model:selected="selected"
              :value="invoice.id"
            />
          </tbody>
        </table>

      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import Invoice from './InvoicesTableItem.vue'

export default {
  name: 'InvoicesTable',
  components: {
    Invoice,
  },  
  props: ['selectedItems'],
  setup(props, { emit }) {

    const selectAll = ref(false)
    const selected = ref([])

    const checkAll = () => {
      selected.value = []
      if (!selectAll.value) {
        selected.value = invoices.value.map(invoice => invoice.id)
      }
    }
    
    watch(selected, () => {
      selectAll.value = invoices.value.length === selected.value.length ? true : false
      emit('change-selection', selected.value)
    })    
    
    const invoices = ref([
  {
    id: '0',
    invoice: '#123567',
    total: '890.66 元',
    status: '撤销',
    customer: '眼科',
    issueddate: '2024/02/01',
    paiddate: '-',
    type: '李医生',
  },
  {
    id: '1',
    invoice: '#779912',
    total: '590.66 元',
    status: '已上链',
    customer: '内科',
    issueddate: '2024/02/02',
    paiddate: '2024/02/03',
    type: '刘医生',
  },
  {
    id: '2',
    invoice: '#889924',
    total: '790.66 元',
    status: '已上链',
    customer: '外科',
    issueddate: '2024/02/04',
    paiddate: '2024/02/05',
    type: '张医生',
  },
  {
    id: '3',
    invoice: '#897726',
    total: '990.66 元',
    status: '待上链',
    customer: '眼科',
    issueddate: '2024/02/06',
    paiddate: '-',
    type: '王医生',
  },
  {
    id: '4',
    invoice: '#123567',
    total: '890.66 元',
    status: '待上链',
    customer: '内科',
    issueddate: '2024/02/07',
    paiddate: '-',
    type: '陈医生',
  },
  {
    id: '5',
    invoice: '#896644',
    total: '990.66 元',
    status: '已上链',
    customer: '外科',
    issueddate: '2024/02/08',
    paiddate: '2024/02/09',
    type: '赵医生',
  },
  {
    id: '6',
    invoice: '#136988',
    total: '690.66 元',
    status: '已上链',
    customer: '眼科',
    issueddate: '2024/02/10',
    paiddate: '2024/02/10',
    type: '孙医生',
  },
  {
    id: '7',
    invoice: '#442206',
    total: '890.66 元',
    status: '撤销',
    customer: '内科',
    issueddate: '2024/02/11',
    paiddate: '-',
    type: '周医生',
  },
  {
    id: '8',
    invoice: '#764321',
    total: '790.66 元',
    status: '已上链',
    customer: '外科',
    issueddate: '2024/02/12',
    paiddate: '2024/02/13',
    type: '吴医生',
  },
  {
    id: '9',
    invoice: '#908764',
    total: '990.66 元',
    status: '待上链',
    customer: '眼科',
    issueddate: '2024/02/14',
    paiddate: '-',
    type: '郑医生',
  }
]);
    return {
      selectAll,
      selected,
      checkAll,
      invoices,
    }
  }
}
</script>