import { defineStore } from "pinia";

import { groupBy, remove } from "lodash";

import { useAuthUserStore } from "./AuthUserStore";

export const useCartStore = defineStore("CartStore", {
    state: () => {
        return {
            items: [],
        }
    },
    getters: {
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        grouped: (state) => {
            const grouped = groupBy(state.items, (item) => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach(key => inOrder[key] = grouped[key])
            return inOrder
        },
        groupCount: (state) => (name) => state.grouped[name].length,
        totalPrice: (state) => state.items.reduce((acc = 0, item) => acc + item.price, 0)
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
                for(let index = 0; index < count; index++) {
                    this.items.push({...item})
            }
        },
        setItemCount(item, count) {
            console.log(item, 'item');
            console.log(count, 'count');
            this.removeProduct(item.name);
            this.addItems(count, item);

        },
        removeProduct(name) {
            remove(this.items, (item) => item.name === name)
        },
        checkout(){
            const authUserStore = useAuthUserStore();
            alert(`${authUserStore.username} just bought ${this.count} items at total of ${this.totalPrice}`);
        }
    }   
    
})