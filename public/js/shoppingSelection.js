const shoppingForm = document.querySelector('.shopping-form');
const allItems = document.querySelector('.item-list').childNodes;
const selected = [];
const submitButton = document.querySelector('.submit-button');
const shoppingList = document.querySelector(".shopping-list");
const shoppingListWrapper = document.querySelector(".shopping-list--wrapper")



const toggleItem = (itemName, itemValue, classList) => {
    if (!selected.includes(itemValue)) {
        if (selected.length === 0) {
            submitButton.classList.remove("hidden");
            shoppingListWrapper.classList.remove("hidden")
        }
        selected.push(itemValue);
        const newInput = document.createElement('input');
        newInput.type = 'hidden';
        newInput.classList.add("input" + itemValue);
        newInput.name = 'product'
        newInput.value = itemValue;
        shoppingForm.appendChild(newInput)

        const listItem = document.createElement("li");
        listItem.dataset.name = itemName;
        listItem.innerText = itemName;
        shoppingList.appendChild(listItem);

    } else {
        if (selected.length === 1) {
            submitButton.classList.add("hidden");
            shoppingListWrapper.classList.add("hidden");
        }
        const elemToDelete = document.querySelector('.input' + itemValue);
        elemToDelete.parentNode.removeChild(elemToDelete);
        const indexToDelete = selected.indexOf(itemValue);
        selected.splice(indexToDelete, 1);

        const listItemDelete = document.querySelector(".shopping-list [data-name='" + itemName + "']")
        listItemDelete.parentNode.removeChild(listItemDelete);
    }
    classList.toggle("selected-item")
}
allItems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        toggleItem(e.currentTarget.dataset.name, e.currentTarget.dataset.value, e.currentTarget.classList)
    })
})