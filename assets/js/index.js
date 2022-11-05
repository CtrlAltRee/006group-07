const assignTo = 
    document.querySelector('#assignTo');
    

const taskStatus = 
    document.querySelector('#taskStatus');
   
    
const date = 
    document.querySelector('#date');
    
      

const description = 
    document.querySelector('#desciption');
    

const taskName = 
    document.querySelector('#taskName');
   

    const newForm = document.getElementById('form');
    const taskManager = new TaskManager();

// function validFormFieldInput(data) {
//     const taskName = 
//     document.querySelector('#taskName');
//     const name = taskName.value;
//    if (name === '') {
//     document.getElementById('alert').classList.remove('d-none')
//    } else {
//     document.getElementById('alert').classList.add('d-none')
//    }
// }

(() => {
    'use strict';
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms).forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();


// submit button
 //newTaskForm.addEventListener('submit', function ) {
  //  if 
 //}



console.log(TaskManager.tasks)

// question on how to console log task 5 step 3
//let TaskManager = new task;
//console.log(newTask)


