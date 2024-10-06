let todoList = [];
todoDisplay();

function clicked(){
    let iElement = document.querySelector('#textarea');
    let todoItem = iElement.value;
   
    todoList.push(todoItem);
    console.log(todoList);
    iElement.value = '';

    todoDisplay();
}

function todoDisplay(){
    let cElement = document.querySelector('container');

    let newHtml = '';
    for (let i = 0; i< todoList.length; i++){
    newHtml = `
    <p>${todoList[i]}</p>
    <button>Delete</button> `;
    }
    cElement.innerHTML = newHtml;
}
