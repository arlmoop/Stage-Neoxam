<template>
  <p>Total : {{ total }}</p>
  <CounterButton @increment="add"></CounterButton>
</template>

<script setup>
  import { ref } from 'vue'
  import CounterButton from './CounterButton.vue'

  const total = ref(0)

  function add() {
    total.value ++
  }
</script>

<style scoped>

</style>