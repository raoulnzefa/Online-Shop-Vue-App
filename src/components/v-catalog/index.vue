<template>
    <div class="v-catalog">
      <h1 class="v-catalog__title">Catalog</h1>
      <router-link :to="{ name: 'cart' }">
        <div class="v-catalog__link-to-cart">Cart: {{CART.length}}</div>
      </router-link>
      <vSelect 
      :options="categories"
      :selected="selected"
      @selectOption="sortByCategory"/>
        <div class="v-catalog__list">
            <vCatalogItem 
            v-for="product in filteredProducts"
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
import vCatalogItem from "./v-catalog-item/index";
import vSelect from "./../v-select/index";
import { mapActions, mapGetters } from "vuex";
export default {
    name: "V-catalog",
    components: {
        vCatalogItem,
        vSelect
    },  
    methods: {
      ...mapActions([
        "FETCH_PRODUCTS",
        "ADD_TO_CART"
      ]),
      sortByCategory (value) {
        this.selected = value;
        this.sortedProducts = [];
        switch (value) {
          case "women":
          case "men":
            this.sortedProducts = this.PRODUCTS.filter((item) => item.category === value);
            break;
        }
      }
    },
    data () {
      return {
        categories: [
                { name: "all", value: "all" },
                { name: "women", value: "women" },
                { name: "men", value: "men" },
            ],
        selected: "all",
        sortedProducts: [],
      }
    },
    mounted() {
       this.FETCH_PRODUCTS();
    },
    computed: {
      ...mapGetters([
        "PRODUCTS",
        "CART"
      ]),
      filteredProducts () {
        return this.sortedProducts.length ?
        this.sortedProducts 
        :
        this.PRODUCTS;
      }
    }
};
</script>
