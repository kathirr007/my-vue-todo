<template>
    <div class="todo-item" v-if="!editMode">
        <div class="todo-item__title">
            {{title}}
        </div>
        <div class="todo-item__description">
            {{description}}
        </div>
        <button @click="editMode = true" class="app-btn is-warning">Edit</button>
        <button @click="deleteTodo" class="app-btn is-danger">Delete</button>
    </div>
    <div v-else class="todo-item">
        <form action="" @submit.prevent="submitForm" class="form create-todo-form">
            <div class="form-group">
                <label for="title" class="label">Title</label>
                <input v-model="todo.title" class="form-control" type="text">
            </div>
            <div class="form-group">
                <label for="description" class="label">Description</label>
                <!-- <input class="form-control" type="text" id="description"> -->
                <textarea v-model="todo.description" name="description" class="form-control" cols="30" rows="5">
                </textarea>
            </div>
            <button @click.prevent="editTodo" class="app-btn is-warning">Update</button>
            <button @click.prevent="editMode = false" class="app-btn is-danger">Cancel</button>
            <!-- <div class="form-group">
                <div class="form-error">
                    {{formError}}
                </div>
            </div> -->
        </form>
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        // props: ['title', 'description'],
        props: {
            title: {
                type: String,
                required: true,
                default: 'Default Title'
            },
            description: {
                type: String, 
                required: false,
                default: 'Default Description'
            },
            _id: {
                type: String,
                required: true
            }
        },
        // Array, String, Object, Function, Boolean, Undefined, Null
        data() {
            return {
                editMode: false,
                todo: {
                    title: this.title,
                    description: this.description,
                    _id: this._id
                }
            }
        },
        methods: {
            editTodo() {
                store.dispatch('updateTodo', {...this.todo})
                this.editMode = false
            },
            deleteTodo() {
                store.dispatch('deleteTodo', this.todo._id)
                this.editMode = false
            },
        }
    }
</script>

<style lang="scss" scoped>
  .todo-item {
    background-color: gray;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    margin: 10px;
    text-align: left;
    &__title {
      font-size: 18px;
      font-weight: bold;
    }
    &__description {
      font-size: 16px;
      word-break: break-all;
    }
    .app-btn {
        margin: 10px 10px 0 0;
        &:last-child {
            margin-right: 0;
        }
    }
  }
</style>