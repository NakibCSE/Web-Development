
// Step 1: Add click event handler with the submit button
document.getElementById("btn-submit").addEventListener('click', function(){
    //Step 2: Get the email address inside the email field
    //Always remember to get the input value by .value 
    const emailField = document.getElementById("userEmail");
    const email = emailField.value;

    //Step 3: Get the password
    const passField = document.getElementById("userPassword");
    const pass = passField.value;

    //Danger: Do not verify email at client side
    //Step 4: Verify email && password
    if(email === "sontan@baap.com" && pass === "secret"){
        console.log("Valid User");
    }
    else
    {
        console.log("Invalid User");
    }

    
})