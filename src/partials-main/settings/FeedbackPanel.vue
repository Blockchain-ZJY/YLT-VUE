<template>
  <div class="grow bg-white">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <div>
        <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-4">Give Feedback</h2>
        <div class="text-sm">Our product depends on customer feedback to improve the overall experience!</div>
      </div>

      <!-- Rate -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-6">How likely would you recommend us to a friend or colleague?</h3>
        <div class="w-full max-w-xl">
          <div class="relative">
            <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
            <ul class="relative flex justify-between w-full">
              <li class="flex">
                <button class="w-3 h-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-500">
                  <span class="sr-only">1</span>
                </button>
              </li>
              <li class="flex">
                <button class="w-3 h-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-500">
                  <span class="sr-only">2</span>
                </button>
              </li>
              <li class="flex">
                <button class="w-3 h-3 rounded-full bg-indigo-500 border-2 border-indigo-500">
                  <span class="sr-only">3</span>
                </button>
              </li>
              <li class="flex">
                <button class="w-3 h-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-500">
                  <span class="sr-only">4</span>
                </button>
              </li>
              <li class="flex">
                <button class="w-3 h-3 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-500">
                  <span class="sr-only">5</span>
                </button>
              </li>
            </ul>
          </div>
          <div class="w-full flex justify-between text-sm text-slate-500 dark:text-slate-400 italic mt-3">
            <div>Not at all</div>
            <div>Extremely likely</div>
          </div>
        </div>
      </section>

      <!-- Tell us in words -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-5">Tell us in words</h3>
        <!-- Form -->
        <label class="sr-only" for="feedback">Leave a feedback</label>
        <textarea id="feedback" class="form-textarea w-full focus:border-slate-300" rows="4" placeholder="I really enjoy…"></textarea>
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
export default {
  name: 'FeedbackPanel',
}
</script>