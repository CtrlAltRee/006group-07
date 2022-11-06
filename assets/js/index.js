// declare variables
const date = document.querySelector('#date');
const taskName = document.querySelector('#taskName');  
const assignTo = document.querySelector('#assignTo');
const taskStatus = document.querySelector('#taskStatus');  
const description = document.querySelector('#desciption');
const newForm = document.getElementById('form');
const submit = document.getElementById('submit-btn');
const taskManager = new TaskManager();


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
const validFormFieldInput = () => {
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
  };

// button did not clear form with this function
/* new task form event listener
newForm.addEventListener('submit', function(e) {
  e.preventDefault();
  taskManager.addTask(taskName, description, assignTo, date, taskStatus);
}) */

function clickMe() {
  validFormFieldInput('taskName');
  validFormFieldInput('description');
  validFormFieldInput('assignTo');
  taskManager.addTask();
};

submit.onclick = clickMe();

// not sure if correct
// console.log(taskManager.addTask(taskName, description, assignTo, date, taskStatus));

console.log(taskManager);

//Questons:
// question: how to console log task 5 step 3
/* question meaning: 
For now, if your New Task form is on a seperate page to your Task List, copy it over to your Task List so it's all on the one page. */

//let TaskManager = new task;
//console.log(newTask)


