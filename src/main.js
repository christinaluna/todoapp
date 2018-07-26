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
  };

  window.TodoApp.readToDo = function() {
    return TodoApp.store;
  };

  window.TodoApp.updateToDo = function(id, title, complete) {
    var targetIndex;
    for (var i = 0; i < TodoApp.store.length; i++) {
      if (TodoApp.store[i].id === id) {
        targetIndex = i;
        break;
      }
    };
    if (targetIndex > -1) {
        TodoApp.store[targetIndex].title = title;
        TodoApp.store[targetIndex].complete = complete;
    } else {
      console.log("Item does not exist");
    }
  };

  window.TodoApp.deleteToDo = function(id) {
    var targetIndex;
    for (var i = 0; i < TodoApp.store.length; i++) {
      if (TodoApp.store[i].id === id) {
        targetIndex = i;
        break;
      }
    };
    if (targetIndex > -1) {
      TodoApp.store.splice(targetIndex, 1);
    }
  };

})()
