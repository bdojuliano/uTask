const taskTittleInput = document.querySelector("#new-task-tittle-form")

const taskDescriptionInput = document.querySelector("#new-task-description-form")

const toDoTaskList = document.querySelector("#to-do-task-list")

const doingTaskList = document.querySelector("#doing-task-list")

const doneTaskList = document.querySelector("#done-task-list")

const SliderNext = document.querySelector("#slider-next")

const SliderBack = document.querySelector("#slider-back")

const ToDo = document.querySelector("#to-do")

const Doing = document.querySelector("#doing")

const Done = document.querySelector("#done")

const todos = []

const doings = []

const dones = []

let currentTask = 0

let itensCarousel = Array.from(document.querySelectorAll(".task-list-content"));

window.addEventListener("resize", handleWindowResize);

function handleWindowResize() {
    const WindowWidth = window.innerWidth;
    if (WindowWidth < 480) {
      ToDo.style.display = "block";
      Doing.style.display = "none";
      Done.style.display = "none";
    }  
    else{
      ToDo.style.display = "block";
      Doing.style.display = "block";
      Done.style.display = "block";
    }
}

function showTasks(){
    let toDoItens = ""
    console.log(todos)
    todos.forEach((todo, index) => {
        toDoItens += `<li id="to-do-${index}" class="task">
                <div id="to-do-task-content">
                    <label for="${index}">
                        <h1 id="to-do-task-name" class="task-name"><strong>${todo.tittle}</strong></h1>
                    <details onclick = "SeeDescriptionToDo(${index})">
                        <summary id="to-do-see-description-${index}" class="see-description">
                            <p> Ler descrição </p>
                            <span id="see-description-icon" class="material-icons-outlined">expand_more</span>
                        </summary>
                        <p class="description">${todo.description}</p>
                    </details>
                    </label>
                </div>
                <div id="to-do-task-icons" class="task-icons"> 
                    <div id="to-do-card-settings">
                        <button id="to-do-see-more" class="see-more" onclick = "ToDoShowDelete(${index})">
                            <span class="material-icons-outlined">more_vert</span>
                        </button>
                        <div id="to-do-delete-${index}" class="" onclick = "DeleteToDo(${index})">
                            <span id="to-do-delete-icon-${index}" class="material-icons-outlined">delete_outline</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <button onclick="ToDoNextFunction(${index})" id="to-do-navigate-next" class="left-button"> 
                        <span class="material-icons-outlined">navigate_next</span>
                    </button>
                </div>
            </li>`
    })
   
    if (toDoTaskList) toDoTaskList.innerHTML = toDoItens

    let doingItens = ""
    doings.forEach((doing, index) => {
        doingItens += `<li id="doing-task" class="task">
                    <div id="doing-task-content">
                        <label for = "${index}">
                            <h1 id="doing-task-name" class="task-name">${doing.tittle}</h1>
                            <details onclick = "SeeDescriptionDoing(${index})">
                                <summary id="doing-see-description-${index}" class="see-description">
                                    <p>Ler descrição</p>
                                    <span id="see-description-icon" class="material-icons-outlined">expand_more</span>
                                </summary>
                                <p class="description">${doing.description}</p>
                            </details>
                        </label>
                    </div>
                    <div id="doing-task-icons" class="task-icons">
                        <div id="doing-card-settings">
                            <button id="doing-see-more" class="see-more" onclick = "DoingShowDelete(${index})">
                                <span class="material-icons-outlined">more_vert</span>
                            </button>
                                <div id="doing-delete-${index}" class="" onclick = "DeleteDoing(${index})">
                                    <span id="doing-delete-icon-${index}" class="material-icons-outlined">delete_outline</span>
                                    <p>Excluir</p>
                                </div>
                        </div>
                        <diV id="navigate">
                            <button onclick = "DoingBackFunction(${index})" id="doing-navigate-before" class="right-button">
                                <span class="material-icons-outlined">navigate_before</span>
                            </button>
                            <button onclick = "DoingNextFunction(${index})" id="doing-navigate-next" class="left-button">
                                <span class="material-icons-outlined">navigate_next</span>
                            </button>
                        </diV>
                        </div>
                    </div>
                </li>`
    })

    if (doingTaskList) doingTaskList.innerHTML = doingItens 

    let doneItens = ""
    dones.forEach((done,index) => {
        doneItens += `<li id="done-task" class="task">
                <div id="done-task-content">
                    <label for="${index}">
                        <h1 id="done-task-name" class="task-name">${done.tittle}</h1>
                        <details onclick="SeeDescriptionDone(${index})">
                            <summary id="done-see-description-${index}" class="see-description">
                                <p>Ler descrição</p>
                                <span id="see-description-icon" class="material-icons-outlined">expand_more</span>
                            </summary>
                            <p class="description">${done.description}</p>
                        </details>
                    </label>
                </div>
                <div id="done-task-icons" class="task-icons">
                    <div id="done-card-settings">
                        <button id="done-see-more" class="see-more" onclick = "DoneShowDelete(${index})">
                            <span class="material-icons-outlined">more_vert</span>
                        </button>
                        <div id="done-delete-${index}" class="" onclick = "DeleteDone(${index})">
                            <span id="done-delete-icon-${index}" class="material-icons-outlined">delete_outline</span>
                            <p>Excluir</p>
                        </div>
                    </div>
                    <div>
                        <button onclick = "DoneBackFunction(${index})" id="done-navigate-before" class="right-button">
                            <span class="material-icons-outlined">navigate_before</span>
                        </button>
                        <button onclick = "DoneReplayFunction(${index})" id="done-replay" class="left-button">
                            <span class="material-icons-outlined">replay</span>
                        </button>
                    </div>
                </div>
            </li>`
    })

    if(doneTaskList) doneTaskList.innerHTML = doneItens
}

