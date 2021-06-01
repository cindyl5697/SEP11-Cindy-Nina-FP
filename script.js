const list = document.querySelector('#todo');

function toDo(){
  var output = document.createElement('p');
  
  // adds task to todo
  document.querySelector('#todo').appendChild(output);
  
  // check icon
  var checkIcon = document.createElement('span');
  output.appendChild(checkIcon);
  checkIcon.classList.add('gg-check-r');
    
  // trash icon
  var trashIcon = document.createElement('span');
  output.appendChild(trashIcon);
  trashIcon.classList.add('gg-trash');
  
  // edit icon
  var editIcon = document.createElement('span');
  output.appendChild(editIcon);
  editIcon.classList.add('gg-pen');
  
  // when trash icon is clicked, deletes task
  var allTrash = document.querySelectorAll('.gg-trash');
  
  allTrash.forEach(function(allTrash, trashIcon){
    allTrash.addEventListener("click",function(event){
      console.log("delete");
      var remove = event.target.parentElement;
      remove.style.display = "none";
    });
  });
  
  // when edit icon is clicked, edit task
  var allEdit = document.querySelectorAll('.gg-pen');
  
  allEdit.forEach(function(allEdit, editIcon){
    allEdit.addEventListener("click",function(){
      console.log("edit");
      document.querySelector('#todo').appendChild(output).contentEditable = true;
    });
  });
    
  // when check icon is clicked, moves task to complete
  var allComplete = document.querySelectorAll('.gg-check-r');
  
  allComplete.forEach(function(allComplete, checkIcon){
    allComplete.addEventListener("click",function(){
      console.log("complete");
      document.querySelector('#complete').appendChild(output);
    });
  });
  output.innerHTML += text;

  // resets input box when add is clicked
  document.getElementById('task').value = "";
}

document.getElementById('add').addEventListener("click", function(){
  var text = "";
  text += document.querySelector('#task').value;
  toDo(text);
  
  // setting into Firebase
  db.collection('todolist').add({
    input: text
  });
});

// grabbing Firebase
db.collection('todolist').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    var text = doc.data().input;
    test(text);
  });
});