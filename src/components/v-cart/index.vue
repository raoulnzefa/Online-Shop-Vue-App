<template>
    <div class="v-cart">
        <h2 @click="toggleShowCart">Cart</h2>
        <div v-if="cartSeen" class="v-cart__items-wrapper">
            <vCartItem 
            v-for="product in cartData"
            :key="product.articte"
            :productData="product" />
            </div>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import vCartItem from "./../v-cart-item/index";

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
            cartSeen: false
        };
    },
    
    methods: {
        toggleShowCart () {
            this.cartSeen = !this.cartSeen;
        }
    },
    mounted() {
    },
     computed: {
    }
};
</script>
