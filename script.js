console.log('hola mundo');
const btnsOpenModal = document.querySelectorAll('.btn-modal')
const btnClose = document.querySelector('.btn-modal__close')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
// Quitar las clases hidden de modal y overlay
const openModal = () => {
    modal?.classList.remove('hidden')
    overlay?.classList.remove('hidden')
}

const closeModal = () => {
    modal?.classList.add('hidden')
    overlay?.classList.add('hidden')
}
btnClose?.addEventListener('click', closeModal)
// Hacer un loop para que todos los botones abran el modal

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal)
    
}

overlay?.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal?.classList.contains('hidden')){
        console.log(e.key);
        closeModal()
    }
})

