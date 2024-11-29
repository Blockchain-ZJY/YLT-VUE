<template>
  <div
    class="bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700 relative"
  >
    <header class="px-5 py-4">
      <h2 class="font-semibold text-slate-800 dark:text-slate-100">
        All Customers
        <span class="text-slate-400 dark:text-slate-500 font-medium">248</span>
      </h2>
    </header>
    <div>
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table-auto w-full dark:text-slate-300">
          <!-- Table header -->
          <thead
            class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/20 border-t border-b border-slate-200 dark:border-slate-700"
          >
            <tr>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <div class="flex items-center">
                  <label class="inline-flex">
                    <span class="sr-only">选择全部</span>
                    <input
                      class="form-checkbox"
                      type="checkbox"
                      v-model="selectAll"
                      @click="checkAll"
                    />
                  </label>
                </div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                <span class="sr-only">收藏</span>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">患者</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">邮箱</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">住址</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">订单数量</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">最后病单</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold text-left">总消费</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <div class="font-semibold">操作</div>
              </th>
              <th class="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                <span class="sr-only">菜单</span>
              </th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody
            class="text-sm divide-y divide-slate-200 dark:divide-slate-700"
          >
            <Customer
              v-for="customer in customers"
              :key="customer.id"
              :customer="customer"
              v-model:selected="selected"
              :value="customer.id"
            />
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import Customer from "./CustomersTableItem.vue";

import Image01 from "../../images/user-40-01.jpg";
import Image02 from "../../images/user-40-02.jpg";
import Image03 from "../../images/user-40-03.jpg";
import Image04 from "../../images/user-40-04.jpg";
import Image05 from "../../images/user-40-05.jpg";
import Image06 from "../../images/user-40-06.jpg";
import Image07 from "../../images/user-40-07.jpg";
import Image08 from "../../images/user-40-08.jpg";
import Image09 from "../../images/user-40-09.jpg";
import Image10 from "../../images/user-40-10.jpg";

export default {
  name: "CustomersTable",
  components: {
    Customer,
  },
  props: ["selectedItems"],
  setup(props, { emit }) {
    const selectAll = ref(false);
    const selected = ref([]);

    const checkAll = () => {
      selected.value = [];
      if (!selectAll.value) {
        selected.value = customers.value.map((customer) => customer.id);
      }
    };

    watch(selected, () => {
      selectAll.value =
        customers.value.length === selected.value.length ? true : false;
      emit("change-selection", selected.value);
    });

    const customers = ref([
  {
    id: "0",
    image: Image01,
    name: "张某某",
    email: "xxxx@app.com",
    location: "中国北京",
    orders: "24",
    lastOrder: "#20240101",
    spent: "890.66元",
    refunds: "-",
    fav: true,
  },
  {
    id: "1",
    image: Image02,
    name: "李某某",
    email: "xxxx@app.com",
    location: "中国上海",
    orders: "77",
    lastOrder: "#20240102",
    spent: "677.04元",
    refunds: "4",
    fav: false,
  },
  {
    id: "2",
    image: Image03,
    name: "王某某",
    email: "xxxx@app.com",
    location: "中国广州",
    orders: "44",
    lastOrder: "#20240103",
    spent: "496.00元",
    refunds: "1",
    fav: true,
  },
  {
    id: "3",
    image: Image04,
    name: "赵某某",
    email: "xxxx@app.com",
    location: "中国深圳",
    orders: "29",
    lastOrder: "#20240104",
    spent: "320.66元",
    refunds: "2",
    fav: false,
  },
  {
    id: "4",
    image: Image05,
    name: "陈某某",
    email: "xxxx@app.com",
    location: "中国成都",
    orders: "22",
    lastOrder: "#20240105",
    spent: "590.66元",
    refunds: "-",
    fav: true,
  },
  {
    id: "5",
    image: Image06,
    name: "刘某某",
    email: "xxxx@app.com",
    location: "中国杭州",
    orders: "14",
    lastOrder: "#20240106",
    spent: "449.99元",
    refunds: "1",
    fav: true,
  },
  {
    id: "6",
    image: Image07,
    name: "杨某某",
    email: "xxxx@app.com",
    location: "中国南京",
    orders: "34",
    lastOrder: "#20240107",
    spent: "369.87元",
    refunds: "2",
    fav: true,
  },
  {
    id: "7",
    image: Image08,
    name: "黄某某",
    email: "xxxx@app.com",
    location: "中国武汉",
    orders: "112",
    lastOrder: "#20240108",
    spent: "746.07元",
    refunds: "6",
    fav: false,
  },
  {
    id: "8",
    image: Image09,
    name: "吴某某",
    email: "xxxx@app.com",
    location: "中国重庆",
    orders: "64",
    lastOrder: "#20240109",
    spent: "676.92元",
    refunds: "-",
    fav: true,
  },
  {
    id: "9",
    image: Image10,
    name: "周某某",
    email: "xxxx@app.com",
    location: "中国西安",
    orders: "19",
    lastOrder: "#20240110",
    spent: "289.97元",
    refunds: "2",
    fav: false,
  },
]);
    return {
      selectAll,
      selected,
      checkAll,
      customers,
    };
  },
};
</script>
