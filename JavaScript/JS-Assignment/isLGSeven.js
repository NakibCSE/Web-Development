//isLGSeven is function that takes a number as parameter, reduce the number by 7 and if the reduced number is less than 7 returns the reduced number otherwise returns double of the given input.
function isLGSeven(number){
    
    //Input validation
    if(isNaN(number)){
        return 'Please provide a number!!';
    }
    let result = number - 7;
    if(result<7){
        return result;
    }
    else
    {
        return number * 2;
    }
}

console.log(isLGSeven('Nakib'));