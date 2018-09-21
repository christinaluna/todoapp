var render = {};

render.init = function(){
  console.log("Render init");

  var $addTodoButton = $('#add-button');
  var $newTodoInput = $('#new-todo');
  var $containerElement = $('.container');

  $addTodoButton.click(render.onTodoSubmit);
  $newTodoInput.keyup(function(ev){
    if (ev.keyCode === 13) {
      render.onTodoSubmit();
    }
  });

  $containerElement.click(function(ev){

    if (ev.target.tagName === "BUTTON" && ev.target.className.indexOf("delete-button") !== -1 ) {
      render.deleteToDoItem(ev.target);
    }
  });
};

render.displayToDo = function(){
  var todoList = $('#todo-list');
  // var todoElement = document.createElement('ul');
  var $todoElement = $("<ul>");
  var $todoListItem;
  var $todoListItemDelete;
  todoList.html("");

  if (data.store == "" || data.store.length == 0) {
    return false;
  }

  for (var i = 0; i < data.store.length; i++) {
    // creates list items and options
    $todoListItem = $("<li>");
    $todoListItemDelete = $("<button id='delete-button' class='delete-button fa  fa-trash'>");
    $todoListItemDelete.attr("todoid", data.store[i].id);

    // Creates complete checkbox
    todoListItemComplete = document.createElement("input");
    todoListItemComplete.setAttribute("type", "checkbox");
    todoListItemComplete.checked = data.store[i].complete;
    render.addListItemCompleteHandler(todoListItemComplete, data.store[i].id, data.store[i].title);

    // Adds complete class to items
    $todoListItem.text(data.store[i].title);
    if (data.store[i].complete === true) {
      $todoListItem.addClass("todo-complete");
    }

    // Insert checkbox before todo title
    // if (todoListItem.firstChild) todoListItem.insertBefore(todoListItemComplete, todoListItem.firstChild);
    $todoElement.append($todoListItem);
    $todoListItem.append($todoListItemDelete);
  }

  $todoElement.appendTo(todoList);
};

render.onTodoSubmit = function(){
  var newTodoInputValue = $('#new-todo').val();
  var $emptyInputError = $('#input-error');
  newTodoInputValue = $.trim(newTodoInputValue);

  if (!newTodoInputValue == "") {
    $emptyInputError.css("display", "none");

    data.createToDo(Math.floor(Math.random() * 1000), newTodoInputValue, false);
    render.displayToDo();

  } else {
    $emptyInputError.css("display", "block");
  }
};

render.deleteToDoItem = function(item) {
  var idStr = $(item).attr("todoid");
  var id = parseInt(idStr);

  data.deleteToDo(id);
  render.displayToDo();
};

render.addListItemCompleteHandler = function(elem, id, title){
  elem.addEventListener("change", function(ev){
    data.updateToDo(id, title, ev.target.checked);
    render.displayToDo();
  });
}
