<template>
    <div class="todo-list">
        <div v-if="todos && todos.length > 0">
            <todo-item v-for="(todo) in todos" :key="todo._id" :_id="todo._id"
                :title="todo.title"
                :description="todo.description"
            />
        </div>
        <div v-else>
            <div class="todo-item">
                <div class="todo-item__title">
                    No todos :(<br>
                    Lets create one :)
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TodoItem from '@/components/TodoItem';
    export default {
        components: {
            TodoItem
        },
        props: {
            todos: {
                required: true,
                type: Array,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .todo-list {
        flex: 1;
        overflow-y: auto;
        /* padding-bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center; */
        .todo-item {
            &__title {
                font-size: 18px;
                font-weight: bold;
            }
        }
    }
</style>