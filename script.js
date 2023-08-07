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

//generate resume function
function generateResume(){

    //name
    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');
    let nameT2 = document.getElementById('nameT2')
    nameT1.innerHTML = nameField;
    nameT2.innerHTML = nameField;

    //city
    let cityField = document.getElementById('cityField').value;
    let cityT = document.getElementById('cityT');
    cityT.innerHTML = cityField;

    //objective
    let objectiveField = document.getElementById('objectiveField').value;
    let objectiveT = document.getElementById('objectiveT');
    objectiveT.innerHTML = objectiveField;

    //phone number
    document.getElementById('phoneT').innerHTML = document.getElementById('phoneField').value;

    //portfolio
    document.getElementById('portfolioT').innerHTML =  document.getElementById('websiteField').value;
    //email
    document.getElementById('gmailT').innerHTML = document.getElementById('emailField').value;

    //github
    document.getElementById('githubT').innerHTML = document.getElementById('githubField').value;

    //linkedin
    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedinField').value;

    //college name
    document.getElementById('collegeT').innerHTML = document.getElementById('collegeField').value;

    //college duration
    document.getElementById('collegeDurationT').innerHTML = document.getElementById('dateField').value;

    //college city
    document.getElementById('collegeCityT').innerHTML = document.getElementById('educationCityField').value;

    //college degree
    document.getElementById('degreeFieldT').innerHTML = document.getElementById('degreeField').value;

    //college additional info
    document.getElementById('collegeInfoT').innerHTML = document.getElementById('collegeInfoField').value;

    //cgpa
    document.getElementById('cgpaT').innerHTML = document.getElementById('cgpaField').value;
    // let cgpa = document.getElementById('cgpaField').value;
    // let cgpaT = document.getElementById('cgpaT');
    // cgpaT.innerHTML = cgpa;
    










} 
