<template>
  <input type="text" v-model="inputValue" />
  <span>你輸入了 {{ inputValue.length }} 個字</span>
</template>

<script setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
