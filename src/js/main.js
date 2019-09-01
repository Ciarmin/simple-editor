"use strict";




const editorArea = document.querySelector('.editor__textarea--js');
const saveText = document.querySelector('.editor__button--save-js');
const loadText = document.querySelector('.editor__button--load-js');

saveText.addEventListener('click', () => {
    localStorage.setItem('textinput' , editorArea.value); // ustawia argument o wartosci ,która bd zawierać textarea do localStorge .

} );

loadText.addEventListener('click', () => {
    editorArea.value = localStorage.getItem('textinput'); // pobiera z localstorage 
  });
