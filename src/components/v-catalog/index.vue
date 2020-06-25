<template>
  <div class="v-catalog">
    <vNotification
    :messages="messages"
    :timeout="3000"/>
    <h1 class="v-catalog__title">Catalog</h1>
    <router-link :to="{ name: 'cart' }">
      <div class="v-catalog__link-to-cart">Cart: {{ CART.length }}</div>
    </router-link>
    <vSelect
      :options="categories"
      :selected="selected"
      @selectOption="sortByCategory"
    />
    <div class="v-catalog__list">
      <vCatalogItem
        v-for="product in filteredProducts"
        :key="product.article"
        :productData="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>

<script>
import vCatalogItem from "./v-catalog-item/index";
import vSelect from "./../v-select/index";
import vNotification from "./../v-notification/index";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "V-catalog",
  components: {
    vCatalogItem,
    vSelect,
    vNotification
  },
  methods: {
    ...mapActions(["FETCH_PRODUCTS", "ADD_TO_CART"]),
    sortByCategory(value) {
      this.selected = value;
      this.sortedProducts = [];
      switch (value) {
        case "women":
        case "men":
          this.sortedProducts = this.PRODUCTS.filter(
            item => item.category === value
          );
          break;
      }
    },
    addToCart (data) {
      this.ADD_TO_CART(data)
      .then(()=> {
        this.messages.push({id: Date.now(), text: "Item added to cart"})
      })
    }
  },
  data() {
    return {
      categories: [
        { name: "all", value: "all" },
        { name: "women", value: "women" },
        { name: "men", value: "men" }
      ],
      selected: "all",
      sortedProducts: [],
      messages: []
    };
  },
  mounted() {
    this.FETCH_PRODUCTS();
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      return this.sortedProducts.length ? this.sortedProducts : this.PRODUCTS;
    }
  }
};
</script>
