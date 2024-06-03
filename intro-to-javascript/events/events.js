let button = document.querySelector('#btn1');
let greeting = document.querySelector('#greeting');
let input = document.querySelector('#name-input');

button.addEventListener('click', () => {
    greeting.textContent = "Hello " + input.value + "  How are you doing today?  Have a good day!  Yechi Hamelech";
})

input.addEventListener('input', () => {
    let inputValue = input.value;
    console.log("Input field canged. New value: " + inputValue);
});

