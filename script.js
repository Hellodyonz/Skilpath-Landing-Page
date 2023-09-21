function handleGetFormData() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;


    let inputData = {
        name: name,
        city: city,
        email: email,
        zipCode: zipCode,
        status: status
    };
    
    return inputData;
}

// nomor 7

function isNumber(string) {
    return !isNaN(string);
};

// nomor 8

function checkboxIsChecked(){
    const nilaiCB = handleGetFormData();
    return nilaiCB.status;
}

// Nomor 9
function validateFormData(formData){
    if(formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()){
    return true;
    } else {
    return false;
    }
}


// Nomor 10
const btnSubmit = document.getElementById('submit-form');

function submit() {

    const formData = handleGetFormData(); 
    const warning = document.getElementById("warning");

    if (validateFormData(formData)) {
        warning.textContent = ""; 
    } else {
        warning.textContent = "Periksa form anda sekali lagi"; 
    }
}

btnSubmit.addEventListener("click", submit);

