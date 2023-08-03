function addnewProjectField() {
    // Clone the entire "card-body" div
    const projectCardBody = document.querySelector('.newPField');
    const projectnewCardBody = projectCardBody.cloneNode(true);
    

    // Clear the values in the cloned input fields
    const inputs = projectnewCardBody.querySelectorAll('input[type="text"], textarea');
    inputs.forEach((input) => {
        input.value = '';
    });

    projectnewCardBody.style.marginTop = "20px";

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = ' d-grid gap-2 col-6 mx-auto ';
    deleteButton.classList.add('btn', 'btn-danger',);
    deleteButton.addEventListener('click' , function(){
        projectnewCardBody.remove();
    })
    const addButton = projectnewCardBody.querySelector('#addprojectBtn');
        addButton.parentElement.insertBefore(deleteButton, addButton);
    // Append the cloned "card-body" div to the container
    const projectContainer = document.getElementById('projectContainer');
    projectContainer.appendChild(projectnewCardBody);

}


function addNewExpField(){
    const expCardBody = document.querySelector('.weField');
    const expNewCardBody = expCardBody.cloneNode(true);

    const inputs = expNewCardBody.querySelectorAll('input[type="text"]');
    inputs.forEach((input) => {
        input.value = '';
    });

    expNewCardBody.style.marginTop = "20px";
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'd-grid gap-2 col-6 mx-auto';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.addEventListener('click' , function(){
        expNewCardBody.remove();
    })
    const addButton = expNewCardBody.querySelector('#addExpBtn');
        addButton.parentElement.insertBefore(deleteButton, addButton);

    const experienceContainer = document.getElementById('experienceContainer');
    experienceContainer.appendChild(expNewCardBody);
}