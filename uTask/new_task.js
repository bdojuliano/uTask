const showModal = () =>{
    const modal = document.getElementById("new-task")
    modal.classList.add("show")
}

const openModal = document.getElementById("add-task")
openModal.onclick = showModal

const hideModal = () =>{
    const modal = document.getElementById("new-task")
    modal.classList.remove("show")
}

const closeModal = document.getElementById("modal-close")
closeModal.onclick = hideModal