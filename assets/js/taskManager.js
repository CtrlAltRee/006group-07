class TaskManager {
    constructor(currentId) {
        this.tasks = [];
        this.currentId = 0;
    } 
    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
           id: this.currentId++,
           name: document.getElementById('taskName').value,
           description: document.getElementById('description').value,
           assignedTo: document.getElementById('assignTo').value,
           dueDate: document.getElementById('date').value,
           status: 'TODO'
    };
    this.tasks.push(task)
}
}
