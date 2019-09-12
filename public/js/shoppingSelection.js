const appleButton = document.querySelector('.add-apple');
const shoppingForm = document.querySelector('.shopping-form');
const allItems = document.querySelector('.item-list').childNodes;
console.log(allItems);

// appleButton.addEventListener('click', () => {
//     const newInput = document.createElement('input');
//     newInput.type = 'text';
//     newInput.name = 'product';
//     newInput.value = 'Apple';
//     shoppingForm.appendChild(newInput)
// })

allItems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        console.log(e.target);
    })
})