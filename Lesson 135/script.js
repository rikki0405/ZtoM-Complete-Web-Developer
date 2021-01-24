// Lesson 135 - Exercise: DOM Events - Updated Shopping List
// 2021/01/24 - Rikki Jones

var btnAddItem = document.getElementById("enter");
var inputItemName = document.getElementById("userinput");
var listShopping = document.getElementsByTagName("li");
var ulShoppingList = document.querySelector("ul");

// Attach EventListener to each default List Item
for (var i = 0; i < listShopping.length; i++) {
    listShopping[i].addEventListener("click", toggleDone);
    var btnDelete = addDeleteButton();
    listShopping[i].appendChild(btnDelete);
}

// Functions
function addDeleteButton() {
    var btnDelete = document.createElement("button");
    btnDelete.innerHTML = "Delete";
    btnDelete.addEventListener("click", deleteListItem);
    btnDelete.style.visibility = "hidden";
    return btnDelete;
}

function inputLength() {
    return inputItemName.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(inputItemName.value));
    li.addEventListener("click", toggleDone);
    var btnDelete = addDeleteButton();
    li.appendChild(btnDelete);
    ulShoppingList.appendChild(li);
    inputItemName.value ="";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(e) {
    if (inputLength() > 0 && e.which === 13) { // KeyPress 13 = Enter Key
        createListElement();
    }
}

function toggleDone() {
    this.classList.toggle("done");
    if (this.childNodes[1].style.visibility != "visible") { // if true
        this.childNodes[1].style.visibility = "visible";
    } else  {
        this.childNodes[1].style.visibility = "hidden";
    }
}

function deleteListItem() {
    this.parentNode.remove();
}

btnAddItem.addEventListener("click", addListAfterClick);
inputItemName.addEventListener("keypress", addListAfterKeypress);
