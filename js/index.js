// TaskManager initialises
const taskManager = new TaskManager(0);
// console.log(taskManager);
// TaskManager loading and rendering
taskManager.load();
//eventListener for the currentId click
let cardStats = document.querySelector("#task-list");
taskManager.render();

const addForm = document.querySelector("#addForm");
// console.log(addForm);

addForm.addEventListener("submit", (edata) => {
  edata.preventDefault();
  console.log("insidevalidation");
  let names = document.querySelector("#name");
  let description = document.querySelector("#description");
  let assignedTo = document.querySelector("#assign");
  let statusD = document.querySelector("#inputState");
  let dueDate = document.querySelector("#dateNow");

  // declaring error variables
  let nameError = document.querySelector("#nameError");
  let descripError = document.querySelector("#descripError");
  let assignErr = document.querySelector("#assignErr");
  let statusErr = document.querySelector("#statusErr");
  let dateErr = document.querySelector("#dateErr");
  let valData = 0;

  //Accepting form values
  console.log("Name :" + names.value.length);
  console.log("Description :" + description.value.length);
  console.log("Assigned To :" + assignedTo.value.length);
  console.log("Status:" + statusD.value);
  console.log("Due Date :" + dueDate.value);

  // Form validation for Task Name Field min length 5
  if (names.value.length < 5) {
    nameError.innerHTML = "Name must be longer than 5 characters";
    nameError.style.color = "red";
  } else {
    nameError.innerHTML = "all good";
    nameError.style.color = "green";
    valData++;
  }

  // Form validation for Task Description Field min length 5
  if (description.value.length < 5) {
    descripError.innerHTML = "Description must be longer than 5 characters";
    descripError.style.color = "red";
  } else {
    descripError.innerHTML = "all good";
    descripError.style.color = "green";
    valData++;
  }

  // Form validation for Task Assigned Field min length 5
  if (assignedTo.value.length < 5) {
    assignErr.innerHTML = "Task must be assigned";
    assignErr.style.color = "red";
  } else {
    assignErr.innerHTML = "all good";
    assignErr.style.color = "green";
    valData++;
  }

  // Form validation for Status Field not empty
  // console.log(dueDate.value)
  if (statusD.value == "") {
    statusErr.innerHTML = "Enter a valid status";
    statusErr.style.color = "red";
  } else {
    statusErr.innerHTML = "all good";
    statusErr.style.color = "green";
    valData++;
  }

  // Form validation for Due Date Field not empty
  // console.log(dueDate.value)
  if (dueDate.value == "") {
    console.log(dueDate.value);
    dateErr.innerHTML = "Enter a valid date";
    dateErr.style.color = "red";
  } else {
    dateErr.innerHTML = "all good";
    dateErr.style.color = "green";
    valData++;
  }

  //  console.log(valData);
  // ----------------------------------------------------------------------------------
  // Setting restrictions for data entry and submission
  if (valData >= 5) {
    // valData = 0;
    console.log("validation successful");

    // Adding a new task
    taskManager.addTask(
      names.value,
      description.value,
      assignedTo.value,
      statusD.value,
      dueDate.value
    );

    document.getElementById("addForm").reset();

    // clear form fields();
    nameError.innerHTML = "";
    descripError.innerHTML = "";
    assignErr.innerHTML = "";
    statusErr.innerHTML = "";
    dateErr.innerHTML = "";
    // taskManager.save();
    taskManager.render();
  }
});
// //eventListener for the currentId click
// let cardStats = document.querySelector("#task-list");
console.log(cardStats);
cardStats.addEventListener("click", (event) => {
  if (event.target.getAttribute('class').includes("doneBtn")) {
    const taskId = event.target.parentElement.parentElement.parentElement.getAttribute('id');
   
    const task = taskManager.getTaskById(taskId);
    // Update task status to 'DONE'
    task.statusD = "done";
    // Render the tasks
    taskManager.render();
  }

    //Check the delete button on click
    // if (event.target.classList.contains(".delete-button")) {
    if (event.target.getAttribute('class').includes("delete-button")) {
      // Get the parent Task
      const parentTask =
        event.target.parentElement.parentElement.parentElement;

      // Get the taskId of the parent Task.
      const taskId = Number(parentTask.getAttribute('id'));
      // Delete the task
      taskManager.deleteTask(taskId);

      // Save tasks to localStorage
      taskManager.save();

      // Render tasks
      taskManager.render();
  }
});

// function myCard(event) {
// console.log("my card function");
//   if(event.target.classlist.contains("done-button")) {
//  console.log(event.target.parentElement);
//   };

//   const parentTask =
//       event.target.parentElement.parentElement.parentElement.parentElement;
//       console.log(parentTask);
//     //Turn taskId of the parent Task and into a number.
//     const taskId = Number(parentTask.dataset.taskId);
//     // Get the task from the TaskManager using the taskId
//     const task = taskManager.getTaskById(taskId);
//     // Update task status to 'DONE'
//     task.statusD = "Done";
//     // Render the tasks
//     taskManager.render();

//       //Check the delete button on click
//   // if (event.target.classList.contains(".delete-button")) {
//   if(event.target.classlist.contains(".delete-button")) {
//     // Get the parent Task
//     const parentTask =
//       event.target.parentElement.parentElement.parentElement.parentElement;

//     // Get the taskId of the parent Task.
//     const taskId = Number(parentTask.dataset.taskId);

//     // Delete the task
//     taskManager.deleteTask(taskId);

//     // Save tasks to localStorage
//     taskManager.save();

//     // Render tasks
//     taskManager.render()
//     }

//   }
