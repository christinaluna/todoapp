var data = {};
data.store = [];

data.init = function(){
  console.log("Data init");
};

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
