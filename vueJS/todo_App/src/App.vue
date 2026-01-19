<template>
  <div class="task-builder">
    <input v-model="newTask" placeholder="Add a new task"/>
    <button @click="addMission">Add task</button>
  </div>

  <ul>
    <TaskItem
      v-for="task in tasks" :key="task"
      :mission=task.mission 
      :done=task.done
      @toggle-task="task.done = $event"
      @delete-task="deleteTask(task.mission)" />
  </ul>
</template>

<script setup>
  import { ref } from 'vue'
  import TaskItem from './TaskItem.vue'

  const newTask = ref("")

  const task = ref({
    mission: "",
    done: false
  })
  const tasks = ref([])

  const addMission = () => {
    if (newTask.value.length == 0) return

    const addTask = {
      mission: newTask.value,
      done: false
    }

    tasks.value.push(addTask)
    newTask.value = ""
  }

  const deleteTask = (mission) => {
    const indexToDelete = tasks.value.findIndex(task => task.mission == mission)
    tasks.value.splice(indexToDelete, 1)
  }
</script>

<style scoped>
  div.task-builder input {
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
    margin-right: 10px;
  }

  div.task-builder button {
    height: 30px;
    border-radius: 10px;
    border: 2px solid black;
    background-color: rgb(95, 234, 95);
  }
</style>