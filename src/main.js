window.TodoApp = {};

(function () {
  var render = {};

  // Renders to do items on page
  render.displayToDo = function() {
    var todoList = document.getElementById('todo-list');
    var todoElement = document.createElement('ul');
    var todoListItem;
    var todoListItemDelete;
    todoList.innerHTML = "";

    if (data.store == "" || data.store.length == 0) {
      return false;
    }

    for (var i = 0; i < data.store.length; i++) {
      todoListItem = document.createElement('li');
      todoListItemDelete = document.createElement('button');
      todoListItemDelete.setAttribute("id", "delete-button");
      todoListItemDelete.setAttribute("class", "delete-button fa  fa-trash");

      todoListItem.innerText = data.store[i].title;
      todoElement.appendChild(todoListItem);
      todoListItem.appendChild(todoListItemDelete);
    }
    todoList.appendChild(todoElement);
  }

  // window.TodoApp.onRefreshButtonClick = function(){
  //     render.displayToDo();
  // };

  window.TodoApp.onAddButtonClick = function(){
    var newTodo = document.getElementById('new-todo').value;

    data.createToDo(123, newTodo, false);
    render.displayToDo();
  };

  window.TodoApp.render = render;

  var data = {};
  data.store = [];

  // Created new to do items
  data.createToDo = function(id, title, complete) {
    var todoItem = {
      id: id,
      title: title,
      complete: complete
    }
    data.store.push(todoItem);
  };

  // Reads items in to do list
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

  // Updates to do item
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

  // Deletes to do item
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
  // var refreshButton = document.getElementById('refresh-button');
  var addButton = document.getElementById('add-button');

  // refreshButton.addEventListener('click', window.TodoApp.onRefreshButtonClick);
  addButton.addEventListener('click', window.TodoApp.onAddButtonClick);

})()
