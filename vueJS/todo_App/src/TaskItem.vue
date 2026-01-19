<template>
    <li :class="{ completed: done }">
        {{ props.mission }}
        <input type="checkbox" :checked="done" @change="toggleDone">
        <button @click="deleteTask()">Delete Task</button>
    </li>
</template>

<script setup>
    const props = defineProps({
        mission: String,
        done: Boolean
    })

    const emit = defineEmits(['toggle-task', "delete-task"])

    const toggleDone = (event) => {
        emit('toggle-task', event.target.checked)
    }

    const deleteTask = () => {
        emit('delete-task')
    }
</script>

<style scoped>
  li {
    background-color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
    max-width: 1000px;
  }

  li.completed {
    background-color: rgb(95, 234, 95);
  }
</style>