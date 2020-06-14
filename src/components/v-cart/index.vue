<template>
    <div class="v-cart">
        <h1 class="v-cart__title">Cart</h1>
            <router-link :to="{ name: 'catalog' }">
                <div class="v-cart__link-to-catalog">Back to catalog</div>
            </router-link>
        <p 
            class="v-cart__empty-card-warning" 
            v-if="!CART.length"
        >
            Your cart is empty :(
        </p>
        <div class="v-cart__items-wrapper">
            <vCartItem 
            v-for="product in CART"
            :key="product.articte"
            :productData="product"
            @deleteFromCart="DELETE_FROM_CART" 
            />
        </div>
        <div 
            class="v-cart__total-price"
            v-if="CART.length"
            >Total: {{getTotalPrice}} RUB
        </div>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>
import vCartItem from "./../v-cart-item/index";
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'V-cart',
    components: {
        vCartItem
    },
    methods: {
        ...mapActions([
        "DELETE_FROM_CART"
      ]),
    },
     computed: {
        ...mapGetters([
        "CART"
      ]),
      getTotalPrice () {
          let total = 0;
          for (let item of this.CART) {
              total+= (item.price * item.amount);
          }
          return total;
      }
      
    }
};
</script>
