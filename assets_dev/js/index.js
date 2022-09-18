const menu_hamburguer = document.querySelector('.icon-mobile');
const menu = document.querySelector('.header-menu__mobile');
const form = document.getElementById('formContato');
const toast_container =  document.querySelector('.contact-toast');
const toast_icon =  document.querySelector('.toast-icon');
const toast_message =  document.querySelector('.toast-message');
const button_enviar_form = document.querySelector('.enviar-form');
const input_telephone = document.querySelector('input[name="telephone"]'); 
const BASE_URL = window.location.origin; 

console.log(BASE_URL);

menu_hamburguer.addEventListener('click', () => {
  const active = menu.classList.toggle('header-menu__mobile--active');
  const icon  = menu_hamburguer.querySelector('i');
  if (!active) {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
    return;
  }
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-xmark');
});

function removeToast (time = 3000) {
  setTimeout(function() {
    toast_container.style.display = 'none';
  }, time);
}

function Toast (tipo, messagem) {
  if (!(tipo != 'danger') || !(tipo != 'success')) {
    const danger = tipo == 'danger'
    const class_remove =  danger ? 'success' : 'danger';
    toast_container.classList.remove(class_remove);
    toast_container.classList.add(tipo);
    toast_message.innerHTML = messagem;
    toast_icon.innerHTML = danger ? '<i class="fa-solid fa-close"></i>' : '<i class="fa-solid fa-check"></i>';
    toast_container.style.display = 'flex';
    removeToast();
  }
}

async function sendEmail(event) {
  event.preventDefault();
  button_enviar_form.innerHTML = '<img src="./assets/img/load.svg" alt="Carregando...">';
  button_enviar_form.disabled = true;
  const formData = new FormData(this);
  const data = JSON.stringify(Object.fromEntries(formData))
  const email = await fetch(`${BASE_URL}/api/send_email`, {
    body: data,
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
  });
  const resp = await email.json();
  button_enviar_form.innerHTML = 'Enviar';
  button_enviar_form.disabled = false;
  Toast(resp.tipo, resp.mensagem);
}

function mask(){
  let input = this;
  setTimeout(function() {
    input.value = maskTel(input.value);
  }, 1);
}

function maskTel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

input_telephone.addEventListener('keyup', mask);
form.addEventListener('submit', sendEmail);