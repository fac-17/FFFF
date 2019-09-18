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
// remove the class hidden from a specified element
const removeHidden = (elemArray) => {
    addRemoveClasses('remove', elemArray, 'hidden');
}
// add the class hidden from a specified element
const addHidden = (elemArray) => {
    addRemoveClasses('add', elemArray, 'hidden');
}
// create an input with value itemValue and append a given value to the hidden form
const appendToForm = (form, itemValue) => {
    const newInput = document.createElement('input');
    newInput.type = 'hidden';
    newInput.classList.add("input" + itemValue);
    newInput.name = 'product'
    newInput.value = itemValue;
    form.appendChild(newInput)
}

// create a list item with name/text itemName and append a given value to the shopping list
const appendToList = (list, itemName) => {
    const listItem = document.createElement("li");
    listItem.dataset.name = itemName;
    listItem.innerText = itemName;
    list.appendChild(listItem);
}

// Remove an item from the shopping list 
const deleteListItem = (itemName) => {
    const listItemDelete = document.querySelector(".shopping-list [data-name='" + itemName + "']")
    listItemDelete.parentNode.removeChild(listItemDelete);
}
// Remove a given input elem from the hidden form 
const deleteElem = (itemValue) => {
    const elemToDelete = document.querySelector('.input' + itemValue);
    elemToDelete.parentNode.removeChild(elemToDelete);
    const indexToDelete = selected.indexOf(itemValue);
    selected.splice(indexToDelete, 1);
}
// when an unselected shopping item is clicked, if it's first item, 
// reveal the submit button & shopping list
// update the list of selected values and call updateForm, updateList
const addShoppingItem = (itemName, itemValue) => {
    if (selected.length === 0) {
        removeHidden([submitButton, shoppingListWrapper])
    }
    selected.push(itemValue);
    appendToForm(shoppingForm, itemValue);
    appendToList(shoppingList, itemName);
}
// when an item already selected is clicked, if it's the only item selected, 
// hide submit button and shopping list Then delete the hidden input form and the
// list item from the shopping list
const removeShoppingItem = (itemName, itemValue) => {
    if (selected.length === 1) {
        addHidden([submitButton, shoppingListWrapper]);
    }
    deleteElem(itemValue);
    deleteListItem(itemName);
}
// main function to check if an item has been selected already and to respond appropriately
// Then toggle the selected-item class. 
const toggleItem = (itemName, itemValue, classList) => {
    if (!selected.includes(itemValue)) {
        addShoppingItem(itemName, itemValue);
    } else {
        removeShoppingItem(itemName, itemValue);
    }
    classList.toggle("selected-item");
}

// add toggle item event listener to each item that can be bought
allItems.forEach(elem => {
    elem.addEventListener('click', (e) => {
        toggleItem(e.currentTarget.dataset.name, e.currentTarget.dataset.value, e.currentTarget.classList)
    })
})

