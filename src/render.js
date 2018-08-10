var render = {};

render.init = function(){
  console.log("Render init");
  var addButton = document.getElementById('add-button');

  addButton.addEventListener('click', render.onAddButtonClick);
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

    todoListItem.innerText = data.store[i].title;
    todoElement.appendChild(todoListItem);
    todoListItem.appendChild(todoListItemDelete);
  }
  todoList.appendChild(todoElement);
};

render.onAddButtonClick = function(){
  var newTodoInputValue = document.getElementById('new-todo').value;

  data.createToDo(123, newTodoInputValue, false);
  render.displayToDo();
};
