<script setup lang="ts">
const props = defineProps<{
  isOpen: boolean
}>()
</script>

<template>
  <aside id="app-sidebar" class="app-sidebar" :class="{ 'app-sidebar--open': props.isOpen }">
    <nav class="app-sidebar__navigation nav flex-column" aria-label="주 메뉴">
      <RouterLink class="nav-link" to="/dashboard">대시보드</RouterLink>
      <RouterLink class="nav-link" to="/usermng">유저 관리</RouterLink>
      <RouterLink class="nav-link" to="/map">지도 화면</RouterLink>
      <RouterLink class="nav-link" to="/pest">병해충 목록</RouterLink>
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

.app-sidebar__navigation .nav-link {
  padding: 8px 20px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-strong);
}

.app-sidebar__navigation .nav-link.router-link-exact-active {
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
