window.TodoApp = {};

(function () {
  var render = {};

  render.displayToDo = function() {
    var todoList = document.getElementById('todo-list');
    var todoElement = document.createElement('ul');
    var todoListItem;
    todoList.innerHTML = "";

    if (data.store == "" || data.store.length == 0) {
      return false;
    }

    for (var i = 0; i < data.store.length; i++) {
      todoListItem = document.createElement('li');
      todoListItem.innerText = data.store[i].title;
      todoElement.appendChild(todoListItem);
    }
    todoList.appendChild(todoElement);
  }

  window.TodoApp.onButtonClick = function(){
      render.displayToDo();
  };

  window.TodoApp.render = render;

  var data = {};
  data.store = [];

  data.createToDo = function(id, title, complete) {
    var todoItem = {
      id: id,
      title: title,
      complete: complete
    }
    data.store.push(todoItem);
  };

  data.readToDo = function(id) {
    var targetIndex;
    if (!id) {
      return data.store;
    } else {
      for (var i = 0; i < data.store.length; i++) {
        if (data.store[i].id === id) {
          targetIndex = i;
          break;
        }
      }
      if (targetIndex > -1) {
        return data.store[targetIndex];
      }
    }
  };

  data.updateToDo = function(id, title, complete) {
    var targetIndex;
    for (var i = 0; i < data.store.length; i++) {
      if (data.store[i].id === id) {
        targetIndex = i;
        break;
      }
    };
    if (targetIndex > -1) {
        data.store[targetIndex].title = title;
        data.store[targetIndex].complete = complete;
    }
  };

  data.deleteToDo = function(id) {
    var targetIndex;
    for (var i = 0; i < data.store.length; i++) {
      if (data.store[i].id === id) {
        targetIndex = i;
        break;
      }
    };
    if (targetIndex > -1) {
      data.store.splice(targetIndex, 1);
    }
  };

  window.TodoApp.data = data;

})();


(function () {
  var myButton = document.getElementById('button');

  myButton.addEventListener('click', window.TodoApp.onButtonClick);

})()
