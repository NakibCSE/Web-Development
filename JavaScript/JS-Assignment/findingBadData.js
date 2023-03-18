function findingBadData(ages){
    var count = 0;
    for(var age of ages){
        if(age < 0){
            count++;
        }
    }
    return count;
}

console.log(findingBadData([ -4, -9, -5, -33, -55 ]));