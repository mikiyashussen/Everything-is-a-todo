
//..................version 1.........................//


// adding to-do's
// var toDoList = [];
// var answer;

// if the user enters quit on the first try

// quit should not be stored as a todo.
// do{

//     // adding
//     answer = prompt("Enter a to-do:");
    
//     // storing
//     if(answer === 'quit'){
//         break;
//     }
//     toDoList.push(answer);

//     // displaying
//     // console.log(toDoList);
// }while(answer != "quit");

//deleting
// var deleteToDo = parseInt(prompt("Enter index of element you want to delete:"), 10);

// toDoList.splice(deleteToDo, 1);
// console.log(toDoList);


//editing

// var edit = parseInt(prompt("Enter index of element to edit"), 10);
// var text = prompt("Enter the text");
// toDoList[edit] = text;
// // console.log(toDoList);


// /*...............Version 2................*/


// // adding function
// function addTodo() {
//     answer = prompt("Enter a to-do:");
//     while(answer != 'quit'){
//         toDoList.push(answer);
//         answer = prompt("Enter a to-do:");
        
//     }
// }
// // display function
// function displayTodo(){
//     console.log(toDoList);
// }

// //delete function
// function deleteTodo(item) {
//     if(toDoList.includes(item)){
//         toDoList.splice(indexOf(item),1);
//     }
//     else{
//         console.log("the item doesn't exist");
//     }
// }

// function editTodo(){
//     console.log("hi");
// }



// let operation = parseInt(prompt("1.add, 2.display, 3.delete, 4.edit"), 10);

// if(operation == 1){
//     addTodo();
//     displayTodo();
// }else if(operation == 2) {
//     displayTodo();
// }else if(operation == 3){
//     let itemToDelete = prompt("which item do you want to delete?");
//     deleteTodo(itemToDelete);
// }else if(operation == 4){
//     editTodo();
// }else{
//     alert("incorrect entry!");
// }

//..........................version 3 .........................//
let todoObject = {
    todos: [],

    displayTodos: function () {
        if(this.todos.length === 0){
            console.log("Your todo is empty");
        }
        else{
            for (var i = 0; i < this.todos.length; i++) {
                // check for completed
                if (this.todos[i].completed === true) {
                    console.log("(X)", this.todos[i].todoText);
                }
                else {
                    console.log("( )", this.todos[i].todoText);
                }
            }
        }
    },

    addTodos: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false // for toggle effect
        });
        this.displayTodos();
    },

    deleteTodos: function (item){
        this.todos.splice(item, 1);
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
    }
}