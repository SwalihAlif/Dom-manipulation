
// Selecting Elements
const title = document.getElementById("title");
const output = document.getElementById("output");
const changeTitleBtn = document.getElementById("change-title");
const textInput = document.getElementById("text-input");
const updateTextsBtn = document.getElementById("update-text");
const itemList = document.getElementById("item-list");
const addItems = document.getElementById("add-item");
const removeItemButton = document.getElementById("remove-item");

// 1 changing content
changeTitleBtn.addEventListener("click", function() {
    title.innerText = "Title Changed!";
    output.innerText = "Title has been updated!";
    output.style.color = "green";
});

// 2 changing styles
updateTextsBtn.addEventListener("click", function() {
    const newText = textInput.value;
    if (newText.trim() !== "") {
        output.innerText = newText;
        output.style.fontSize = "22px";
        output.style.color = "red";
    } else {
        output.innerText = "Please enter text!";
        output.style.color = "black";
    }
});

// 3 creating & adding elements
addItems.addEventListener("click", function() {
    let newItem = document.createElement("li");
    newItem.innerText = `Item ${itemList.children.length + 1}`;
    itemList.appendChild(newItem);
    output.innerText = "Item Added."
    output.style.color = "brown"
});

// 4 removing elements
removeItemButton.addEventListener("click", function() {
    if (itemList.children.length > 0) {
        itemList.lastElementChild.remove();
        output.innerText = "Item Removed."
        output.style.color = "red"
    } else {
        output.innerText = "No items to remove!";
        output.style.color = "orange";
    }
});

// 5 event delegation (Handle clicks on all list items)

itemList.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        output.innerText = `You clicked: ${event.target.innerText}`;
        output.style.color = "purple";
        event.target.style.background = "#add"
    }
})