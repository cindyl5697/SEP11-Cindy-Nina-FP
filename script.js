// adds tasks
document.getElementById('add').addEventListener("click",function(){
  var start = ""; 
  start += document.querySelector('#task').value;
    
  var output = document.createElement('p');

  // trash icon
  var trashIcon = document.createElement('span');
  output.appendChild(trashIcon);
  trashIcon.classList.add('gg-trash');

  // check icon
  var checkIcon = document.createElement('span');
  output.appendChild(checkIcon);
  checkIcon.classList.add('gg-check-r');

  // edit icon
  var editIcon = document.createElement('span');
  output.appendChild(editIcon);
  editIcon.classList.add('gg-backspace');

  output.innerHTML += start;
  
  console.log(start);

  // adds task to todo
  document.querySelector('#todo').appendChild(output);

  // when trash icon is clicked, deletes task
  var allTrash = document.querySelectorAll('.gg-trash');

  allTrash.forEach(function(allTrash, trashIcon){
    allTrash.addEventListener("click",function(event){
      console.log("delete");
      var remove = event.target.parentElement;
      remove.style.display = "none";
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

  // when edit icon is clicked, edit task
  var allEdit = document.querySelectorAll('.gg-backspace');

  allEdit.forEach(function(allEdit, editIcon){
    allEdit.addEventListener("click",function(){
      console.log("edit");
      document.querySelector('#todo').appendChild(output).contentEditable = true;
    });
  });

  // resets input box when add is clicked
  document.getElementById('task').value = "";
});

