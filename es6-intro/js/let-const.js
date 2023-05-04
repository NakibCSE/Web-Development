//Breakup with var
//No more use of var
//let : let it to reassign
//const : don't allow to reassign

let money = 25;
money = 50;
console.log(money);


// const bird = 'Jaan Pakhi';
// bird = 'Blue Eyes';  //Reassign is not allowed
// console.log(bird);

const numbers = [10,20,30,40];
// numbers[1] = 100;   //Array modification is allowed
// console.log(numbers);

// const student = {
//     name:'Mofiz',
//     address:'Satkania'
// }

// student.name = 'Nakib';   //Object modification is allowed

// console.log(student);

let sum = 0;
for(let i = 0; i<numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);