<template>
  <div class="v-catalog-item">
    <vPopup 
      v-if="isInfoPopupVisible"
      @closeModal="toggleItemInfo"
      @addToCart="addToCartFromPopup"
      >
        <img :src="require(`@/assets/images/${productData.image}`)" alt="">
        <h3>{{ productData.name }}</h3>
        <p>For {{ productData.category }}</p>
        <p>Price: {{ productData.price }} руб.</p>
    </vPopup>
    <img
      class="v-catalog-item__image"
      :src="require(`@/assets/images/${productData.image}`)"
      alt="product image"
      @click="toggleItemInfo"
    />
    <p class="v-catalog-item__name">{{ productData.name }}</p>
    <p class="v-catalog-item__price">Price: {{ productData.price }} руб.</p>
    <button class="v-catalog-item__add-to-cart-btn btn" @click="addToCart">
      Add to cart
    </button>
  </div>
</template>

<style lang="scss">
@import "./index.scss";
</style>

<script>
import vPopup from "./../../v-popup/index";
export default {
  name: "V-catalog-item",
  components: {
    vPopup
  },
  props: {
    productData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data () {
    return {
      isInfoPopupVisible: false,
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.productData);
    },
    addToCartFromPopup () {
      this.$emit("addToCart", this.productData);
      this.toggleItemInfo();
    },
    toggleItemInfo () {
     this.isInfoPopupVisible = !this.isInfoPopupVisible 
    }
  }
};
</script>
