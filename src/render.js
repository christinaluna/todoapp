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
    todoListItem = document.createElement('li');
    todoListItemDelete = document.createElement('button');
    todoListItemDelete.setAttribute("id", "delete-button");
    todoListItemDelete.setAttribute("class", "delete-button fa  fa-trash");
    todoListItemDelete.setAttribute("todoid", data.store[i].id);

    todoListItem.innerText = data.store[i].title;
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
