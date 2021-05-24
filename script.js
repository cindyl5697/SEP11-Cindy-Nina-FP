//adds tasks
document.getElementById('add').addEventListener("click",function(){
  var start = ""; 
  start += document.querySelector('#task').value;
    
  var output = document.createElement('div');
  output.innerHTML = start;

  //adds task to todo
  document.querySelector('#todo').appendChild(output);

  //when task is clicked, moves task to completed
  output.addEventListener("click", function(){
    document.querySelector('#complete').appendChild(output);
  });

  console.log(start);

});
// delete button 



//clears the task input box
document.getElementById('clear').addEventListener("click", function(){
  document.getElementById('task').value = "";
});

