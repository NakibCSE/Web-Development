// Function for getting input value 
function getInputValueById(inputID){
    const inputField = document.getElementById(inputID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

// Function for getting the text element value
function getTextElementValueByID(elementID){
    const element = document.getElementById(elementID);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//Function for setting the text element value 
function setTextElementValueByID(elementID, newValue){
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}