<template>
    <div class="todo-list">
            <todo-item v-for="(todo,i) in todos" :key="i"
                :title="todo.title"
                :description="todo.description"
            />
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
        padding-bottom: 50px;
    }
</style>