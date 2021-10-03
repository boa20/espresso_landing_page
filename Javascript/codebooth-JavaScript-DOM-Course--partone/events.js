// function btnClick(e){
    // console.log("You clicked me")
    // console.log(e.clientX)
    // console.log(e.clientX)
    // console.log(e.shiftKey)
    
// }

// function btnClick(){
//     var heading = document.getElementById("header-title")
//     heading.innerText = "Coded"

//     let list = document.getElementsByTagName("li")
//     for(var i = 0; i < list.length; i++){
//         list[i].style.backgroundColor = "green"
//     }
// }

// let btn = document.querySelector("button")
// btn.addEventListener('click', btnClick)
// btn.addEventListener('dblclick', btnClick)
// btn.addEventListener('mousedown', btnClick)
// btn.addEventListener('mouseup', btnClick)

var form = document.querySelector("form")
var itemsList = document.querySelector("#items")
// console.log(form)

form.addEventListener("submit", btnClick)

function btnClick(e){
    e.preventDefault()
    // console.log(document.querySelector("#user-input").value)
    var userInput = document.querySelector("#user-input").value

    // create new list item
    var newli = document.createElement("li")
    newli.className = "list-group-item"

    // add textnode with input value
    newli.appendChild(document.createTextNode(userInput))

    // create a new button
    var deleteButton = document.createElement("button")

    // Give your button bootstrap class
    deleteButton.className = "btn btn-danger btn-sm float-right delete"

    deleteButton.appendChild(document.createTextNode("X"))

    // append to the bottom of list
    itemsList.appendChild(newli)
    itemsList.appendChild(deleteButton)
}

