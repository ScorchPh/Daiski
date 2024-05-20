
function convertNumber() {
    var numberInput = document.getElementById("numberInput").value;
    var fromBase = parseInt(document.getElementById("fromBase").value);
    var toBase = parseInt(document.getElementById("toBase").value);
    var allowedChars = getAllowedChars(fromBase);
    if (!isValidInput(numberInput, allowedChars)) {
        alert("Invalid input for the selected base.");
        return;
    }
    var decimalNumber = parseInt(numberInput, fromBase);
    var result = decimalNumber.toString(toBase);

    document.getElementById("result").innerHTML = " " + result;
}

function getAllowedChars(base) {
    switch (base) {
        case 2:
            return /^[01]+$/;
        case 8: 
            return /^[0-7]+$/;
        case 10:
            return /^[0-9]+$/;
        case 16:
            return /^[0-9A-Fa-f]+$/;
        case 1:
            alert("CAN'T YOU SEE IT!!?? CHOOSE BAKAYARO!!!")
            return;
        default:
            return /^[0-9]+$/; 
    }
}

function isValidInput(input, allowedChars) {
    return allowedChars.test(input);
}
function eraseNum(){
    document.getElementById("result").innerHTML = " ";
    document.getElementById("numberInput").innerHTML.replace = " ";
}
    