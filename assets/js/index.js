// declare variables
const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();

const name = document.querySelector('#taskName');  
const assignedTo = document.querySelector('#assignTo');
const date = document.querySelector('#date');
const status = document.querySelector('#taskStatus');  
const description = document.querySelector('#description');
const taskHtml = createTaskHtml(name, description, assignedTo, date, status);
const newForm = document.getElementById('form');
const submit = document.getElementById('submit-btn');


/* function validFormFieldInput(data) {
  const taskName = 
  document.querySelector('#taskName');
  const name = taskName.value;
  if (name === '') {
  document.getElementById('alert').classList.remove('d-none')
  } else {
    document.getElementById('alert').classList.add('d-none')
  }
}
*/


// function for form validation 
/*
const validFormFieldInput = 
(() => {
    'use strict';  
    // fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation'); 
    // loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }; */


// submit event listener for form validation and to add task
newForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const taskName = document.querySelector('#taskName');  
  const taskAssignTo = document.querySelector('#assignTo');
  const dueDate = document.querySelector('#date');
  const taskStatus = document.querySelector('#taskStatus');  
  const taskDescription = document.querySelector('#description');
  // *** form alerts ***/
  if(dueDate.value === '') {
    alert('Please choose a due date')
   } else if (taskName.value === '') {
    alert('Please enter a task name')
   } else if(taskAssignTo.value === '') {
    alert('Please assign the task')
   } else if (taskStatus.value === '') {
    alert('Please choose a status')
   } else if (taskDescription.value === '') {
    alert('Please add a description')
   } else {
  // *** add values *** //
  const name = taskName.value;
  const description = taskDescription.value;
  const assignedTo = taskAssignTo.value;
  const date = dueDate.value;
  const status = taskStatus.value;
  // validFormFieldInput('taskName');
  // validFormFieldInput('description');
  // validFormFieldInput('assignTo');
  taskManager.addTask(name, description, assignedTo, date, status);
  //taskManager.addTask(taskName, description, assignTo, date, taskStatus);
  taskName.value = "";
  taskDescription.value = "";
  taskAssignTo.value = "";
  taskStatus.value = "";
  dueDate.value = "";
  taskManager.render();
 }
}) 

/* function clickMe() {
  const taskName = document.querySelector('#taskName');  
  const taskAssignTo = document.querySelector('#assignTo');
  const taskStatus = document.querySelector('#taskStatus');  
  const taskDescription = document.querySelector('#description');
  // validFormFieldInput('taskName');
  // validFormFieldInput('description');
  // validFormFieldInput('assignTo');
  const name = taskName.value;
  const description = taskDescription.value;
  const assignedTo = taskAssignTo.value;
  const status = taskStatus.value;
  taskManager.addTask(name, description, assignedTo, dueDate, status);
  console.log(taskManager.taskName);
}; */

//submit.onclick = clickMe();


console.log(taskManager);


const taskList = document.querySelector('#taskList');
taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button') === true) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskManager.getTaskById(taskId);
        task.status = 'DONE';
        taskManager.save();
        taskManager.render();
    }
    if (event.target.classList.contains('delete-button') === true) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
    }
});



