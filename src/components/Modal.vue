<template>
    <div>
        <div class="todo-create-btn-container">
            <div class="app-btn is-primary" @click="isActive = !isActive">
                Create
            </div>
        </div>
        <div class="modal" :class="{'is-active': isActive}">
            <transition name="fade">
                <div class="modal-content">
                    <span class="close" @click="close">&times;</span>
                    <slot />
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
// import TodoCreate from '@/components/TodoCreate'
    export default {
        /* props: {
            close: {
                type: Boolean,
                required: false
            }
        }, */
        data() {
            return {
                isActive: false,
            }
        },
        watch: {
            close(isClose, preIsClose) {
                if(isClose && this.isActive)
                this.isActive = false
            }
        },
        components: {
            // TodoCreate
        },
        methods: {
            close() {
                this.isActive = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .modal {
        display: none;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);

        .modal-content {
            position: relative;
            background: #fff;
            border-radius: 4px;
            width: 75%;
            padding: 20px;
            box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.5);
            margin: 20px auto;
        }

        &.is-active {
            display: block;
        }

        .close {
            position: absolute;
            color: #aaa;
            right: 10px;
            top: 10px;
            font-size: 28px;
            transition: all .25s ease-in;
            line-height: 1rem;

            &:hover {
                cursor: pointer;
                color: #0e0c0c;
            }
        }
    }


    .fade-enter {
        opacity: 0;
    }

    .fade-leave-active {
        opacity: 0;
    }

    .fade-enter .modal-content,
    .fade-leave-active .modal-content {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>