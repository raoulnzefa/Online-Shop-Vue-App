<template>
    <div class="v-cart-item">
        <img class="v-cart-item__image" :src="require(`@/assets/images/${productData.image}`)" alt="">
        <p class="v-cart-item__name">{{productData.name}}</p>
        <p class="v-cart-itemm__price">Price: {{productData.price}} руб.</p>
        <button>
            Buy
        </button>
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
        
    },
    mounted() {
        
    },
};
</script>
