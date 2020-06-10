<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require(`@/assets/images/${productData.image}`)" alt="">
        <p class="v-cart-item__name">{{productData.name}}</p>
        <p class="v-cart-item__price">Price: {{productData.price}} RUB</p>
        <p class="v-cart-item__amount">
            Amount: 
            <span class="v-cart-item__change-item-amount-btn" @click="incrementAmount">+</span> 
            {{productData.amount}} 
            <span class="v-cart-item__change-item-amount-btn" @click="decrementAmount">-</span>
        </p>
        <div class="v-cart-item__button-wrapper">
        <button @click="deleteFromCart">Delete</button>
        </div>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>


export default {
    name: 'V-cart-item',
     props: {
        productData: {
            type: Object,
            default () {
                return {};
            }
        }
    },
    data() {
        return {
            
        };
    },
    
    methods: {
        deleteFromCart () {
            this.$emit("deleteFromCart", this.productData.article);
        },
        incrementAmount() {
            return this.productData.amount++;
        },
        decrementAmount () {
            if(this.productData.amount > 1) {
                return this.productData.amount--;
            } else {
                return this.deleteFromCart();
            }
        }
    },
    mounted() {
        this.$set(this.productData, "amount", 1)
    },
};
</script>
