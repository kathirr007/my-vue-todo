import Vue from 'vue';
const INITIAL_DATA = {
  todos: [
    {
      _id: '1',
      title: 'Make Food',
      description: 'Go to home and make good food'
    },
    {
      _id: '2',
      title: 'Read Book',
      description: 'Go to library and read good food'
    },
    {
      _id: '3',
      title: 'Play Cricket',
      description: 'Go to Playground and Play cricket'
    },
  ]
}

const store = {
    state: {
        todos: []
    },
    actions: {
      initStore(state) {
        const localTodos = localStorage.getItem('my_todos')
        if(!localTodos) {
          Vue.set(state, 'todos', INITIAL_DATA.todos)
        } else {
          Vue.set(state, 'todos', JSON.parse(localTodos))
        }
        return state.todos
      },
      createTodo(state, todo) {
          todo._id = Math.random().toString(36).substr(2,5)
          state.todos.push(todo)
          return state.todos
          // localStorage.setItem('my_todos', JSON.stringify(state.todos))
          // persistData(state.todos)
      },
      updateTodo(state, todoToUpdate) {
        const index = state.todos.findIndex((todo) => {
          // debugger
          return todo._id === todoToUpdate._id
        })
        // debugger
        Vue.set(state.todos, index, todoToUpdate)
        return state.todos
        // localStorage.setItem('my_todos', JSON.stringify(state.todos))
        // persistData(state.todos)
        // state.todos[index] = todoToUpdate
      },
      deleteTodo(state, todoId) {
        const index = state.todos.findIndex((todo) => {
          // debugger
          return todo._id === todoId._id
        })
        // debugger
        // Vue.set(state.todos, index, todoToUpdate)
        state.todos.splice(index, 1)
        return state.todos
        // localStorage.setItem('my_todos', JSON.stringify(state.todos))
        // persistData(state.todos)
      },
    },
}

function persistData(value) {
  const stringifiedValue = JSON.stringify(value)
  localStorage.setItem('my_todos', stringifiedValue)
}

store.dispatch = function(action, payload) {
  if(!this.actions[action]) {
    throw new Error(`Action ${action} is not defined in Store`)
  }
  const result = this.actions[action](this.state, payload)
  if(!result) return
  persistData(result)
  return result
}

export default store;