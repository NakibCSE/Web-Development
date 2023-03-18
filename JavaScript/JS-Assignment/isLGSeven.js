function isLGSeven(number){
    var result = number - 7;
    if(result<7){
        return result;
    }
    else
    {
        return number * 2;
    }
}

console.log(isLGSeven(15));