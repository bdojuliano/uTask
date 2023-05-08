const taskTittleInput = document.querySelector("#new-task-tittle-form")

const taskDescriptionInput = document.querySelector("#new-task-description-form")

const taskList = document.querySelector("#a-fazer-task-list")

function showTodo(){
    let todos = JSON.parse(localStorage.getItem("todo-list"))
    console.log(todos)
    let li = ""
    todos?.forEach((todo, id) => {
        li += `<li id="a-fazer-task">
                <div id="a-fazer-task-content">
                    <label for="${id}">
                        <h1 id="task-name"><strong>${todo.tittle}</strong></h1>
                    </label>
                    <div id="description">
                        <p id="see-description">Ler descrição</p>
                        <button id="see-description-icon">
                            <span class="material-icons-outlined">
                                expand_more
                            </span>
                        </button>
                    </div>
                </div>
                <div id="a-fazer-task-icons"> 
                    <button id="see-more">
                        <span class="material-icons-outlined">
                            more_vert
                        </span>
                    </button>
                    <button id="navigate-next"> 
                        <span class="material-icons-outlined">
                            navigate_next
                        </span>
                    </button>
                </div>
            </li>`
    })
    console.log(taskList)
    if (taskList) taskList.innerHTML = li
}

showTodo()

addTask = () =>{
    console.log("7")
    let taskTittle = taskTittleInput.value
    let taskDescription = taskDescriptionInput.value
    if(taskTittle == 0){
        alert("Campo obrigatório vazio! :(")
        return
    }
    console.log(taskTittle)
   
    let todos = JSON.parse(localStorage.getItem("todo-list"))

    if(!todos){ 
        todos = [];
    }

    taskTittleInput.value = ""
    taskDescriptionInput.value = ""
    let taskInfo = {tittle: taskTittle, descriprion: taskDescriptionInput, status: "a-fazer"}
    todos.push(taskInfo);
    localStorage.setItem("todo-list", JSON.stringify(todos))
    showTodo()
    
}

const createTask = document.getElementById("create-task")
createTask.onclick = addTask