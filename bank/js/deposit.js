// Step 1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step 2: get the deposit amount
    const depositField = document.getElementById('depositField');
    const depositAmount = depositField.value;
    
    //Step 3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotal = depositTotalElement.innerText;
    const CurrentDepositTotal = PreviousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = depositAmount;
    


    //Step 7: Clear the deposit field
    depositField.value = '';
})

