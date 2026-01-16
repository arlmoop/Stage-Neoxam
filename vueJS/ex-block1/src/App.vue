
<template>
  <input v-model="firstName" placeholder="first name">
  <input v-model="lastName" placeholder="last name">

  <br>
  <button>{{ fullName }}</button>
</template>

<script setup>
  import { ref, computed } from 'vue'

  function sayHello() {
    alert("HELLO !!")
  }

  const firstName = ref('')
  const lastName = ref('')

  const fullName = computed(() => {
    return firstName.value + ' ' + lastName.value
  })

</script>

<style scoped>

</style>