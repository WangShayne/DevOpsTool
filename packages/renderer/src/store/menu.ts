import { defineStore } from "pinia";
import { MenuKeys } from "../utils"
console.log(MenuKeys)

interface stateProps {
    active: number | null
}

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        active: 0 
    }),
    actions: {
        selectMenu( key: number ) : void {
            this.active = key
        }
    }
})