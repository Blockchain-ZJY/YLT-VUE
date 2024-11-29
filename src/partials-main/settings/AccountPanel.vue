<template>
  <div class="grow">
    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">我的账号</h2>
      <!-- Picture -->
      <section>
        <div class="flex items-center">
          <div class="mr-4">
            <img class="w-20 h-20 rounded-full" src="../../images/user-avatar-80.png" width="80" height="80" alt="User upload" />
          </div>
          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">修改头像</button>
        </div>
      </section>
      <!-- Business Profile -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">账号设置</h3>
        <div class="sm:flex sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-5">
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1  text-stone-600" for="name">账户名称</label>
            <input id="name" class="form-input w-full bg-gray-200" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1 text-stone-600" for="business-id">账户ID</label>
            <input id="business-id" class="form-input w-full bg-gray-200" type="text" />
          </div>
          <div class="sm:w-1/3">
            <label class="block text-sm font-medium mb-1 text-stone-600" for="location">工作地点</label>
            <input id="location" class="form-input w-full bg-gray-200" type="text" />
          </div>
        </div>
      </section>
      <!-- 工作邮箱 -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">工作邮箱</h3>
        <div class="flex flex-wrap mt-5">
          <div class="mr-2">
            <label class="sr-only" for="工作邮箱">工作邮箱</label>
            <input id="工作邮箱" class="form-input bg-gray-200" type="工作邮箱" />
          </div>
          <button class="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-indigo-500">修改</button>
        </div>
      </section>
      <!-- Password -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">密码</h3>
        <div class="text-sm text-stone-600">如果你不想使用临时登录代码，可以设置一个永久密码。</div>
        <div class="mt-5">
          <button class="btn border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-indigo-500">重置密码</button>
        </div>
      </section>
      <!-- Smart Sync -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">区块链网络列入医师</h3>
        <div class="text-sm text-stone-400">能够访问区块链病号数据并留痕</div>
        <div class="flex items-center mt-5">
          <div class="form-switch">
            <input type="checkbox" id="toggle" class="sr-only" v-model="sync" true-value="On" false-value="Off" />
            <label class="bg-slate-400 dark:bg-slate-700" for="toggle">
              <span class="bg-white shadow-sm" aria-hidden="true"></span>
              <span class="sr-only">Enable smart sync</span>
            </label>
          </div>
          <div class="text-sm text-slate-400 dark:text-slate-500 italic ml-2">{{sync}}</div>
        </div>
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
  name: 'AccountPanel',
  setup() {

  const sync = ref('Off')

    return {
      sync,
    }
  }
}
</script>