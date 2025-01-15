const description = document.createElement('p');
description.textContent = 'Welcome';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector("#testButton");
    if (button) {
        button.addEventListener('click', handleClick);
    }
});

function handleClick() {
    console.log("Thank you for clicking!");
    alert("Button clicked! Check the console for more details.");
}