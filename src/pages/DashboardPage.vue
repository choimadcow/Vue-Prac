<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)

const incrementCounter = () => counter.value++
const decrementCounter = () => counter.value--
</script>

<template>
  <section>
    <h1>대시보드 테스트</h1>
    <p>대시보드 테스트를 위한 화면</p>
  </section>
  <section>
    <div class="d-flex flex-column gap-2 pt-3">
      <div>
        <p>상태관리 테스트 항목</p>
      </div>
      <div class="d-flex align-items-center gap-2">
        <button
          class="btn btn-outline-secondary btn-sm"
          type="button"
          aria-label="카운터 감소"
          @click="decrementCounter"
        >
          -
        </button>
        <span>{{ counter }}</span>
        <button
          class="btn btn-outline-primary btn-sm"
          type="button"
          aria-label="카운터 증가"
          @click="incrementCounter"
        >
          +
        </button>
      </div>
    </div>
  </section>
</template>
