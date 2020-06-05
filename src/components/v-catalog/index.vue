<template>
    <div class="v-catalog">
      <h1 class="v-catalog__title">Catalog</h1>
        <div class="v-catalog__list">
            <vCatalogItem 
            v-for="product in products"
            :key="product.article"
            :productData="product"
            @sendArticle="showArticle"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import "./index.scss";
</style>

<script>
import vCatalogItem from "./../v-catalog-item/index";
export default {
    name: "V-catalog",
    components: {
        vCatalogItem
    },
    data() {
        return {
        products: [
          {
            image: "1.jpg",
            name: "T-shirt 1",
            price: 100,
            article: "T1",
            available: true,
            category: "Мужские"
          },
          {
            image: "2.jpg",
            name: "T-shirt 2",
            price: 150,
            article: "T2",
            available: true,
            category: "Женские"
          },
          {
            image: "3.jpg",
            name: "T-shirt 3",
            price: 200,
            article: "T3",
            available: false,
            category: "Женские"
          },
          {
            image: "4.jpg",
            name: "T-shirt 4",
            price: 500,
            article: "T4",
            available: true,
            category: "Мужские"
          },
          {
            image: "5.jpg",
            name: "T-shirt 5",
            price: 150,
            article: "T5",
            available: false,
            category: "Женские"
          },
          {
            image: "6.jpg",
            name: "T-shirt 6",
            price: 600,
            article: "T6",
            available: true,
            category: "Женские"
          }
        ]
      };
    },
    
    methods: {
        showArticle (data) {
          console.log(data)
        }
    },
    mounted() {
        
    },
};
</script>
