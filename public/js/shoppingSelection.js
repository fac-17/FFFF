const shoppingForm = document.querySelector('.shopping-form');
const allItems = document.querySelector('.item-list').childNodes;
const selected = [];
const submitButton = document.querySelector('.submit-button');
const shoppingList = document.querySelector(".shopping-list");
const shoppingListWrapper = document.querySelector(".shopping-list--wrapper")

// add/remove a named class to/from an array of elements
const addRemoveClasses = (addRemove, elemArray, className) => {
    elemArray.forEach(elem => {
        if (addRemove === 'add') {
            elem.classList.add(className);
        }
        else if (addRemove === 'remove') {
            elem.classList.remove(className);
        }
    })
}
const removeHidden = (elemArray) => {
    addRemoveClasses('remove', elemArray, 'hidden');
}
const addHidden = (elemArray) => {
    addRemoveClasses('add', elemArray, 'hidden');
}

const appendToForm = (form, itemValue) => {
    const newInput = document.createElement('input');
    newInput.type = 'hidden';
    newInput.classList.add("input" + itemValue);
    newInput.name = 'product'
    newInput.value = itemValue;
    form.appendChild(newInput)
}

const appendToList = (list, itemName) => {
    const listItem = document.createElement("li");
    listItem.dataset.name = itemName;
    listItem.innerText = itemName;
    list.appendChild(listItem);
}

const toggleItem = (itemName, itemValue, classList) => {
    if (!selected.includes(itemValue)) {
        if (selected.length === 0) {
            removeHidden([submitButton, shoppingListWrapper])
        }
        selected.push(itemValue);
        appendToForm(shoppingForm, itemValue);
        appendToList(shoppingList, itemName);


    } else {
        if (selected.length === 1) {
            submitButton.classList.add("hidden");
            shoppingListWrapper.classList.add("hidden");
            addHidden([submitButton, shoppingListWrapper]);
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

