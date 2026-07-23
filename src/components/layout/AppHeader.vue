<script setup lang="ts">
defineProps<{
  isMenuOpen: boolean
}>()

defineEmits<{
  toggleMenu: []
}>()
</script>

<template>
  <header class="app-header">
    <button
      class="app-header__menu-button"
      type="button"
      :aria-label="isMenuOpen ? '메뉴 닫기' : '메뉴 열기'"
      aria-controls="app-sidebar"
      :aria-expanded="isMenuOpen"
      @click="$emit('toggleMenu')"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>

    <strong class="app-header__logo">Logo 영역</strong>
    <a href="/login" class="app-header__actions">로그아웃</a>
    <!-- <span class="app-header__actions">헤더 메뉴</span> -->
  </header>
</template>

<style scoped>
.app-header {
  position: relative;
  z-index: 30;
  display: grid;
  grid-column: 1 / -1;
  grid-template-areas: 'logo . actions';
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-surface);
}

.app-header__menu-button {
  display: none;
  grid-area: menu;
}

.app-header__logo {
  grid-area: logo;
}

.app-header__actions {
  grid-area: actions;
  justify-self: end;
  text-decoration: none;
}

.app-header__actions:hover {
  text-decoration: underline;
}

@media (width < 1024px) {
  .app-header {
    grid-template-areas: 'menu logo actions';
    grid-template-columns: 1fr auto 1fr;
  }

  .app-header__menu-button {
    display: inline-flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;
    justify-self: start;
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    cursor: pointer;
  }

  .app-header__menu-button span {
    width: 18px;
    height: 1px;
    background: currentcolor;
  }
}
</style>
