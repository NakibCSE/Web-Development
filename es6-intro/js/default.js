function addNumbers(first, second){
    const total = first + second;
    return total;
}

const result = addNumbers(12,15);
console.log(result);

//Function with default parameter
function addNumbers2(first, second = 0){
    const total = first + second;
    return total;
}

const result2 = addNumbers2(9);
console.log(result2);