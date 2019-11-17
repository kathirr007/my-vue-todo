<template>
  <div id="app">
    <div class="todo-container">
      <TodoList :todos="todos" />
      <TodoCreate @formSubmitted="createTodo" />
    </div>
  </div>
</template>

<script>
  import TodoList from '@/components/TodoList'
  import TodoCreate from '@/components/TodoCreate'
  // import playground from './playground'

  import store from '@/store'

  export default {
    name: 'app',
    components: {
      TodoList,
      TodoCreate
    },
    data() {
      return {
        isActive: false,
        todos: store.state.todos
      }
    },
    methods: {
      /* openModal() {
        this.isActive = true;
      },
      closeModal() {
        this.isActive = false;
      }, */
      createTodo(todo) {
        store.createTodo(todo)
      }
    },
    created() {
      // playground()
    },
  }
</script>

<style lang="scss">
  $primary: #795899;
  $warning: #FF6F00;
  $danger: #b70a4a;

  /* @use "sass:color";

.app-btn {
  $primary-color: #6b717f;
  color: $primary-color;
  border: 1px solid color.scale($primary-color, $lightness: 20%);
} */

  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
  }

  #app {
    text-align: center;
    color: #2c3e50;
    // margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    height: 100vh;
  }

  .align-middle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 75%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    overflow: auto;
  }

  .todo-container {
    width: 75vw;
    min-height: 50vh;
    max-height: 75Vh;
    margin: 0 auto;
    overflow: hidden;
    /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
    background: #ededed;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  }

  .todo-create-btn-container {
    margin: 10px;
  }

  .form {
    .form-group {
      margin-bottom: 10px;

      &:last-child {
        margin: 0;
      }
    }

    .label {
      display: block;
      font-size: 16px;
      margin-bottom: 10px;
      font-weight: bold;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .app-btn {
    font-size: 20px;
    padding: 10px;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    border: none;
    font-size: 14px;

    &:hover {
      cursor: pointer;
    }
  }

  .form-control {
    display: block;
    width: 100%;
    // height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: #c1c1c1;
      outline: 0;
      box-shadow: 0 0 5px 0 rgba(64, 64, 64, .25);
    }
  }

  .is-primary {
    background-color: $primary;
  }

  .is-warning {
    background-color: $warning;
  }

  .is-danger {
    background-color: $danger;
  }
</style>