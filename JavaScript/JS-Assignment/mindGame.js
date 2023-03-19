//mindGame is a function that takes a number as parameter and perform some arithmetic operation on it.
function mindGame(number){

    //Input validation
    if(isNaN(number)){
        return 'Please provide a number!!';
    }
    let result = number * 3;
    result+=10;
    result/=2;
    result-=5;
    return result;
}

console.log(mindGame(12));