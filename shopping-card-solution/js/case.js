// Add event listener on plus button of case field
document.getElementById('case-plus').addEventListener('click', function(){
    
    //get the case number field's value
    const caseNumberField = document.getElementById('case-number');
    const previousCaseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(previousCaseNumberString);

    //calculate current case number
    const currentCaseNumber = previousCaseNumber + 1;

    //set the current case number
    caseNumberField.value = currentCaseNumber;
})

//Add event listener on minus button of case field 
document.getElementById('case-minus').addEventListener('click', function(){
     //get the case number field's value
     const caseNumberField = document.getElementById('case-number');
     const previousCaseNumberString = caseNumberField.value;
     const previousCaseNumber = parseInt(previousCaseNumberString);
 
     //calculate current case number
     const currentCaseNumber = previousCaseNumber - 1;
 
     //set the current case number
     caseNumberField.value = currentCaseNumber;
})