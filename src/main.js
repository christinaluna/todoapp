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
    // Newly created todo item
    var todoItem = {
      id: id,
      title: title,
      complete: complete
    }
    window.TodoApp.store.push(todoItem);
    return todoItem;
  };

  window.TodoApp.readToDo = function() {
    return TodoApp.store;
  };

  window.TodoApp.updateToDo = function(id, title, complete) {
    console.log("Inside Update");
     // Give update todo item
  };

  window.TodoApp.deleteToDo = function(id) {
    // Nothing
    // for (var i = 0; i < TodoApp.store.length; i++) {
    //   if (TodoApp.store[i][key] === value) {
    //     return TodoApp.store[i];
    //   }
    // };
    // return null;
  };

})()
