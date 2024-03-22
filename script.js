const nameArray=[] //create a list to store names


function addName(){
//get a trimmed version of the name from input box
const name = document.getElementById ('nameInput').value.trim()
//adds to the end of list)
nameArray.push(name) 
}
document.getElementById('addNameBtn').addEventListener('click', addName)