<template>
  <button @click="decrease()" data-testid="minusBtn">-</button>
  <span>{{ counter }}</span>
  <button @click="counter++" data-testid="plusBtn">+</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

function decrease() {
  // 確保計數器不會小於 0
  if (counter.value > 0) {
    counter.value--
  }
}
</script>
