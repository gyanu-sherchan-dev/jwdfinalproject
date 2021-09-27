//Card function in html
function createTaskHtml (names, description, assignedTo, statusD, dueDate) {
  const html =`<div class="col">
  <div class="mx-auto card" style="width: 14rem;">
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
      <a href="#" class="btn btn-primary">Edit</a>
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
        currentId: this.currentId++,
        names: names,
        description: description,
        assignedTo: assignedTo,
        statusD: statusD,
        dueDate: dueDate,
      };

      this.tasks.push(task);
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
      const taskHtml = createTaskHtml(
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
