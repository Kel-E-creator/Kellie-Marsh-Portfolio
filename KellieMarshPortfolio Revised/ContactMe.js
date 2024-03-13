const buttonSelected = document.querySelectorAll('.modal-toggle').forEach(buttonSelected => {
    buttonSelected.addEventListener ('click', toggleModal) 
})

function toggleModal(event) {
    // event.preventDefault();
    document.querySelector('.modal').classList.toggle('visible')
    document.querySelector('#overlay').classList.toggle('hidden')
}


const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const reasonInput = document.querySelector('#reason')
const formSubmit = document.querySelector('#submit')

nameInput.addEventListener('change', validateForm)
emailInput.addEventListener('change', validateForm)
reasonInput.addEventListener('change', validateForm)

const nameError = document.querySelector('#nameError')
const emailError = document.querySelector('#emailError')
const reasonError = document.querySelector('#reasonError')

function validateForm(e) {
    let formValid = true

    formSubmit.disabled = true

    nameError.classList.remove('error')
    emailError.classList.remove('error')
    reasonError.classList.remove('error')

    if (nameInput.value.length < 3) {
        formValid = false
        nameError.classList.add('error')
    }

    if (emailInput.value.length === 0 || emailInput.value.length > 200) {
        formValid = false
        emailError.classList.add('error')
    }

    if (reasonInput.value.length === 0 || reasonInput.value.length > 1000) {
        formValid = false
        reasonError.classList.add('error')
    }

    if (formValid) {
        formSubmit.disabled = false  
    }

}


formSubmit.addEventListener ('click', thankYou)

function thankYou(event) {
    
   document.querySelector("#contactForm").classList.toggle('hidden')
   document.querySelector('#thankYou').classList.toggle('hidden')
}










//how do i get the form to then submit? is it something to do with formSubmit.disabled = true then adding an if statement to make it true?



//const formSubmit = document.querySelector('.submit') function {
    //formSubmit.addEventListener ('click', thankYou)
//}


//function thankYou(event) {
  //  event.preventDefault();
    //document.querySelector('.hidden').classList.toggle('hidden.visible')