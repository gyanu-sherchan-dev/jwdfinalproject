//Card function in html
function htmlTask(names, description, assignedTo, dueDate, statusD) {
  const html =`<div class="col">
  <div class="mx-auto card" style="width: 14rem;">
    <div class="card-body">
      <h5 class="card-name">${names}</h5>
      <p class="card-text">Coding</p>
      <h5 class="card-name">${description}</h5>
      <p class="card-text">Make use of course content.</p>
      <h5 class="card-name">${assignedTo}:</h5>
      <p class="card-text">Patience</p>
      <h5 class="card-status">${statusD}:</h5>
      <p class="card-text">Done</p>
      <h5 class="card-name">${dueDate}:</h5>
      <p class="Date">mm/dd/year</p>
      <a href="#" class="btn btn-primary">Edit</a>
      <a href="#" class="btn btn-primary">delete</a>
    </div>
  </div>
</div>`

return html;
console.log(htmlTask);
}


//Task 5 - Creating a TaskManager
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  //addTask method
    addTask(names, description, assignedTo,statusD, dueDate) {
    
      const task = {
        // Incrementing the current Id for each new task
        id: this.currentId++,
        name: names,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: statusD,
      };

      this.tasks.push({ task });
  }
   // Render method
   render() {
    let tasksHtmlList = [];
    //html array store
    for (let i = 0; i < this.tasks.length; i++) {
      // Get the current task in the loop
  const task = this.tasks[i];
      // Format the date
      const date = new Date(task.dueDate);
      const formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
      // Task html
      const taskHtml = htmlTask(
        task.names,
        task.description,
        task.assignedTo,
        task.formattedDate,
        task.statusD
      );
      // console.log(taskHtml);
      // Push it to the tasksHtmlList array
      tasksHtmlList.push(taskHtml);
    }

    // tasksHtml joining each item in the tasksHtmlList
    // with a new line in between each item.
    const tasksHtml = tasksHtmlList.join("\n");

    // Set the inner html of the tasksList on the page
    const tasksList = document.querySelector("#task-list");
    tasksList.innerHTML = tasksHtml;
  }
}



 

