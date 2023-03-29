console.log('This is separate JS file');
//Option 1: directly set on the HTML element
// <button onclick="console.log(65)">Another Button</button>


//Option 2: add onclick function on the html element
//<button onclick="makeRed()">Make Red</button>
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


//Option 3: 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//Option 3: another:
const PurpleButton = document.getElementById('make-purple');
PurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


//Option 4: 
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = "pink";
}


// Option 4: another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen(){
     document.body.style.backgroundColor = 'green';
})

//Option 4: final
document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})