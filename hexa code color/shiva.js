let inputField = document.getElementById("input")
let messageBox = document.getElementById("messageBox")
let submitBtn = document.getElementById("submit")
let parentBox = document.getElementById("parent")

submitBtn.addEventListener("click", e => {
    let hexColor = inputField.value
    if (!(/^#[0-9A-F]{6}$/i.test(hexColor))) {
        messageBox.innerText = "Please Enter a Valid Hex Color!"
        inputField.style.borderColor = "red"
    }
    else {
        parentBox.style.backgroundColor = hexColor
        messageBox.innerText = ""
    }
})

inputField.addEventListener("click", e => {
    messageBox.innerText = ""
    inputField.style.borderColor = ""
})