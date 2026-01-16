
<template>
  <input v-model="login.email" placeholder="Email">
  <input v-model="login.password" placeholder="Password">

  <p>Email : {{ login.email }} || Password : {{ login.password }}</p>
</template>

<script setup>
  import { ref, computed, reactive } from 'vue'

  const login = reactive({
    email: "",
    password: ""
  })
</script>

<style scoped>

</style>