const nameArray=[] //create a list to store names


function addName(){
//get a trimmed version of the name from input box
const nameInput = document.getElementById('nameInput')
const name = nameInput ('nameInput').value.trim()
//adds to the end of list)
nameArray.push(name)
displayNames()
}

function displayNames() {
    
}

document.getElementById('addNameBtn').addEventListener('click', addName)
