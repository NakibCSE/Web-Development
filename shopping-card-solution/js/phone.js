//Function for updating phone number
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number')
    const phoneNumberString = phoneNumberField.value;
    const PreviousPhoneNumber = parseInt(phoneNumberString);

    let newPhoneNumber;
    if(isIncrease){
         newPhoneNumber = PreviousPhoneNumber + 1;
    }
    else
    {
        newPhoneNumber = PreviousPhoneNumber - 1;
    }
    
    phoneNumberField.value = newPhoneNumber; 
    return newPhoneNumber;
}
// Add event listener to phone plus button
document.getElementById('phone-plus').addEventListener('click', function(){
    const currentPhoneNumber = updatePhoneNumber(true);
    const phoneTotalField = document.getElementById('phone-total');
    const currentPhoneTotal = currentPhoneNumber * 1219;
    phoneTotalField.innerText = currentPhoneTotal;

})


//Add event listener to phone minus button
document.getElementById('phone-minus').addEventListener('click', function(){
    const currentPhoneNumber = updatePhoneNumber(false);
    const phoneTotalField = document.getElementById('phone-total');
    const currentPhoneTotal = currentPhoneNumber * 1219;
    phoneTotalField.innerText = currentPhoneTotal;
})