
const addForm = document.querySelector("#addForm");
console.log(addForm);

addForm.addEventListener("submit", (edata) => {
    edata.preventDefault();
    console.log("insidevalidation");
  let names = document.querySelector("#name");
  let description = document.querySelector("#description");
  let assignedTo = document.querySelector("#assign");
  let dueDate = document.querySelector("#date");
  let statusD = document.querySelector("#inputState");
  let nameError = document.querySelector("#nameError");
  let descripError = document.querySelector("#descripError");
  let assignErr = document.querySelector("#assignErr");
  let statusErr = document.querySelector("#statusErr");
  let dateErr = document.querySelector("#dateErr");
//   let valData = 0;

  console.log("Name :" + names.value.length);
  console.log("Description :" + description.value.length);
  console.log("Assigned To :" + assignedTo.value.length);
  console.log("Due Date :" + dueDate.value);
  console.log("Status:" + statusD.value);

  // Form validation for Task Name Field min length 5
  if (names.value.length < 3) {
   nameError.innerHTML='Name must be longer than 3 characters';
   nameError.style.color = "red";
  } else {
    nameError.innerHTML='all good';
    nameError.style.color = "green";
    // valData++;
}


  // Form validation for Task Description Field min length 5
  if (description.value.length < 3) {
    descripError.innerHTML='Description must be longer than 3 characters';
    descripError.style.color = "red";
   } else {
     descripError.innerHTML='all good';
     descripError.style.color = "green";
    //  valData++;
 }


// Form validation for Task Assigned Field min length 5
if (assignedTo.value.length < 3) {
    assignErr.innerHTML = 'Task must be assigned';
    assignErr.style.color = 'red';
  } else {
     assignErr.innerHTML = 'all good';
     assignErr.style.color = 'green';
    //  valData++;
   }

  // Form validation for Task Status Field not empty
  if (statusD.value === '' || statusD.value == null) {
    statusErr.innerHTML = 'Please select status';
    statusErr.style.color = 'red';
  } else {
    statusErr.innerHTML = 'all good';
    statusErr.style.color = 'green';
    // valData++;
  }

  
  // Form validation for Due Date Field not empty
  // try your own validation for a date in the future
  if (dueDate === " " || dueDate === null) {
    dateErr.innerHTML ="Enter a valid date";
    dateErr.style.color = 'red';
  } else {
    dateErr.innerHTML ="all good";
    dateErr.style.color = 'green';
    // valData++;
  }
  
 
// //   // ----------------------------------------------------------------------------------
//   if (valData > 0) {
//     valData = 0;
//     return;
//   }
});
