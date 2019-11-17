const store = {
    state: {
        todos: [{
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
    },
    createTodo(todo) {
        todo._id = Math.random().toString(36).substr(2,5)
        this.state.todos.push(todo)
    }
}

export default store;