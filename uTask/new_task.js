const showModal = () =>{
    const modal = document.getElementById("new-task")
    modal.classList.add("show")
    window.addEventListener("click", closeModalOnOutsideClick)
}

const openModal = document.getElementById("add-task")
if (openModal) openModal.onclick = showModal

const closeModalOnOutsideClick = (event) =>{
    const modal = document.getElementById("new-task")
    if(event.target == modal){
        hideModal()
    }
}

const hideModal = () =>{
    const modal = document.getElementById("new-task")
    modal.classList.remove("show")
    window.removeEventListener("click", closeModalOnOutsideClick)
}

const closeModal = document.getElementById("nt-modal-close")
closeModal.onclick = hideModal
