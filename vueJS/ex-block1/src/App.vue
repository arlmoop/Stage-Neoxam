<template>
  <button :class="{ active: isActive }" @click="toggle"></button>
</template>

<script setup>
  import { ref } from 'vue'

  const isActive = ref(false)

  function toggle() {
    isActive.value = !isActive.value
  }

</script>

<style scoped>
  button {
    padding: 50px 100px;
    background-color: red;
  }

  button.active {
    background-color: green;
  }
</style>