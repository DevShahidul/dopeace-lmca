<template>
    <div class="main-wrapper login-page-wrapper">
        <div class="inner-container">
            <h1>{{ title }}</h1>
            <h5 class="lead-text">{{ leadText }}</h5>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const {title, leadText} = defineProps({
    title: {
        type: String,
        required: true
    },
    leadText: {
        type: String
    }
})
export default {
    name: "AuthLayout"
}
</script>

<style scoped>

</style>
