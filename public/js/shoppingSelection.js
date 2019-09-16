const shoppingForm = document.querySelector('.shopping-form');
const allItems = document.querySelector('.item-list').childNodes;
const selected = [];
const submitButton = document.querySelector('.submit-button');

allItems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (!selected.includes(e.currentTarget.dataset.value)) {
            if (selected.length === 0) {
                submitButton.classList.remove("hidden");
            }
            selected.push(e.currentTarget.dataset.value);
            const newInput = document.createElement('input');
            newInput.type = 'hidden';
            newInput.classList.add("input" + e.currentTarget.dataset.value);
            newInput.name = 'product'
            newInput.value = e.currentTarget.dataset.value;
            shoppingForm.appendChild(newInput)

            const shoppingList = document.querySelector(".shopping-list");
            const listItem = document.createElement("li");
            listItem.dataset.name = e.currentTarget.dataset.name;
            listItem.innerText = e.currentTarget.dataset.name;
            shoppingList.appendChild(listItem);

        } else {
            if (selected.length === 1) {
                submitButton.classList.add("hidden");
            }
            const elemToDelete = document.querySelector('.input' + e.currentTarget.dataset.value);
            elemToDelete.parentNode.removeChild(elemToDelete);
            const indexToDelete = selected.indexOf(e.currentTarget.dataset.value);
            selected.splice(indexToDelete, 1);

            const listItemDelete = document.querySelector(".shopping-list [data-name='" + e.currentTarget.dataset.name + "']")
            listItemDelete.parentNode.removeChild(listItemDelete);
        }
        e.currentTarget.classList.toggle("selected-item")
    });
})
