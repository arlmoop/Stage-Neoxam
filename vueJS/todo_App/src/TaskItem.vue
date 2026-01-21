<template>
    <li class="bg-background_li lg:max-w-4xl md:max-w-3xl sm:max-w-2xl" :class="{ completed: done }">
        {{ props.mission }}

        <input class="ml-4 " type="checkbox" :checked="done" @change="toggleDone">

        <button class="bg-background_delete_button hover:bg-background_delete_button_hover 
        border-2 border-black rounded-lg ml-2 px-3" @click="deleteTask()">Delete Task</button>
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
    padding: 10px;
    margin: 10px;
    border-radius: 10px;
  }

  li.completed {
    background-color: rgb(95, 234, 95);
  }
</style>