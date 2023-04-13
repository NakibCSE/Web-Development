//Add event listener on deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Get new deposit amount by using getInputValueById function
    const newDepositAmount = getInputValueById('deposit-amnt');

    //Get previous deposit amount by using getElementValueByID function 
    const previousDepositTotal = getTextElementValueByID('deposit-total');

    //Calculate new deposit total
    const newDepositTotal = newDepositAmount + previousDepositTotal;

    //Set deposit total value 
    setTextElementValueByID('deposit-total',newDepositTotal);

    //get previous balance total by using function 
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalance = previousBalanceTotal + newDepositAmount;

    //set new total balance 
    setTextElementValueByID('balance-total', newBalance);
})