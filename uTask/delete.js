const ToDoShowDelete = (index) =>{
    const deleteToDo = document.getElementById(`to-do-delete-${index}`)
    deleteToDo.classList.add("show")
    window.addEventListener("click", toDoCloseDelete)
}


const toDoCloseDelete = (event) =>{
    const deleteToDo = document.getElementById("to-do-delete")
    if(event.target == deleteToDo){
        toDoHideDelete()
    }
}

const toDoHideDelete = () =>{
    const deleteToDo = document.getElementById("to-do-delete")
    deleteToDo.classList.remove("show")
    window.removeEventListener("click", toDoCloseDelete)
}


const DoingShowDelete = (index) =>{
    const deleteDoing = document.getElementById(`doing-delete-${index}`)
    deleteDoing.classList.add("show")
    window.addEventListener("click", doingCloseDelete)
}


const doingCloseDelete = (event) =>{
    const deleteDoing = document.getElementById("doing-delete")
    if(event.target == deleteDoing){
        doingHideDelete()
    }
}

const doingHideDelete = () =>{
    const deleteDoing = document.getElementById("doing-delete")
    deleteDoing.classList.remove("show")
    window.removeEventListener("click", doingCloseDelete)
}

const DoneShowDelete = (index) =>{
    const deleteDone = document.getElementById(`done-delete-${index}`)
    deleteDone.classList.add("show")
    window.addEventListener("click", doneCloseDelete)
}

const doneCloseDelete = (event) =>{
    const deleteDone = document.getElementById("done-delete")
    if(event.target == deleteDone){
        doneHideDelete()
    }
}

const doneHideDelete = () =>{
    const deleteDone = document.getElementById("done-delete")
    deleteDoing.classList.remove("show")
    window.removeEventListener("click", doneCloseDelete)
}

