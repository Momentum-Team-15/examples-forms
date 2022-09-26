let form = document.querySelector('#sign-up-form')
let nameField = document.querySelector('#player-name')
let pronounField = document.querySelector('#pronouns')

form.addEventListener('submit', (event) => {
    event.preventDefault()
    // let data = new FormData(form)
    // data.append('name', nameField.value)
    console.log(nameField.value)
})