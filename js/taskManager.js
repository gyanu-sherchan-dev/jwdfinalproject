//Task 5 - Creating a TaskManager
class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  // Creating the addTask method
    addTask(names, description, assignedTo,statusD, dueDate) {
    
      const task = {
        // Increment the current Id for each new task
        id: this.currentId++,
        name: names,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: statusD,
      };

      this.tasks.push({ task });
    
  }
}


