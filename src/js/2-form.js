import '../css/index.css'
import '../css/form.css'

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', onSubmit)
form.addEventListener('input', saveData)

setValuesAfterReload()

function onSubmit(e){
  e.preventDefault()

  console.log(Object.fromEntries(new FormData(form)));
  email.value = '';
  message.value = '';
  localStorage.removeItem('feedback-form-state');
}

function saveData(e){
  const data = new FormData(form)

  localStorage.setItem('feedback-form-state', JSON.stringify(Object.fromEntries(data)))
}

function setValuesAfterReload(){
  let data = {}

  if(localStorage.getItem('feedback-form-state') !== null) {
    data = JSON.parse(localStorage.getItem('feedback-form-state'))
  }

  if(data.hasOwnProperty('email') && data.email !== ''){
    email.value = data.email
  }

  if(data.hasOwnProperty('message') && data.message !== ''){
    message.value = data.message
  }
}
