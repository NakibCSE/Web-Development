const main = document.getElementById('main-container');
const section = document.createElement('section');
section.innerHTML = `
    <h1>My Dynamic section</h1>
    <p>Extra text addeed</p>

`

main.appendChild(section);