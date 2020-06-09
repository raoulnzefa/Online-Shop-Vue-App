<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item__image" :src="require(`@/assets/images/${productData.image}`)" alt="">
        <p class="v-catalog-item__name">{{productData.name}}</p>
        <p class="v-catalog-item__price">Price: {{productData.price}} руб.</p>
        <button 
            class="v-catalog-item__add-to-cart-btn btn" 
            @click="addToCart"
            >Add to cart
            </button>
    </div>
</template>

<style lang="scss">
    @import "./index.scss";

</style>

<script>


export default {
    name: "V-catalog-item",
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
        addToCart () {
            this.$emit("addToCart", this.productData);
        }
    },
    mounted() {
        
    },
};
</script>
