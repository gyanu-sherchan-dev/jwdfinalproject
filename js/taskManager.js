//Card function in html
function createTaskHtml (currentId, names, description, assignedTo, statusD, dueDate) {
  console.log(currentId);
  const html =`<div class="col" id="${currentId}">
  <div class="auto card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-name">Name:</h5>
      <p class="card-text">${names}</p>
      <h5 class="card-name">Description</h5>
      <p class="card-text">${description}</p>
      <h5 class="card-name">Assigned To:</h5>
      <p class="card-text">${assignedTo}</p>
      <h5 class="card-status">Status:</h5>
      <p class="card-text">${statusD}</p>
      <h5 class="card-name">DueDate:</h5>
      <p class="Date">${dueDate}</p>
      <a href="#" class="btn btn-success ${(statusD == "Done") ? "d-none" : ""}
      " id="${currentId}">Mark as Done</a><br>
      <a href="#" class="btn btn-primary">delete</a>
    </div>
  </div>
</div>`

return html;
}
 
//Task 5 - Creating a TaskManager
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId
      }

//addTask method
    addTask(names, description, assignedTo,statusD, dueDate) {
    
      const task = {
        // Incrementing the currentId for each new task
        id: this.currentId++,
        names: names,
        description: description,
        assignedTo: assignedTo,
        statusD: statusD,
        dueDate: dueDate,
      };

      this.tasks.push(task);
  }
  getTaskById(taskId) {
    // Create a variable to store the found task
    let foundTask;
    // Loop over the tasks and find the task with the id passed as a parameter
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].id);
      console.log("task id", taskId);
      // Get the current task in the loop
      const task = this.tasks[i];
      // Check if its the right task by comparing the task's id to the id passed as a parameter
      if (task.id == taskId) {
        // Store the task in the foundTask variable
        foundTask = task;
      }
    }
    // Return the found task
    return foundTask;
  }


   // Render method
   render() {
    let tasksHtmlList = [];
    //html array store
    for (let i = 0; i < this.tasks.length; i++) {
        const task = this.tasks[i];
      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    
      //Task html
      console.log("render function");
      const taskHtml = createTaskHtml(
        task.id,
        task.names,
        task.description,
        task.assignedTo,
        task.statusD,
        formattedDate,
        );
      console.log(taskHtml);

      // Push it to the tasksHtmlList array
      tasksHtmlList.push(taskHtml);
    }

    // tasksHtml joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join("\n");

    // Setting the innerHTML of the tasksList on the page
    const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = tasksHtml;
}
}
//document.getElementById("#task-list").style.counterIncrement;
