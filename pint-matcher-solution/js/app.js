function getPin(){
    const pin = generatePin();
    const pinString = pin+'';
    if(pinString.length == 4 ){
        return pin;
    }
    else
    {
        return getPin();
    }
}
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

// Add event listener on generate pin button 
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    console.log(pin);
    const displayField = document.getElementById('display-pin');
    displayField.value = pin;
})


//Add event listener on calculator button 
document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else
    {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})


//Pin matcher part
document.getElementById('pin-match').addEventListener('click', function(){
    //Get the generated random number 
    const randomNumberField = document.getElementById('display-pin');
    const randomNumberString = randomNumberField.value;
    const randomNumber = parseInt(randomNumberString);
    console.log(randomNumber);


    //Get the typed number 
    const typedNumberField = document.getElementById('type-number');
    const typedNumberString = typedNumberField.value;
    const typedNumber = parseInt(typedNumberString);

    const failedMessage = document.getElementById('failed');
    const successMessage = document.getElementById('success');

    if(randomNumber === typedNumber){
        
        successMessage.style.display = 'block';
        failedMessage.style.display = 'none';
    }
    else{
        
        failedMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})