function SeeDescriptionToDo(index){
    console.log("oi")
    const seeDescription = document.getElementById(`to-do-see-description-${index}`)
    if(seeDescription.parentElement.open){
        seeDescription.children[0].innerHTML = "Ler descrição"
    }
    else{
        seeDescription.children[0].innerHTML = "Esconder descrição"
    }
}

function SeeDescriptionDoing(index){
    const seeDescription = document.getElementById(`doing-see-description-${index}`)
    if(seeDescription.parentElement.open){
        seeDescription.children[0].innerHTML = "Ler descrição"
    }
    else{
        seeDescription.children[0].innerHTML = "Esconder descrição"
    }
}

function SeeDescriptionDone(index){
    const seeDescription = document.getElementById(`done-see-description-${index}`)
    if(seeDescription.parentElement.open){
        seeDescription.children[0].innerHTML = "Ler descrição"
    }
    else{
        seeDescription.children[0].innerHTML = "Esconder descrição"
    }
}