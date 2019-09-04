"use strict";



const editorArea = document.querySelector('.form__textarea--js');
const loadText = document.querySelector('.form__button--load-js');
const saveText = document.querySelector('.form__button--save-js');


saveText.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('message' , editorArea.value); // ustawia argument o wartosci ,która bd zawierać textarea do localStorge .

} )

loadText.addEventListener('click', (e) => {
    e.preventDefault();
    editorArea.value = localStorage.getItem('message'); // pobiera z localstorage 
  })

  console.log(editorArea);