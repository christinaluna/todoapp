window.TodoApp = {};

(function () {
  window.TodoApp.store = [];

  /*
    Sample Todo Item
    {
      id: 12345,
      title: "Title here",
      complete: false
    }
  */

  window.TodoApp.createToDo = function(id, title, complete) {
    console.log("Inside Create");
    // Newly created todo item
  };

  window.TodoApp.readToDo = function() {
    console.log("Inside Read");
    // Give all todo items
  };

  window.TodoApp.updateToDo = function(id, title, complete) {
    console.log("Inside Update");
     // Give update todo item
  };

  window.TodoApp.deleteToDo = function(id) {
    console.log("Inside Delete");
    // Nothing
  };

})()
