//Traditinoal way
const multiline = 'This is the first line' + '\nThis is the second line' + '\nThis is the third line';
console.log('The traditional way:')
console.log(multiline);

//Using backtci
const multiline2 = `This is first line 
This is secnd line
This is third line
This is fourth line
`;

console.log('Using backtick:');
console.log(multiline2);

const a = 10;
const b = 20;

//Using traditional way
const summary = 'The sum of '+ a + ' and ' + b + ' is : ' + (a+b);
console.log('The traditional way:')
console.log(summary);

//Using backtick
const summary2 = `The sum of ${a} and ${b} is : ${a+b}`;
console.log('Using Backthick:');
console.log(summary2);

 