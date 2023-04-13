//Add event listener on Withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //Get new withdraw amount
    const newWithdrawAmount = getInputValueById('withdraw-field');

    //Get previous withdraw amount 
    const previousWithdrawAmount = getTextElementValueByID('withdraw-total');

    //Calculate new withdraw total
    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    //Set new withdraw total
    setTextElementValueByID('withdraw-total',newWithdrawTotal);

    //Get previous balance total
    const previousBalanceTotal = getTextElementValueByID('balance-total');

    //Calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    //Set new balance toatl
    setTextElementValueByID('balance-total',newBalanceTotal);
})