let ToDoNextFunction = (index) =>{
    const task =  todos.splice(index, 1)
    doings.push(task[0])
    showTasks()
}

let DoingBackFunction = (index) =>{
    const task = doings.splice(index, 1)
    todos.push(task[0])
    showTasks()
}

let DoingNextFunction = (index) =>{
    const task = doings.splice(index, 1)
    dones.push(task[0])
    showTasks()
}

let DoneBackFunction = (index) =>{
    const task = dones.splice(index, 1)
    doings.push(task[0])
    showTasks()
}

let DoneReplayFunction = (index) =>{
    const task = dones.splice(index, 1)
    todos.push(task[0])
    showTasks()
}

let DeleteToDo = (index) =>{
    todos.splice(index, 1)
    showTasks()
}

let DeleteDoing = (index) => {
    doings.splice(index, 1)
    showTasks()
}

let DeleteDone = (index) => {
    dones.splice(index, 1)
    showTasks()
}

let showCurrentTask = () => {
    if (currentTask > 2) {
        currentTask = 0
      }

    if (currentTask < 0 ){
        currentTask = 2
    }
    if (currentTask == 0){
        ToDo.style.display = 'block'
        Doing.style.display  = 'none'
        Done.style.display = 'none'
    }
    else if (currentTask == 1){
        ToDo.style.display = 'none'
        Doing.style.display  = 'block'
        Done.style.display = 'none'
    }
    else if (currentTask == 2){
        ToDo.style.display = 'none'
        Doing.style.display  = 'none'
        Done.style.display = 'block'
    }
};

SliderNext.addEventListener("click", () => {
    currentTask++
    showCurrentTask()
})

SliderBack.addEventListener("click", () => {
    console.log(currentTask)
    currentTask--
    showCurrentTask()
  })


addTask = () =>{
    let taskTittle = taskTittleInput.value
    let taskDescription = taskDescriptionInput.value
    if(taskTittle == 0){
        alert("Campo obrigatório vazio.")
        return
    }
    taskTittleInput.value = ""
    taskDescriptionInput.value = ""
    let taskInfo = {tittle: taskTittle, description: taskDescription}
    todos.push(taskInfo);
    showTasks()
    
}

const createTask = document.getElementById("create-task")
createTask.onclick = addTask


handleWindowResize();