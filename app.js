
//..........................version 3 .........................//
let todoObject = {
    todos: [
        {todoText: "item 1", completed: false},
        {todoText: "item 2", completed: false},
        {todoText: "item 3", completed: false}
    ],

    displayTodos: function () {
        
        let todoListUl = document.getElementById("todo-list-ul");
        todoListUl.innerHTML = "";

        for (var i = 0; i < this.todos.length; i++){
            let todoListLi = document.createElement("li");
            todoListLi.innerText = this.todos[i].todoText;
            todoListUl.append(todoListLi);
        }
        
    },

    addTodos: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false // for toggle effect
        });
        
        this.displayTodos();
    },

    deleteTodos: function (itemPosition){

        this.todos.splice(itemPosition, 1);
        this.displayTodos();

    },

    editTodos: function (positioOfItemToEdit, text){
        this.todos[positioOfItemToEdit].todoText = text;
        this.displayTodos();

    },

    toggleCompleted: function (positionOfItemToToggle) {
        var todo = this.todos[positionOfItemToToggle]; 
        todo.completed = !todo.completed;
        // console.log(todo);
        this.displayTodos();
        
    },

    toggleAll: function (){
        let totalTodos = this.todos.length;
        let completedTodos = 0;
    // access all todos and check completed poperty
        for(let i=0; i<totalTodos; i++){
            if(this.todos[i].completed === true){
                completedTodos++;
            }
        }
    // if everything is true, make everything false
        if (completedTodos === totalTodos) {
            for (let i = 0; i < totalTodos; i++) {
            this.todos[i].completed = false;
            }
        }
    //otherwise, make eveything true
        else {
            for (let i = 0; i < totalTodos; i++) {
            this.todos[i].completed = true;
            }
        }

        this.displayTodos();
    }
}



let handlers = {
    displayTodos: function(){
        todoObject.displayTodos();
    },

    toggleAll: function(){
        todoObject.toggleAll();
    },

    addTodos: function(){
        let addTodoTextInput = document.getElementById("addTodoTextInput");
        todoObject.addTodos(addTodoTextInput.value);    
        addTodoTextInput.value = ''; 
    },

    editTodos: function(){
        let editTextPosition = document.getElementById("edit-position-input");
        let newText = document.getElementById("edit-text-input");
        todoObject.editTodos(editTextPosition.value, newText.value);

    },

    deleteTodos: function(){
        let deleteTextPosition = document.getElementById("delete-item-position");
        todoObject.deleteTodos(deleteTextPosition.value);
    },

    toggleCompleted: function(){
        let toggleTextPosition = document.getElementById("toggle-item-position");
        todoObject.toggleCompleted(toggleTextPosition.value);
    }
}
