
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
            const todoListLi = document.createElement("li");
            todoListLi.innerText = this.todos[i].todoText;
            
            // Creating and attaching Delete button to Li
            let deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.setAttribute("id", i);

            // creating and attaching Toggle button to Li
            let toggleBtn = document.createElement("button");
            toggleBtn.innerText = "Toggle";   // Experiment the difference between innerText and innerHTML
            toggleBtn.setAttribute("id", i);

            // add event listener
            deleteBtn.addEventListener('click', this.remove);
            toggleBtn.addEventListener('click', this.toggleCompleted);
            
            
            if(this.todos[i].completed === true){
                todoListLi.innerText = "[X] " + this.todos[i].todoText;
                todoListLi.appendChild(deleteBtn);
                todoListLi.appendChild(toggleBtn);
            }
            else{
                todoListLi.innerText = "[ ]" + this.todos[i].todoText;
                todoListLi.appendChild(deleteBtn);
                todoListLi.appendChild(toggleBtn);

            }
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

    remove: function(event){
        // Try it with accessing parentNOdes
        // debugger;
        let itemPosition = parseInt(event.target.id);
        todoObject.todos.splice(itemPosition, 1);
        // console.log(todoObject.todos[itemPosition]);...why didn't the this keyword work????
        todoObject.displayTodos();

    },
    // deleteTodos: function (itemPosition){
        
    //     this.todos.splice(itemPosition, 1);
    //     this.displayTodos();

    // },

    toggleCompleted: function(event){
        let positionOfItemToToggle = parseInt(event.target.id);
        var todo = todoObject.todos[positionOfItemToToggle];
        todo.completed = !todo.completed;
        todoObject.displayTodos();
    },

    //  toggleCompleted: function (positionOfItemToToggle) {
    //     var todo = this.todos[positionOfItemToToggle]; 
    //     todo.completed = !todo.completed;
    //     // console.log(todo);
    //     this.displayTodos();
        
    // },

    editTodos: function (positioOfItemToEdit, text){
        this.todos[positioOfItemToEdit].todoText = text;
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

// Display todos on DOM when opening the app for the first time;
todoObject.displayTodos();


let handlers = {

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
}
