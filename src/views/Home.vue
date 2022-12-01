<template>

    <AddTask v-if="showAddTask" @add-task="addTask"/>

    <Tasks @toggle-task="toggleTask" @delete-task="deleteTask" :tasks="tasks"/>

</template>

<script>
    import Tasks from '../components/Tasks.vue'
    import AddTask from '../components/AddTask.vue'


    export default {
        name: "Home",
        props: {
            showAddTask: Boolean
        },
        components: {
            Tasks,
            AddTask,
        },
        data(){
            return {
                tasks: []
            }
        },
        methods: {
            async deleteTask(id){
            if(confirm('Are you sure?')) {
                const res = await fetch(`api/tasks/${id}`, {
                method: 'DELETE',
                })

                res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task.')

            }
            },
            async toggleTask(id){
            const taskToToggle =  await this.fetchTask(id)

            const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

            const res = await fetch(`api/tasks/${id}`, {
                method: 'PUT',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify(updTask),
            })

            const data = await res.json()

            let toggled = this.tasks.find((task) => task.id === id)

            // toggled.reminder = !toggled.reminder
            toggled.reminder = data.reminder


            },
            async addTask(newTask){

            const res = await fetch('api/tasks', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json',
                },
                body: JSON.stringify(newTask)
            })

            const data = await res.json()
            this.tasks = [...this.tasks, data];

            },            
            async fetchTasks(){
                const res = await fetch('api/tasks');
                const data = await res.json()
                return data;
            },
            async fetchTask(id){
                const res = await fetch(`api/tasks/${id}`);
                const data = await res.json()
                return data;
            }
        },
        async created() {
            this.tasks = await this.fetchTasks()
        },
    }
</script>

<style scoped>

</style>