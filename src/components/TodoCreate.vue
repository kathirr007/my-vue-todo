<template>
    <!-- <Modal ref="modal" :close="forceClose"> -->
    <Modal ref="modal">
        <form action="" @submit.prevent="submitForm" class="form create-todo-form">
            <div class="form-group">
                <label for="title" class="label">Title</label>
                <input class="form-control" type="text" id="title" v-model="form.title">
            </div>
            <div class="form-group">
                <label for="description" class="label">Description</label>
                <!-- <input class="form-control" type="text" id="description"> -->
                <textarea 
                    v-model="form.description" 
                    name="description" 
                    class="form-control" 
                    id="description" 
                    cols="30"
                    rows="10"
                >
                </textarea>
            </div>
            <div class="form-group">
                <div class="form-error">
                    {{formError}}
                </div>
            </div>
            <div class="form-group">
                <button type="submit" class="submit-todo" @click.prevent="submitForm">
                    Create Todo
                </button>
            </div>
        </form>
    </Modal>
</template>

<script>
    import Modal from '@/components/Modal'
    export default {
        components: {
            Modal
        },
        data() {
            return {
                form: {
                    title: '',
                    description: '',
                },
                // forceClose: false,
                formError: ''
            }
        },
        methods: {
            submitForm() {
                if(this.isFormValid) {
                    this.$emit('formSubmitted', {...this.form})
                    this.$refs.modal.close()
                    this.formError = ''

                    // this.forceClose = true
                    // this.$nextTick(() => this.forceClose = false)
                    this.resetForm()
                } else {
                    this.formError = 'Form Error! Title needs to be longer than 15 Characters and Description longer than 30 Characters'
                }
            },
            resetForm() {
                this.form.title= '',
                this.form.description= ''
            }
        },
        computed: {
            isFormValid() {
                return this.form.title.length > 15 && this.form.description.length > 30 ? true : false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .create-todo-form {
        text-align: left;
        &.inline-form {
            .label {
                margin: 0;
                margin-right: 10px;
            }
            .form-group {
                display: flex;
                align-items: center;                
            }
        }
    }

    .form-error {
        font-style: italic;
        color: red;
        font-size: 14px;
    }

    .submit-todo{
        background: #29858f;
        padding: 10px;
        text-align: center;
        color: #fff;
        border-radius: 4px;
        font-weight: bold;
        margin-top: 30px;
        border: none;
        &:hover {
            cursor: pointer;
        }
    }
</style>