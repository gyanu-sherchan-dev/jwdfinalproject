// TaskManager initialises
const taskManager = new TaskManager(0);
// console.log(taskManager);

const addForm = document.querySelector("#addForm");
// console.log(addForm);

addForm.addEventListener("submit", (edata) => {
    edata.preventDefault();
    console.log("insidevalidation");
  let names = document.querySelector("#name");
  let description = document.querySelector("#description");
  let assignedTo = document.querySelector("#assign");
  let statusD = document.querySelector("#inputState");
  let dueDate = document.querySelector("#date");
  let nameError = document.querySelector("#nameError");
  let descripError = document.querySelector("#descripError");
  let assignErr = document.querySelector("#assignErr");
  let statusErr = document.querySelector("#statusErr");
  let dateErr = document.querySelector("#dateErr");
  let valData = 0;

  console.log("Name :" + names.value.length);
  console.log("Description :" + description.value.length);
  console.log("Assigned To :" + assignedTo.value.length);
  console.log("Status:" + statusD.value);
  console.log("Due Date :" + dueDate.value);
  
  // Form validation for Task Name Field min length 5
  if (names.value.length < 3) {
   nameError.innerHTML='Name must be longer than 3 characters';
   nameError.style.color = "red";
  } else {
    nameError.innerHTML='all good';
    nameError.style.color = "green";
    valData++;
}


  // Form validation for Task Description Field min length 5
  if (description.value.length < 3) {
    descripError.innerHTML='Description must be longer than 3 characters';
    descripError.style.color = "red";
   } else {
     descripError.innerHTML='all good';
     descripError.style.color = "green";
     valData++;
 }


// Form validation for Task Assigned Field min length 5
if (assignedTo.value.length < 3) {
  assignErr.innerHTML = 'Task must be assigned';
    assignErr.style.color = 'red';
  } else {
     assignErr.innerHTML = 'all good';
     assignErr.style.color = 'green';
     valData++;
   }
   
  // Form validation for Due Date Field not empty
   // console.log(dueDate.value)
  if (dueDate.value === "yyyy/mm/dd") {
    dateErr.innerHTML ="Enter a valid date";
    dateErr.style.color = 'red';
  } else {
    dateErr.innerHTML ="all good";
    dateErr.style.color = 'green';
    valData++;
  }

//  console.log(valData);
// //   // ----------------------------------------------------------------------------------
  if (valData > 0) {
    valData = 0;
    console.log("validation successful");
    // here add a new task
    taskManager.addTask(
      names.value,
      description.value,
      assignedTo.value,
      statusD.value,
      dueDate.value,
    );
    // clear form fields();
    document.getElementById("addForm").reset();
    taskManager.render(); 
       
          }
      });


let cardStats = document.querySelector("#task-list");
// let done = document.getElementById("done");
cardStats.addEventListener("click", myCard);

function myCard(event) {
// console.log("my card function");
let myID = event.target.id;
console.log("Testing myID", myID);
const task = taskManager.getTaskById(myID);
console.log(task);
task.statusD = "Done";
// Render the tasks
taskManager.render();

// console.log(myID.parentNode.parentNode.parentNode.parentNode.id);

    // switch(stats) {
    //   case 0: 
    //   cardStats = 'To do';
    //   break;
    //   case 1:
    //   cardStats = 'Being reviewed';
    //   break;
    //   case 2: 
    //   cardStats = 'Still in progress';
    //   break;
    //   case 3: 
    //   cardStats = 'done';
    //   break;
    //   default:
    // } 
    // if(cardStats.value === done.statusD.value) {
    //   done.innerHTML = "done";
    
    // }
}

// var result = myCard(plum);
//   const target = event.target;
//   if(target.matches("click")) {
//    target.innerText = "Done";
//    target.background.color = "green"; 
//   }
//  let cardStats = done.value;
