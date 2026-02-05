<template>
    <button @click="increment">Increment</button>
</template>

<script setup>
    const emit = defineEmits(['increment']) // déclare les évémenements que le composant peut émettre

    function increment() {
        emit('increment')
    }
</script>

<style scoped>

</style>