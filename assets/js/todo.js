const dueDateElement = document.querySelector('.js-due-date')
const inputElement = document.querySelector('.js-input')

const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'sope tie',
    dueDate: '2020-05-25'
},
{
    name: 'tesco',
    dueDate: '2022-05-15'
}];

displayTodo()
function displayTodo() {
    let todoListHtml = ''
    for (let i = 0; i < todoList.length; i++) {
        let todo = todoList[i];
        //const name = todo.name;
        //const dueDate = todo.dueDate;
        const { name, dueDate } = todo
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
        todoList.splice(${i}, 1);
        displayTodo();
        ">
        delete</button>
        
        `;

        todoListHtml += html
    }
    document.querySelector('.js-todolist').innerHTML = todoListHtml;
    saveToStorage()
}


function addTodo() {
    const inputElement = document.querySelector('.js-input')
    const name = inputElement.value;
    const dueDateElement = document.querySelector('.js-due-date')
    const dueDate = dueDateElement.value
    todoList.push({
        name, dueDate
    })
    console.log(todoList);

    inputElement.value = ''
    dueDateElement.value = ''

    displayTodo();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}

inputElement.addEventListener('keypress', function (event) {
    if (inputElement.value.length > 1 && event.which === 13) {
        addTodo()

    }
    displayTodo()
})
dueDateElement.addEventListener('keypress', function (event) {
    if (dueDateElement.value.length > 1 && event.which === 13) {
        addTodo()

    }
    displayTodo()
})



