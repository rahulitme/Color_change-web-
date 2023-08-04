const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red', 'yellow', 'orange', 'purple', 'blue'];

body.style.background = 'red';

button.addEventListener('click', changeBackground);

function changeBackground() {
    const colorIndex = parseInt(Math.random() * color.length);
    body.style.background = color[colorIndex];
}
