<template>
    <div class="v-main-wrapper">
        <vCatalog />
        <vCart 
        v-if="CART.length"
        :cartData="CART"/>
    </div>
</template>

<script>
import vCatalog from "../v-catalog/index";
import vCart from "../v-cart/index";
import { mapGetters } from 'vuex';
export default {
    name: "v-main-wrapper",
    components: {
        vCatalog,
        vCart
    },
    props: {},
    data() {
        return {
            title: "Main wrapper"
        }
    },
    computed: {
        ...mapGetters([
            "CART"
        ])
    },
    methods: {},
    watch: {},
    mounted(){}
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
