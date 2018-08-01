window.TodoApp = {};

(function () {
  window.TodoApp.store = [];

  window.TodoApp.createToDo = function(id, title, complete) {
    var todoItem = {
      id: id,
      title: title,
      complete: complete
    }
    window.TodoApp.store.push(todoItem);
  };

  window.TodoApp.displayToDo = function() {
    var todoList = document.getElementById('todo-list');
    var todoElement = document.createElement('ul');

    if (window.TodoApp.store == "" || window.TodoApp.store.length == 0) {
      return false;
    }

    for (var i = 0; i < TodoApp.store.length; i++) {
      todoList.appendChild(todoElement);
      var todoListItem = document.createElement('li');
      todoListItem.innerText = TodoApp.store[i].title;
      todoElement.appendChild(todoListItem);
    }
  }

  window.TodoApp.readToDo = function(id) {
    var targetIndex;
    if (!id) {
      return TodoApp.store;
    } else {
      for (var i = 0; i < TodoApp.store.length; i++) {
        if (TodoApp.store[i].id === id) {
          targetIndex = i;
          break;
        }
      }
      if (targetIndex > -1) {
        return TodoApp.store[targetIndex];
      }
    }
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
