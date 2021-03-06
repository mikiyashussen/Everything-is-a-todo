
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
            deleteBtn.id = "delete-" + i;

            let editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.id = "edit-" + i;

            // creating and attaching Toggle button to Li
            let toggleBtn = document.createElement("button");
            toggleBtn.innerText = "Toggle";   // Experiment the difference between innerText and innerHTML
            toggleBtn.id = "toggle-" + i;

            // add event listener
            deleteBtn.addEventListener('click', this.remove);
            toggleBtn.addEventListener('click', this.toggleCompleted);
            editBtn.addEventListener('click', this.editTodos);
            
            
            
            if(this.todos[i].completed === true){
                
                todoListLi.innerText = "[X] " + this.todos[i].todoText;
                
            }
            else{
                todoListLi.innerText = "[ ]" + this.todos[i].todoText;
                // todoListLi.appendChild(deleteBtn);
                // todoListLi.appendChild(toggleBtn);

            }
            todoListLi.append(toggleBtn);
            todoListLi.append(editBtn);
            todoListLi.append(deleteBtn);
            todoListUl.append(todoListLi);
        }
        
    },

    addTodos: function (todoText) {
        if(todoText !== ""){
                this.todos.push({
                todoText: todoText,
                completed: false // for toggle effect
            });
        }
        this.displayTodos();
    },

    remove: function(event){
        // Try it with accessing parentNOdes
        // debugger;
        let itemPosition = event.target.id.split("-")[1];
        todoObject.todos.splice(itemPosition, 1);
        // console.log(todoObject.todos[itemPosition]);...why didn't the this keyword work????
        todoObject.displayTodos();

    },
    
    toggleCompleted: function(event){
        
        let positionOfItemToToggle = event.target.id.split("-")[1];
        // let positionOfItemToToggle = event.target.id.slice(7);
        let todo = todoObject.todos[positionOfItemToToggle];
        todo.completed = !todo.completed;
        todoObject.displayTodos();
    },

    editTodos: function (event){
        // debugger;
        // let oldText = event.target.previousSibling.previousSibling;
        let newText = window.prompt("Enter New Text");
        if(newText !== "" && newText !== null){
            let position = event.target.id.split("-")[1];
            todoObject.todos[position].todoText = newText;
            todoObject.displayTodos();
        }
        

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
