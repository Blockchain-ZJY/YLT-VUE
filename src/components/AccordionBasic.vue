<template>
  <div class="px-5 py-4 rounded-lg dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
    <button
      class="flex items-center justify-between w-full group mb-1"
      @click.prevent="open = !open"
      :aria-expanded="open"
    >
      <div class="text-sm text-slate-800 dark:text-slate-100 font-medium">{{ title }}</div>
      <svg class="w-8 h-8 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3" :class="{ 'rotate-180': open }" viewBox="0 0 32 32">
        <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
      </svg>
    </button>
    <div class="text-sm" v-show="open">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AccordionBasic',
  props: ['title'],
  setup() {

    const open = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)

    return {
      open,
      trigger,
      dropdown,
    }
  }
}
</script>