<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <h3>Total count: {{cartData.length}}</h3>
        <div class="v-cart__items-wrapper">
            <vCartItem 
            v-for="product in cartData"
            :key="product.articte"
            :productData="product"
            @deleteFromCart="DELETE_FROM_CART" />
            </div>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import vCartItem from "./../v-cart-item/index";
import { mapActions } from "vuex";

export default {
    name: 'V-cart',
    components: {
        vCartItem
    },
    props: {
        cartData: {
            type: Array,
            default () {
                return  [];
            }
        }
    },
    data() {
        return {
        };
    },
    
    methods: {
        ...mapActions([
        "DELETE_FROM_CART"
      ]),
    },
    mounted() {
    },
     computed: {
    }
};
</script>
