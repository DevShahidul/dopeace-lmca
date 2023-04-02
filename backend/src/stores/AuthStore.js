import {defineStore} from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        authToken: 12345
    }),
    getters: {
        userToken: (state) => state.authToken
    },
    actions: {
        getAuthToken(){
            return this.authToken;
        }
    }
})
