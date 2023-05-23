const showFddModal = () =>{
    const fddModal = document.getElementById("fdd-responsive")
    fddModal.classList.add("show")
    window.addEventListener("click", closeFddModalOnOutsideClick)
}

const openFddModal = document.getElementById("frase-do-dia")
openFddModal.onclick = showFddModal


const closeFddModalOnOutsideClick = (event) =>{
    const modal = document.getElementById("fdd-responsive")
    if(event.target == modal){
        hideFddModal()
    }
}

const hideFddModal = () =>{
    const fddModal = document.getElementById("fdd-responsive")
    fddModal.classList.remove("show")
    window.removeEventListener("click", closeFddModalOnOutsideClick)
}

const closeFddModal = document.getElementById("fdd-modal-close")
closeFddModal.onclick = hideFddModal