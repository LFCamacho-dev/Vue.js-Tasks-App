
<template>
    <header>
        <h1>{{title}}</h1>
        <Button 
            v-show="homePage"
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
    computed: {
        homePage(){
            if(this.$route.path === '/'){
                return true
            } else { false }
        }
    }
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