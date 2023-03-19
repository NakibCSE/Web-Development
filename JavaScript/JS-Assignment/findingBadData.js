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

console.log(findingBadData([12,12,23,45,56,7,8,8]));