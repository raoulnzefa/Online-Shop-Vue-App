<template>
    <div class="v-main-wrapper">
        {{ title }}
        <vCatalog />
        <vCart />
    </div>
</template>

<script>
import vCatalog from "../v-catalog/index";
import vCart from "../v-cart/index";
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
    computed: {},
    methods: {},
    watch: {},
    mounted(){}
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
