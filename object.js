// Code goes here

var todosList = {
  todos: [],
//  displayTodos: function(){
//    if(this.todos.length === 0) {
//      console.log('Your array is empty');
//    } else {
    
//    console.log('My todos: ');
//    for(var i = 0; i < this.todos.length; i++){
     
//      if(this.todos[i].completed === true){
//         console.log('(X)',this.todos[i].todoText);
//      } else {
//         console.log('( )',this.todos[i].todoText);      (  display in console   )
//      }
//    }
//  }
  
//},
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  //  this.displayTodos();
   
  },
  changeTodos: function(position, todoText){
    this.todos[position].todoText = todoText;
  //  this.displayTodos();
  },
  deleteTodos: function(position){
    this.todos.splice(position, 1);
   // this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  //  this.displayTodos();
  },
  toggleAll: function() {
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
    //this.displayTodos();
  }
  
};
var handlers = {
  addTodo: function() {
   var addTodoTextInput =  document.getElementById('addTodoTextInput');
   todosList.addTodo(addTodoTextInput.value); 
   addTodoTextInput.value = '';
    view.displayTodos();
    },
  changeTodo: function() {
    var changeInputPosition = document.getElementById('changeTodoPositionInput');
    var changeInputText = document.getElementById('changeTodoTextInput');
   
    todosList.changeTodos(changeInputPosition.valueAsNumber, changeInputText.value);
    changeInputPosition.value = '';
    changeInputText.value = '';
     view.displayTodos();
     
  },
  deleteTodo: function() {
      var deleteTodoInput = document.getElementById('deleteTodoInput');
      todosList.deleteTodos(deleteTodoInput.valueAsNumber);
      deleteTodoInput.value = '';
       view.displayTodos();
     
  },
  toggleCompleted: function() {
    var toggleCompletedInput = document.getElementById('toggleCompletedInput');
    todosList.toggleCompleted(toggleCompletedInput.valueAsNumber);
    toggleCompletedInput.value = '';
     view.displayTodos();
    
  },
  toggleAll: function() {
    todosList.toggleAll();
     view.displayTodos();
  },
  
};

var view = { 
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';
    for(var i = 0; i < todosList.todos.length; i++){
      
      var todoLi = document.createElement('li');
      var todo = todosList.todos[i];
      
       var todoTextWithCompletion = '';
       
       if(todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
        
      }
      
        todoLi.textContent = todoTextWithCompletion;  
        todosUl.appendChild(todoLi);
    }
  }
  
};


