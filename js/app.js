
const counter = document.getElementById('counter');

const counterButtons = document.querySelectorAll('.btn');

function add() {
  counter.innerText = parseInt(counter.innerText) + 1;
  colorCheck(); 
}

function lower() {
  counter.innerText = parseInt(counter.innerText) - 1; 
  colorCheck();
}

function colorCheck() {
  if (parseInt(counter.innerText) > 0) {
    counter.style.color = 'green';
  } else if (parseInt(counter.innerText) < 0) {
    counter.style.color = 'red';
  } else {
    counter.style.color = 'black';
  }
}

counterButtons[0].addEventListener('click', lower);
counterButtons[1].addEventListener('click', add);

