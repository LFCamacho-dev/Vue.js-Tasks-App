<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    data(){
        return{
            addTask: false
        }
    },
    props: {
        text: {
            type: String,
            default: "Button"
        },
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click')
        },
    },
}
</script>