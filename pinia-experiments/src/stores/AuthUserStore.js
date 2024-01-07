import { defineStore } from "pinia";

export const useAuthUserStore = defineStore("AuthUserStore", {
    state: () => {
        return {
            username: "Nazarkon",
        }
    },
    actions: {
        visitTwitterProfile(){
            window.open(`https://twitter.com/@_${this.username}`, '_blank')
        }
    }
})