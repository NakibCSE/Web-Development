//Step 1: Add event listener to the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //Step 2: get the withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmntString = withdrawField.value;
    const newWithdraw = parseFloat(withdrawAmntString);

    //Step 3: Clear the withdaraw field 
    withdrawField.value = '';

     //Step 4: get current total balance 
     const balanceTotalField = document.getElementById('balance-total');
     const balanceTotalString = balanceTotalField.innerText;
     const totalBalance = parseFloat(balanceTotalString);

    //Step 5: Input validation
    if(isNaN(newWithdraw) || newWithdraw>totalBalance){
        alert("Please enter a valid withdrawal amount.....!!");
        return;
    }
    //Step 6: get the total withdraw field
    const previousWithdrawField = document.getElementById('withdraw-total');
    const previousWithdrawAmntString = previousWithdrawField.innerText;
    const previousWithdraw = parseFloat(previousWithdrawAmntString);

    //Step 7: add the new and previous withdraw amnt 
    const currentWithdrawAmnt = previousWithdraw + newWithdraw;

    //Step 8:  set the current to the total withdraw field
    previousWithdrawField.innerText = currentWithdrawAmnt;

    //step 9: reduce total balance
    const currentTotalBalance = totalBalance - newWithdraw;

    //Step 10: set new balance 
    balanceTotalField.innerText = currentTotalBalance;
})