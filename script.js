let form = document.querySelector("#form");
let display = document.querySelector(".resultdisplay")
let submit = document.querySelector("#submit");


function Taxcalculator() {
    let income = parseInt(document.querySelector("#Income").value);
    let extra = parseInt(document.querySelector("#Extra").value);
    let deductions = parseInt(document.querySelector("#Deductions").value);
    let age = parseInt(document.querySelector("#Age").value);

    let finalresult = document.querySelector("#para");


    let total = ((income + extra) - deductions);

    if (total <= 800000) {
        finalresult.innerText = `Your overall income will be ${total} and is less than 8 lakhs . so no tax for you`
    }
    else if (age < 40 && total > 800000) {
        result = (0.3 * (total - 800000));
        finalresult.innerText = `Your overall income will be ${total - result} after tax deductions`
    }
    else if (age >= 40 && age < 60 && total > 800000) {
        result = (0.4 * (total - 800000));
        finalresult.innerText = `Your overall income will be ${total - result} after tax deductions`
    }
    else if (age >= 60 && total > 800000) {
        result = (0.1 * (total - 800000));
        finalresult.innerText = `Your overall income will be ${total - result} after tax deductions`
    }

    validateform();
    checkvalidity();


}

submit.addEventListener("click", (Taxcalculator))


let Terminate = document.querySelector("#close");
Terminate.addEventListener("click", () => {

    window.location.reload();

});

function validateform() {
    var x = document.forms["myform"]["fname"].value;
    var y = document.forms["myform"]["fextra"].value;
    var z = document.forms["myform"]["fage"].value;
    var a = document.forms["myform"]["fdedu"].value;

    if (x == "" || y == "" || z == "" || a == "") {
        return false;

    }
    else if (isNaN(x)) {
        let fnote = document.querySelector(".note1");
        fnote.style.opacity = 1;
        return false
    }
    else if (isNaN(y)) {
        let fnote = document.querySelector(".note2");
        fnote.style.opacity = 1;
        return false
    }
    else if (isNaN(a)) {
        let fnote = document.querySelector(".note3");
        fnote.style.opacity = 1;
        return false
    }

    else {
        form.style.display = "none";
        display.style.display = "Block"
        return false
    }
}

