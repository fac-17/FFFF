const shoppingForm = document.querySelector('.shopping-form');
const allItems = document.querySelector('.item-list').childNodes;
const selected = [];

allItems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (!selected.includes(e.target.dataset.value)) {
            selected.push(e.target.dataset.value);
            const newInput = document.createElement('input');
            newInput.type = 'hidden';
            newInput.classList.add("input" + e.target.dataset.value);
            newInput.name = 'product'
            newInput.value = e.target.dataset.value;
            shoppingForm.appendChild(newInput)

            const shoppingList = document.querySelector(".shopping-list");
            const listItem = document.createElement("li");
            listItem.dataset.name = e.target.dataset.name;
            listItem.innerText = e.target.dataset.name;
            shoppingList.appendChild(listItem);
        } else {
            const elemToDelete = document.querySelector('.input' + e.target.dataset.value);
            elemToDelete.parentNode.removeChild(elemToDelete);
            const indexToDelete = selected.indexOf(e.target.dataset.value);
            selected.splice(indexToDelete, 1);


            const listItemDelete = document.querySelector(".shopping-list [data-name='"+e.target.dataset.name+"']")
            listItemDelete.parentNode.removeChild(listItemDelete);
        }
    });
})
