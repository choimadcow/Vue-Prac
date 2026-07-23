<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <aside id="app-sidebar" class="app-sidebar" :class="{ 'app-sidebar--open': props.isOpen }">
    <nav class="app-sidebar__navigation" aria-label="주 메뉴">
      <RouterLink to="/dashboard">대시보드</RouterLink>
      <RouterLink to="/dashboard/map">지도 테스트</RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.app-sidebar {
  overflow-y: auto;
  border-right: 1px solid var(--color-border);
  background: var(--color-surface);
}

.app-sidebar strong {
  padding: 0 20px 0 20px;
}

.app-sidebar__navigation {
  display: flex;
  flex-direction: column;
}

.app-sidebar__navigation a {
  padding: 8px 20px;
  border-bottom: 1px solid var(--color-border);
  color: #222;
  text-decoration: none;
}

.app-sidebar__navigation a.router-link-exact-active {
  background: var(--color-primary-soft);
}

@media (width < 1024px) {
  .app-sidebar {
    position: fixed;
    top: 64px;
    bottom: 0;
    left: 0;
    z-index: 20;
    width: 240px;
    transform: translateX(-100%);
    transition: transform 200ms ease;
  }

  .app-sidebar--open {
    transform: translateX(0);
  }
}
</style>
