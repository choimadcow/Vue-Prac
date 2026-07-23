<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'

const route = useRoute()
const isSidebarOpen = ref(false)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeSidebar()
  }
}

watch(() => route.fullPath, closeSidebar)

onMounted(() => {
  window.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <div class="app-layout">
    <AppHeader :is-menu-open="isSidebarOpen" @toggle-menu="toggleSidebar" />
    <AppSidebar :is-open="isSidebarOpen" />

    <button
      v-if="isSidebarOpen"
      class="sidebar-overlay"
      type="button"
      aria-label="메뉴 닫기"
      @click="closeSidebar"
    />

    <main class="app-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  grid-template-rows: 64px minmax(0, 1fr);
  height: 100vh;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: #fff;
}

.app-content {
  min-width: 0;
  overflow: auto;
  padding: 20px;
  background: var(--color-background);
}

.sidebar-overlay {
  display: none;
}

@media (width < 1024px) {
  .app-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .sidebar-overlay {
    position: fixed;
    inset: 64px 0 0;
    z-index: 10;
    display: block;
    border: 0;
    background: rgb(0 0 0 / 40%);
    cursor: pointer;
  }
}
</style>
