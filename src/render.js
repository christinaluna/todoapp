var render = {};

render.init = function(){
  console.log("Render init");
  var addTodoButton = document.getElementById('add-button');
  var newTodoInputValue = document.getElementById('new-todo');
  var containerElement = document.getElementsByClassName('container')[0];

  addTodoButton.addEventListener('click', render.onTodoSubmit);
  newTodoInputValue.addEventListener('keyup', function(ev){
    if (ev.keyCode === 13) {
      render.onTodoSubmit();
    }
  });

  containerElement.addEventListener('click', function(ev){
    if (ev.target.tagName === "BUTTON" && ev.target.className.indexOf("delete-button") !== -1 ) {
      render.deleteToDoItem(ev.target);
    }
  });
};

var

render.displayToDo = function(){
  var todoList = document.getElementById('todo-list');
  var todoElement = document.createElement('ul');
  var todoListItem;
  var todoListItemDelete;
  todoList.innerHTML = "";

  if (data.store == "" || data.store.length == 0) {
    return false;
  }

  for (var i = 0; i < data.store.length; i++) {
    // creates list items and options
    todoListItem = document.createElement('li');
    todoListItemDelete = document.createElement('button');
    todoListItemDelete.setAttribute("id", "delete-button");
    todoListItemDelete.setAttribute("class", "delete-button fa  fa-trash");
    todoListItemDelete.setAttribute("todoid", data.store[i].id);

    // Creates complete checkbox
    todoListItemComplete = document.createElement("input");
    todoListItemComplete.setAttribute("type", "checkbox");
    todoListItemComplete.checked = data.store[i].complete;
    render.addListItemCompleteHandler(todoListItemComplete, data.store[i].id, data.store[i].title);

    // Adds complete class to items
    todoListItem.innerText = data.store[i].title;
    if (data.store[i].complete === true) {
      todoListItem.className += "todo-complete";
    }

    // Insert checkbox before todo title
    if (todoListItem.firstChild) todoListItem.insertBefore(todoListItemComplete, todoListItem.firstChild);
    todoElement.appendChild(todoListItem);
    todoListItem.appendChild(todoListItemDelete);

  }
  todoList.appendChild(todoElement);
};

render.onTodoSubmit = function(){
  var newTodoInputValue = document.getElementById('new-todo').value;
  var emptyInputError = document.getElementById('input-error');
  newTodoInputValue = newTodoInputValue.trim();

  if (!newTodoInputValue == "") {
    emptyInputError.style.display = "none";

    data.createToDo(Math.floor(Math.random() * 1000), newTodoInputValue, false);
    render.displayToDo();

  } else {
    emptyInputError.style.display = "block";
  }
};

render.deleteToDoItem = function(item) {
  var idStr = item.getAttribute("todoid");
  var id = parseInt(idStr);

  data.deleteToDo(id);
  render.displayToDo();
};


// To look into more
render.addListItemCompleteHandler = function(elem, id, title){
  elem.addEventListener("change", function(ev){
    console.log("todoid", id);
    console.log("UI thinks it's", ev.target.checked, ev.target);
    data.updateToDo(id, title, ev.target.checked);
    render.displayToDo();
  });
}

// HW create render jQuery and use instead of render.js
// Recreate renderDisplayTodo in jQuery
// If messing with eventHandlers it's too much
