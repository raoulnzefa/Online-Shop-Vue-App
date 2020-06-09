<template>
    <div class="v-catalog">
      <h1 class="v-catalog__title">Catalog</h1>
        <div class="v-catalog__list">
            <vCatalogItem 
            v-for="product in PRODUCTS"
            :key="product.article"
            :productData="product"
            @addToCart="ADD_TO_CART"/>
        </div>
    </div>
</template>

<style lang="scss">
    @import "./index.scss";
</style>

<script>
import vCatalogItem from "./../v-catalog-item/index";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "V-catalog",
    components: {
        vCatalogItem
    },
    data() {
        return {
        
      };
    },
    
    methods: {
      ...mapActions([
        "FETCH_PRODUCTS",
        "ADD_TO_CART"
      ]),
    
    },
    mounted() {
       this.FETCH_PRODUCTS();
    },
    computed: {
      ...mapGetters([
        "PRODUCTS"
      ])
    }
};
</script>
