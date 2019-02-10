const btn = document.querySelector('button');
let number = 1;
const ul = document.querySelector('ul');

const addElement = function() {
    const li = document.createElement('li');
    li.textContent = `${number}`;
    ul.appendChild(li);
    if(number%3 == 0) {
        li.classList.add('big');
    }
    number += 2;
}


btn.addEventListener('click', addElement);