<script setup>
  import { ref, reactive } from 'vue'

  const name = ref('')

  const user = {
    firstName: "",
    lastName: ""
  }
</script>

<template>
  <input v-model="name">

  <p>Je m'appelle : {{ name }}</p>

  <input v-model="user.firstName" placeholder="Prénom">
  <input v-model="user.lastName" placeholder="Nom">

  <p>Prénom : {{ user.firstName }} || Nom : {{ user.lastName }}</p>
</template>

<style scoped>

</style>