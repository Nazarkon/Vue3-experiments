<template>
  <h1>{{ name }}</h1>
  <input type="text" v-model="name" />
  <button @click="placeOrder">Place Order</button>
  <button @click="removeWatcher">Hide Cart Alerts</button>
  <YummyMeal
    v-for="(meal,index) in meals"
    :key="index"
    :name="meal.name"
    :price="meal.price"
    @addToCart="addItemToCart"
  />
<br><br>
  <select v-model="currencySymbol">
    <option value="$">Dollar($)</option>
    <option value="#">Dollar 2 (#)</option>
  </select>
</template>

<script>
import YummyMeal from "./components/YummyMeal.vue";
import { ref, reactive, watch, provide } from "vue";
export default {
  components: { YummyMeal },
  setup() {
    const currencySymbol = ref("$")
    provide('currencySymbol', currencySymbol)
    const name = ref("The Snazzy Burger");
    const cart = reactive([]);
    const meal = reactive({ name: "Hamburger 🍔", price: 5 });
    const meals = reactive([
      { name: "Hamburger 🍔", price: 5 },
      { name: "Cheeseburger 🧀", price: 6 },
      { name: "Impossible Burger 🥕", price: 7 },
      { name: "Fries 🍟", price: 2 },
    ]);
    const placeOrder = () => alert("Your order has been placed!");
    const addItemToCart = (item) => cart.push(item);
    const removeWatcher = watch([() => [...cart]], (newValue, oldValue) =>
      alert(newValue.join("\n"))
    );

    return { name, placeOrder, addItemToCart, meal, meals, removeWatcher, currencySymbol };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>