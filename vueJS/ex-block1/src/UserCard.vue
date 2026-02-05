<template>
  <div class="usercard">
    <p>{{ name }} - {{ age }} years old</p>
  </div>
  
</template>

<script setup>
  const prop = defineProps({
    name: String, 
    age: Number
  })
</script>

<style scoped>

</style>