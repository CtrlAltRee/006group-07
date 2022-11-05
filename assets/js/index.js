const assignTo = 
    document.querySelector('#assignTo');
    const assign = assignTo.value;
    console.log("assign: " + assign);

const taskStatus = 
    document.querySelector('#taskStatus');
    const status = taskStatus.value;
    
const date = 
    document.querySelector('#date');
    const newDate = date.value;
      

const description = 
    document.querySelector('#desciption');
    const newDescription = description.value;

const taskName = 
    document.querySelector('#taskName');
    const newTaskName = taskName.value;



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




