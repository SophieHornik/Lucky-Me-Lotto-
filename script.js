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
    const nameList = document.getElementById('nameList') //get ul (list) element
    nameList.innerHTML='' //clears list
        //i is counter variable that counts how many times we do loop
    for (let i=0; i < nameArray.length; i++) {
const name = nameArray[i] //get current name from array
const li = document.createElement('li')
li.className = 'list-group-item'
   
    const span = document.createElement('span')
    span.textContent = name
    li.appendChild(span)
nameList.appendChild(li)
}
 }
document.getElementById('addNameBtn').addEventListener('click', addName)
