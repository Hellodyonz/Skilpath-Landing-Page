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

// nomor 9

function validateFormData() {
    const isiData = handleGetFormData();
    const isiDataValid =
        isiData.name != null && isiData.name != "" &&
        isiData.city != null && isiData.city != "" && 
        isiData.email != null && isiData.email != "" && 
        isiData.zipCode != null && isiData.zipCode != "" && 
        isiData.status != null && isiData.status != "";
    if (isiDataValid && isNumber(isiData.zipCode) && checkboxIsChecked()) {
        return true;
    } else {
        return false;
    }
}

// Nomor 10

const btnSubmit = document.getElementById('submit-form');

function submit(event){
    event.preventDefault();


    if(validateFormData() == false){
        const warning = document.getElementById("warning");
        warning.textContent = "Periksa form anda sekali lagi";
        warning.classList.add('warning')
    } else {
        const warning = document.getElementById("warning");
        warning.textContent = "";
        warning.classList.remove('warning')
    }
}

const form = document.querySelector(".contact-form");
form.addEventListener("submit", submit);
