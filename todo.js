new Vue({
  el: "#app",
  data: {
    currentTodo: "",
    todos: [
      { text: "Learn vue", done: false },
      { text: "Learn Java", done: false },
      { text: "Play with friends", done: true }
    ]
  },
  methods: {
    addTodo() {
      this.todos.push({
        text: this.currentTodo,
        done: false
      });
      this.currentTodo = "";
    }
  }
});