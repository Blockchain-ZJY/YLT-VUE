<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="relative flex h-full">

          <!-- Inbox sidebar -->
          <InboxSidebar :inboxSidebarOpen="inboxSidebarOpen" @close-inboxsidebar="inboxSidebarOpen = false" />

          <!-- Inbox body -->
          <InboxBody :inboxSidebarOpen="inboxSidebarOpen" @toggle-inboxsidebar="inboxSidebarOpen = !inboxSidebarOpen" />
          
        </div>
      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../partials-main/Sidebar.vue'
import Header from '../partials-main/Header.vue'
import InboxSidebar from '../partials-main/inbox/InboxSidebar.vue'
import InboxBody from '../partials-main/inbox/InboxBody.vue'

export default {
  name: 'Inbox',
  components: {
    Sidebar,
    Header,
    InboxSidebar,
    InboxBody,
  }, 
  setup() {

    const sidebarOpen = ref(false)
    const inboxSidebarOpen = ref(false)

    return {
      sidebarOpen,
      inboxSidebarOpen,
    }  
  }
}
</script>