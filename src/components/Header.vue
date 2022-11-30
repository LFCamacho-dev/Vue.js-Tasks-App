
<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
            @btn-click="$emit('add-task-form')" 
            :text="showAddTask ? 'Close' : 'Add Task'" 
            :color="showAddTask ? 'orange' : 'green' "/>
    </header>
</template>

<script>
import Button from './Button.vue'
    

export default {
    name: 'Header',
    props: {
        title: {
            type: String,
            default: "HOLA!",
        },
        showAddTask: Boolean,
    },
    components: {
        Button,
    },
    emits: [
        'add-task-form',
    ],
}
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>