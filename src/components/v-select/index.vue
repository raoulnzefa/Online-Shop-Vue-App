<template>
    <div class="v-select">
        <button 
        class="v-select__btn"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.value)"
        >
        {{option.name}}
        </button>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>


export default {
    name: 'V-select',
    props: {
        options: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return {
            
        };
    },
    
    methods: {
        selectOption (value) {
            this.$emit("selectOption", value);
        }
        
    },
    mounted() {
        
    },
};
</script>
