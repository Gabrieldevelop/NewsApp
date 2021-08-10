let secondary = document.getElementById('secondary');
let form = document.querySelector('.form');

secondary.onclick = () =>{
    form.classList.toggle('form-toggle');
    secondary.classList.toggle('fa-times');
}

let menu = document.querySelector('#menu');
let container = document.querySelector('.container');

menu.addEventListener('click', function(){
    container.classList.toggle('containerActive');
});



