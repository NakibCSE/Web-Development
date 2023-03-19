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

console.log(gemsToDiamond(100,5));