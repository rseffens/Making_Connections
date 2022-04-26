function removeGrandparent(elem) {
    elem.parentNode.parentNode.remove()
}

function nameChange(elem) {
    var youName = document.querySelector(elem);
    youName.innerText = "Anastasia Beavherhousen"
}

// var count = 2;
// var countElement = document.querySelector(".badge");

// function reduce(count) {
//     count--;
//     countElement.innerText= count;
//     console.log(count)
// }
var requestAmount = document.querySelector("#requestAmount")
var connectionAmount = document.querySelector("#connectionAmount")

function acceptRequest(elem){
    requestAmount.innerText = requestAmount.innerText - 1
    connectionAmount.innerText = parseInt(connectionAmount.innerText) + 1
    removeGrandparent(elem)
}

function rejectRequest(elem) {
    // var requestAmount = document.querySelector("#requestAmount")
    requestAmount.innerText = requestAmount.innerText - 1
    removeGrandparent(elem)
}

function handleRequest(elem, action) {
    if (action ==="accept"){
        connectionAmount.innerText = parseInt(connectionAmount.innerText) + 1
    }
    requestAmount.innerText = requestAmount.innerText - 1
    removeGrandparent(elem)
}