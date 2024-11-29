<template>
  <div class="relative">
    <!-- Blurred shape -->
    <div class="max-md:hidden absolute bottom-0 -mb-20 left-2/3 -translate-x-1/2 blur-2xl opacity-70 pointer-events-none" aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
        <defs>
          <linearGradient id="bs5-a" x1="19.609%" x2="50%" y1="14.544%" y2="100%">
            <stop offset="0%" stop-color="#A855F7" />
            <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
          </linearGradient>
        </defs>
        <path fill="url(#bs5-a)" fill-rule="evenodd" d="m661 736 461 369-284 58z" transform="matrix(1 0 0 -1 -661 1163)" />
      </svg>
    </div>
    <!-- Content -->
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'PricingTable',
  setup() {

    const annual = ref(true)

    return {
      annual,
    }
  },
}
</script>