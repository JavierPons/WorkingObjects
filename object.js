// Code goes here

var todosList = {
  todos: [],
  displayTodos: function(){
    if(this.todos.length === 0) {
      console.log('Your array is empty');
    } else {
    
    console.log('My todos: ');
    for(var i = 0; i < this.todos.length; i++){
     
      if(this.todos[i].completed === true){
         console.log('(X)',this.todos[i].todoText);
      } else {
         console.log('( )',this.todos[i].todoText);
      }
    }
  }
  
},
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodos: function(position, todoText){
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    debugger;
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    for(var i = 0; i < totalTodos; i++) {
        if(this.todos[i].completed === true) {
          completedTodos++;
        }
      
    }
    // Case 1: if everything is true make all false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = false;
     }
      // Case 2: if everything is false make true.
    } else {
       for (var i = 0; i < totalTodos; i++) {
      this.todos[i].completed = true;
     }
     
    }
    this.displayTodos();
  }
  
};
// access to display todos button.

var displayTodosButton = document.getElementById('displayTodosButton');
// displayTodos method when button is clicked.

displayTodosButton.addEventListener('click', function() {
    todosList.displayTodos();  
});

var displayToggleAllButton = document.getElementById('displayToggleAllButton');
console.log(displayToggleAllButton);

displayToggleAllButton.addEventListener('click', function() {
  todosList.toggleAll();
});

