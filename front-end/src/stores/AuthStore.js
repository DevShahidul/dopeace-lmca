import {defineStore} from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        user: {
            token: 12345
        }
    })
})
