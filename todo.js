new Vue({
  el: "#app",
  data: {
    currentTodo: "",
    todos: [
      { text: "Learn vue", done: false },
      { text: "Learn Java", done: false },
      { text: "Play with friends", done: false }
    ]
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.currentTodo,
        done: false
      });
      this.currentTodo = "";
    },
    toggleTodo(todo) {
      todo.done = !todo.done;
    }
  }
});