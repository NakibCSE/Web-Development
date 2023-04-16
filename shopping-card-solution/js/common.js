//Function for getting value by ID
function getTextElementValueByID(elementID){
    const elementField = document.getElementById(elementID);
    const elementString = elementField.innerText;
    const elementValue = parseInt(elementString);
    return elementValue;
}

//Function for setting velue by ID
function setTextElementValueByID(elementID, value){
    const textElementField = document.getElementById(elementID);
    textElementField.innerText = value;
}

//Calculate subtotal
function calculateSubtotal(){
   const currentPhoneTotal = getTextElementValueByID('phone-total');
   const currentCaseTotal = getTextElementValueByID('case-total');

   const currentSubtotal = currentCaseTotal + currentPhoneTotal;
   setTextElementValueByID('sub-total', currentSubtotal);

   //Calculate final total 
    const vatAmountString = (currentSubtotal * 0.1).toFixed(2);
    const vatAmount = parseFloat(vatAmountString);
    setTextElementValueByID('vat-amnt',vatAmount);

    const finalTotal = currentSubtotal + vatAmount;
    setTextElementValueByID('final-toatl',finalTotal);
}
