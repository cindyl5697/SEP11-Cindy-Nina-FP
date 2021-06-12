const list = document.querySelector('#todo');

function toDo(text){
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
  
  // when trash icon is clicked, deletes task
  var allTrash = document.querySelectorAll('.gg-trash');
  allTrash.forEach(function(allTrash, trashIcon){
    allTrash.addEventListener("click",function(event){
      var remove = event.target.parentElement;
      remove.style.display = "none";
      
      db.collection("todolist").get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(remove);
        });
      });
    });
  });
  
  // when check icon is clicked, moves task to complete
  var allComplete = document.querySelectorAll('.gg-check-r');
  allComplete.forEach(function(allComplete, checkIcon){
    allComplete.addEventListener("click",function(event){
      document.querySelector('#complete').appendChild(event.target.parentElement);
      
      db.collection('todolist').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(complete);
        });
      });
    });
  });
  output.innerHTML += text;
  
  // resets input box when add is clicked
  document.getElementById('task').value = "";
  document.getElementById('due-date').value = "";
}

document.getElementById('add').addEventListener("click", function(){
  var text = "";
  text += document.querySelector('#task').value;
  var date = "   ";
  date += document.querySelector('#due-date').value;
  toDo(text + date);
  
  // setting into Firebase
  db.collection('todolist').add({
    input: text + date
  });
});

// grabbing Firebase
db.collection('todolist').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    console.log(doc.data());
    var text = doc.data().input;
    toDo(text);
    
    // allows the last task to be deleted
    var allTrash = document.querySelectorAll('.gg-trash');
    allTrash.forEach(function(allTrash, trashIcon){
      allTrash.addEventListener("click",function(event){
        var remove = event.target.parentElement;
        remove.style.display = "none";
        
        // deletes tasks in Firebase
        db.collection("todolist").get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            if (remove.textContent == doc.data().input){
              console.log(doc.data().input + " is removed");
              db.collection("todolist").doc(doc.id).delete();
            }
          });
        });
      });
    });
    
    // when check icon is clicked, moves task to complete
    var allComplete = document.querySelectorAll('.gg-check-r');
    allComplete.forEach(function(allComplete, checkIcon){
      allComplete.addEventListener("click",function(event){
        document.querySelector('#complete').appendChild(event.target.parentElement);
        
        // moves to complete, deletes task in Firebase
        db.collection('todolist').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            if (complete.textContent == doc.data().input){
              console.log(doc.data().input + " is completed");
              db.collection("todolist").doc(doc.id).delete();
            }
          });
        });
      });
    });
  });
});
