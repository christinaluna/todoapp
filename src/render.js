var render = {};

render.init = function(){
  console.log("Render init");
  var addButton = document.getElementById('add-button');
  var newTodoInputValue = document.getElementById('new-todo');

  addButton.addEventListener('click', render.onTodoSubmit);
  newTodoInputValue.addEventListener('change', render.onTodoSubmit);

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

render.onTodoSubmit = function(){
  var newTodoInputValue = document.getElementById('new-todo').value;

  // On Button Click
  data.createToDo(123, newTodoInputValue, false);
  render.displayToDo();

  // On Enter
  event.preventDefault();
  if (event.keyCode === 13) {
    data.createToDo(123, newTodoInputValue, false);
    render.displayToDo();
  }
};
