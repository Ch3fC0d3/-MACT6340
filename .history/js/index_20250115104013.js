const description = document.createElement('p');
description.textContent = 'Welcome';

document.querySelector("#testButton").addEventListener('click', handleClick);

function handleClick() {
    console.log("Thank you for clicking!");
}