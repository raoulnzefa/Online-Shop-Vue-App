<template>
    <div class="v-notification">
        <transition-group
        name="v-transition-animate"
        class="messages_list"
        >
            <div 
            class="v-notification__content"
            v-for="message in messages"
            :key="message.id"
            >
                <div class="content__text">
                    <span>{{message.text}}</span>
                    <i class="material-icons">check_circle</i>
                </div>
                <div class="content__buttons">
                    <button v-if="rightButton.length">{{rightButton}}</button>
                    <button v-if="leftButton.length">{{leftButton}}</button>
                </div>
            </div>
        </transition-group>
    </div>
</template>

<style lang="scss">
    @import './index.scss';
</style>

<script>


export default {
    name: 'V-notification',
    props: {
        messages: {
            type: Array,
            default () {
                return []
            }
        },
        rightButton: {
            type: String,
            default: ""
        },
        leftButton: {
            type: String,
            default: ""
        },
        timeout: {
            type: Number,
            default: 3000
        }
    }, 
    methods: {
        hideNotification () {
            if(this.messages.length) {
                setTimeout(()=> {
                this.messages.splice(this.messages[0],1)
                },this.timeout)
            }
        }
    },
    mounted () {
        this.hideNotification()
    },
    watch: {
        messages() {
            this.hideNotification()
        }
    }
};
</script>
