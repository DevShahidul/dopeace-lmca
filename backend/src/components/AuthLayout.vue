<template>
    <div class="flex items-center justify-center h-screen px-6 bg-gray-200">
        <div class="w-full max-w-sm p-6 space-y-5 bg-white rounded-md shadow-md">
                <div class="flex items-center justify-center">
                    <main-logo class="w-48" />
                </div>
                <h1 class="text-center text-2xl">{{ title }}</h1>
                <h5 v-if="leadText">{{leadText}}</h5>
                <slot></slot>
        </div>
    </div>
</template>

<script setup>
import MainLogo from "@/components/MainLogo.vue";

const {title, leadText} = defineProps({
    title: {
        type: String,
        required: true,
        default: 'Login'
    },
    leadText: {
        type: String,
        required: false
    }
})
</script>

<style scoped>
</style>
