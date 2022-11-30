<template>
    <button @click="onClick()" :style="{background: color}" class="btn">{{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: {
            type: String,
            default: "Button"
        },
        color: String,
    },
    methods: {
        onClick() {
            console.log("You clicked!");
        }
    }
}
</script>

<style scoped>

</style>