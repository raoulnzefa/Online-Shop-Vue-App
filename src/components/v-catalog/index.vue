<template>
    <div class="v-catalog">
        Catalog
        <vCatalogItem />
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
            
        };
    },
    
    methods: {
        
    },
    mounted() {
        
    },
};
</script>
