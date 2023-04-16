//Common function for update case number
function updateCaseNumber(isIncrease){
     //get the case number field's value
     const caseNumberField = document.getElementById('case-number');
     const previousCaseNumberString = caseNumberField.value;
     const previousCaseNumber = parseInt(previousCaseNumberString);
    
     //Declare a updateable variable for new case number
     let newCaseNumber;

     //calculate current case number
     if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
     }
     else{
        newCaseNumber = previousCaseNumber - 1;
     }
     //set the current case number
     caseNumberField.value = newCaseNumber;
     return newCaseNumber;
}


//Function for updating case total price
function updateCaseTotalPrice(totalCaseNumber){
     // Calculate new total price
     const caseTotalPrice = totalCaseNumber * 59;

     //Get the price total field and set the new total price
     const caseTotalField = document.getElementById('case-total');
     caseTotalField.innerText = caseTotalPrice;
}
// Add event listener on plus button of case field
document.getElementById('case-plus').addEventListener('click', function(){
    //Call case update function 
    const totalCaseNumber = updateCaseNumber(true);

    //Call case total price update function
    updateCaseTotalPrice(totalCaseNumber);
})

//Add event listener on minus button of case field 
document.getElementById('case-minus').addEventListener('click', function(){
    //Call case update function 
    const totalCaseNumber = updateCaseNumber(false);

    //Call case total price update function
    updateCaseTotalPrice(totalCaseNumber);
})