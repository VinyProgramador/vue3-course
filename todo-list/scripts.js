

const todosApp = {
    data() {
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.text) {
                this.todos.push(this.newTodo)
                this.newTodo = {
                    done: false
                };
                return;
            }
            return alert('Campo de tarefa vazio..');
        }
    }


}




Vue.createApp(todosApp).mount('#app');