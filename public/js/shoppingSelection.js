const appleButton = document.querySelector('.add-apple');
const shoppingForm = document.querySelector('.shopping-form');

appleButton.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'product';
    newInput.value = 'Apple';
    shoppingForm.appendChild(newInput)
})