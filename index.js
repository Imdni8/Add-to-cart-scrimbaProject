//DOM elements
const addBtn = document.getElementById("add-button") //Add to Cart button
const textField = document.querySelector("#input-field") //text field

//functions
function addToList() {
    console.log(textField.value)
}

//Events
addBtn.addEventListener("click", addToList)