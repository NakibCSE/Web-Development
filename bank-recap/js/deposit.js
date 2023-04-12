//Step 1: Add event listener on deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // Step 2: get the deposit amount 
    const depositField = document.getElementById('deposit-amnt');
    const newDepositAmntString = depositField.value;
    const newDepositAmnt = parseFloat(newDepositAmntString);

    //Step 3: clear the deposit field 
    depositField.value = "";
    if(isNaN(newDepositAmnt) || newDepositAmnt < 0){
        alert("Please provide a valid deposit amount.");
        return;
    }

    // Step 4: get the previous deposit amnt
    const totalDepositAmntField = document.getElementById("deposit-total");
    const previousDepositAmntString = totalDepositAmntField.innerText;
    const previousDepositAmnt = parseFloat(previousDepositAmntString);

    // Step 5: add the previous and new deposit amount 
    const currentDepositAmnt = previousDepositAmnt + newDepositAmnt;
    
    //Step 6: set the current deposit amount 
    totalDepositAmntField.innerText = currentDepositAmnt;

    //Step 7: get current total balance 
    const balanceTotalField = document.getElementById("balance-total");
    const previousBalanceString  = balanceTotalField.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    
    //Step 8: update current total balance 
    const currentTotalBalance = previousBalance + newDepositAmnt;
    balanceTotalField.innerText = currentTotalBalance;
})