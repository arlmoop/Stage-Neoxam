<template>
  <button :class="{ active: isActive }" @click="toggle"></button> // active defini sur quel élément JS pour le CSS
</template>

<script setup>
  import { onMounted, onUpdated, onUnmounted } from 'vue'
  import { ref } from 'vue'

  const isActive = ref(false)

  function toggle() {
    isActive.value = !isActive.value
  }

  onMounted(() => {
    alert("Le composant est onMounted")
  })

  onUpdated(() => {
    alert("Le composant est update")
  })

  onUnmounted(() => {
    alert("Le composant est detruit")
  })
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