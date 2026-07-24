<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userId = ref('')
const password = ref('')

const handleLogin = () => {
  router.replace({ name: 'dashboard' })
}
</script>

<template>
  <main class="login-page">
    <section class="login-panel" aria-labelledby="login-title">
      <div class="login-logo">
        <div class="login-logo__mark" aria-hidden="true">Vue</div>
        <h1 id="login-title" class="login-logo__title">Vue 테스트</h1>
      </div>

      <form class="login-form d-flex flex-column gap-3" @submit.prevent="handleLogin">
        <div>
          <label class="form-label" for="user-id">아이디</label>
          <input
            id="user-id"
            v-model.trim="userId"
            class="form-control"
            type="text"
            autocomplete="username"
            placeholder="아이디를 입력하세요"
          />
        </div>

        <div>
          <label class="form-label" for="password">비밀번호</label>
          <input
            id="password"
            v-model="password"
            class="form-control"
            type="password"
            autocomplete="current-password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>

        <button class="btn btn-primary w-100" type="submit">로그인</button>
        <p>로그인 버튼 누르면 화면 이동</p>
      </form>
    </section>
  </main>
</template>

<style scoped>
.login-page {
  display: grid;
  min-height: 100dvh;
  padding: var(--space-6);
  place-items: center;
  background: var(--color-background);
}

.login-panel {
  display: grid;
  grid-template-columns: minmax(220px, 0.8fr) minmax(280px, 1.2fr);
  width: min(100%, 720px);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  background: var(--color-surface);
}

.login-logo {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  align-items: center;
  justify-content: center;
  min-height: 320px;
  padding: var(--space-8);
  border-right: 1px solid var(--color-border);
  text-align: center;
}

.login-logo__mark {
  display: grid;
  width: 64px;
  height: 64px;
  border-radius: var(--radius-pill);
  color: var(--color-text-inverse);
  background: var(--color-primary);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  place-items: center;
}

.login-logo__title {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-h2);
}

.login-form {
  justify-content: center;
  padding: var(--space-10);
}

@media (width < 640px) {
  .login-page {
    padding: var(--space-4);
  }

  .login-panel {
    grid-template-columns: minmax(0, 1fr);
  }

  .login-logo {
    min-height: auto;
    padding: var(--space-8) var(--space-6);
    border-right: 0;
    border-bottom: 1px solid var(--color-border);
  }

  .login-form {
    padding: var(--space-6);
  }
}
</style>
