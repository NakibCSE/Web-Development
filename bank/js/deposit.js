// Step 1: Add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Step 2: get the deposit amount
    const depositField = document.getElementById('depositField');
    const newDepositAmountString= depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //Step 3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);


    //Step 4: add numbers to set the total deposit
    const CurrentDepositTotal = PreviousDepositTotal + newDepositAmount;
    //Set the deposit total
    depositTotalElement.innerText = CurrentDepositTotal;
    
    //Step 5: get balance total 
    const balanceTotalElement = document.getElementById('blance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal  = parseFloat(previousBalanceTotalString);


    //Step 6: calculate current total
    const currentBalanceTotal = previousBalanceTotal  + newDepositAmount;
    //Set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    //Step 7: Clear the deposit field
    depositField.value = '';
})

