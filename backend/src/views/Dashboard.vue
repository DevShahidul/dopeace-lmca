<template>
<h2>Dashboard {{test}}} </h2>
</template>

<script setup>
import {ref, computed} from "vue";
import {useAuthStore} from "@/stores";
const authStore = useAuthStore();
const test = computed(() => authStore.authToken);

</script>

<style scoped>

</style>
