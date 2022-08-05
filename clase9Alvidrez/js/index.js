

// EVENTO PARA CONTADOR DE PRODUCTOS

let decrease = document.querySelector('.decrease')
let add = document.querySelector ('.add')
let cantText = document.querySelector ('.cant-text')

let counter = 0


decrease.onclick = (ev) => {

    counter -= 1
    cantText.innerText = counter
}

add.onclick = (ev) => {

    counter += 1
    cantText.innerText = counter
}


// EVENTO PARA MENSAJE EXITOSO

let buyButton = document.querySelector('.buy-onclick')

let titlesContainer = document.querySelector('.titles-container')
let successMessage = document.querySelector('.success-message')

buyButton.onclick = (ev) => {

    titlesContainer.classList.toggle('success-message')
    successMessage.classList.toggle('show-message')
    
}