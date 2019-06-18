// const myHeading = document.getElementById('myHeading');
// const myButton = document.getElementById('myButton');
// const myTextInput = document.getElementById('myTextInput');

// myButton.addEventListener('click', () => {
//     myHeading.style.color = myTextInput.value;
// });
const toggleList = document.getElementById('toggleList');

const listDiv = document.querySelector('.list');

const input = document.querySelector('input');

const p = document.querySelector('p.description');

const button = document.querySelector('button');

toggleList.addEventListener('click', () => {
    listDiv.style.display = 'none';
});


button.addEventListener('click', () => {
    p.textContent = input.value;
})

