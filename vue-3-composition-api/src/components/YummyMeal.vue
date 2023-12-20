<template>
   <p>
    <strong>{{ name }}</strong>
    <YummyMealPrice :price="price"/>
   </p>

   <button @click="addToCart">Add to Cart</button>
</template>
<script>
import YummyMealPrice from './YummyMealPrice.vue';

export default {
    components: { YummyMealPrice },
    props: {
        name: String,
        price: Number,
    },
    setup(props, { emit }) {
        console.log(props.name);
        console.log(props.price);
        const addToCart = () => emit("addToCart", props.name);
        return { addToCart };
    },
    components: { YummyMealPrice }
}
</script>