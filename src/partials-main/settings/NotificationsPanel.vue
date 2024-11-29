<template>
  <div class="grow bg-white">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">我的信息</h2>

      <!-- General -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">概况</h3>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">科室</div>
              <div class="text-sm text-stone-600">心血管室</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{comments}}</div>
              <div class="form-switch">
                <input type="checkbox" id="comments" class="sr-only" v-model="comments" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="comments">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only text-stone-600">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">工作年限</div>
              <div class="text-sm text-stone-600">13年</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{messages}}</div>
              <div class="form-switch">
                <input type="checkbox" id="messages" class="sr-only" v-model="messages" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="messages">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only text-stone-600">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">手术范围</div>
              <div class="text-sm text-stone-600">三叉神经痛及面肌痉挛的微血管减压术、颅咽管瘤切除术、桥小脑角肿瘤切除术、颈部椎管内肿瘤切除术、脑干血肿清除术等高难度手术.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{mentions}}</div>
              <div class="form-switch">
                <input type="checkbox" id="mentions" class="sr-only" v-model="mentions" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="mentions">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only text-stone-600">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- Shares -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">区块链信息</h3>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold ">助记词</div>
              <div class="text-sm text-stone-600">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">Manage</button>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">团队ID</div>
              <div class="text-sm text-stone-600">c8f6791ea87ec3170b565326db7cea94</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">Manage</button>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">合约上传ID</div>
              <div class="text-sm text-stone-600">387cabfccf05674b1c58dc09c7f79647</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2 hidden md:block">激活</div>
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-rose-500">弃用</button>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
        <div class="flex self-end">
          <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">取消</button>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">保存</button>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'NotificationsPanel',
  setup() {

  const comments = ref('On')
  const messages = ref('On')
  const mentions = ref('Off')

    return {
      comments,
      messages,
      mentions,
    }
  }
}
</script>