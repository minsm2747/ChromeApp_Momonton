const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input");
    todoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDo(text) {
    // console.log(text);
    const li =  document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.value = ""
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text
        li.appendChild(span);
        li.appendChild(delBtn);
        toDoList.appendChild(li);
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS_LS);
        // if (toDos === null) {

        // } else {

        // }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();