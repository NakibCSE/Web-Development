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

console.log(evenOdd(132));