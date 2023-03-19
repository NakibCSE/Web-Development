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


//evenOdd is function that takes a text and find the length of it, then check whether the length is odd or even and return message accordingly. 
function evenOdd(text){

    //Input validation
    if(typeof text != 'string'){
        return 'Please provide a string!!';
    }
    let len = text.length;
    if(len%2==0){
        return 'even';
    }
    else
    {
        return 'odd'
    }
}


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

//findingBadData is a function that takes an array as parameter, traverse the array and search for bad data (if an element is less than zero it is defined as bad data), count the number of bad dada and return the count.  
function findingBadData(ages){
    //Input validation
    if(Array.isArray(ages) != true){
        return 'Please provide an array!!';
    }
    let count = 0;
    for(let age of ages){
        if(age < 0){
            count++;
        }
    }
    return count;
}

//gemsToDiamond is a function that takes three number (gems) as input convert them to diamond by multiplying 21, 32, 43 respectively, then calculate the total. If total is greater than 2000, return total - 2000. Otherwise return the total. 
function gemsToDiamond(gem1, gem2, gem3){
    //Input validation
    if(isNaN(gem1) || isNaN(gem2) || isNaN(gem3)){
        return 'Please provide valid parameters!!!';
    }
    gem1*=21;
    gem2*=32;
    gem3*=43;

    let total =  gem1 + gem2 + gem3;
    if(total > 2000){
        return total - 2000;
    }
    else
    {
        return total;
    }
}




