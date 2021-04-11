// your javascript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add the following elements to the container using ONLY javascript - do not add any HTML or CSS code.

// a <p> with red text that says “Hey I’m red!”
const redP = document.createElement("p")
redP.style.color = 'red'
redP.textContent = "Hey I'm red!"
container.appendChild(redP)
// an <h3> with blue text that says “I’m a blue h3!”
const blueH3 = document.createElement("h3")
blueH3.style.color = 'blue'
blueH3.textContent = "I'm a blue h3!"
container.appendChild(blueH3)
// a <div> with a black border and pink background color with the following elements inside of it:
const pinkDiv = document.createElement("div")
pinkDiv.style.backgroundColor = 'pink'
pinkDiv.style.border = '1px solid black'
// another <h1> that says “I’m in a div”
const plainDiv = document.createElement("div")
plainDiv.textContent = "I'm in a div"
pinkDiv.appendChild(plainDiv)
// a <p> that says “ME TOO!”
const plainP = document.createElement("p")
plainP.textContent = "ME TOO!"
pinkDiv.appendChild(plainP)
container.appendChild(pinkDiv)
// Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.

// the JavaScript file
const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e.target);
  });
  
  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });