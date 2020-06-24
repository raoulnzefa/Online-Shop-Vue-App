<template>
   <div 
   class="popup-wrapper" 
   ref="popup_wrapper"
   >
        <div 
        class="v-popup">
            <div class="v-popup__header">
                <span>Product details</span>
                <i 
                class="material-icons"
                @click="closeModal">close</i>
            </div>
            <div class="v-popup__content">
                <slot></slot>
            </div>
            <div class="v-popup__footer">
                <button 
                class="close-modal"
                @click="closeModal"
                >
                Close
                </button>
                <button 
                class="submit_btn"
                @click="addToCart"
                >
                Add to cart
                </button>
            </div>
        </div>
   </div>
</template>

<style lang="scss">
    @import "./index.scss";
</style>

<script>


export default {
    name: 'V-popup',
    data() {
        return {
            
        };
    },
    
    methods: {
        closeModal () {
            this.$emit("closeModal");
        },
        addToCart () {
            this.$emit("addToCart");
        }
    },
    mounted() {
        document.addEventListener("click", (event)=> {
            if (event.target === this.$refs["popup_wrapper"]) {
                this.closeModal()
            }
        })
    },
};
</script>
