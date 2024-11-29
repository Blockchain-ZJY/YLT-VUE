<template>
  <div v-show="isopen">
    <div
      class="rounded-md bg-red-50 p-4 w-1/4 translate-x-[700px] -translate-y-[650px]"
    >
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div class="ml-3">
          <p class="text-sm font-medium text-red-800">账号或密码错误</p>
        </div>
        <div class="ml-auto pl-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              @click="Close()"
              class="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
            >
              <span class="sr-only">Dismiss</span>
              <XMarkIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, XMarkIcon } from "@heroicons/vue/20/solid";
import { onMounted, ref  } from "vue";

const isopen = ref(true);
onMounted(() => {
  isopen.value= true
});
function Close() {
  isopen.value = false;
  console.log(isopen.value);
}
</script>
