//Step 1: Add event listener to withdraw button
document.getElementById("btn-withdraw").addEventListener('click', function(){

    //Step 2: Get the withdraw amount
    const withdrawField = document.getElementById("withdraw-amnt");
    const withdrawAmntString = withdrawField.value;
    const newWithdrawAmnt = parseFloat(withdrawAmntString);

    //Step 3: Get the previous withdraw amnt
    const previousWithdrawField = document.getElementById("withdraw-total");
    const previousWithdrawAmntString = previousWithdrawField.innerText;
    const previousWithdrawAmnt = parseFloat(previousWithdrawAmntString);
    
    //Step 4: add the previous and new withdraw amnt to find total
    const CurrentWithdrawAmnt = previousWithdrawAmnt + newWithdrawAmnt;

    //Step 5: set the current withdraw amnt
    previousWithdrawField.innerText = CurrentWithdrawAmnt;

    //Step 6: get the previous balance amount
    const PreviousBalanceField = document.getElementById("blance-total");
    const PreviousBalanceAmntString = PreviousBalanceField.innerText;
    const PreviousBalanceAmnt = parseFloat(PreviousBalanceAmntString);

    //Step 7: reduce the balance after withdrawal
    const currentBalance = PreviousBalanceAmnt - newWithdrawAmnt;
    PreviousBalanceField.innerText = currentBalance;


    //step 8: clear the withdraw field
    withdrawField.value = "";

})