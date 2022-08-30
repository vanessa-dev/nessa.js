const menu_hamburguer = document.querySelector('.icon-mobile');
const menu = document.querySelector('.header-menu__mobile');
const form = document.getElementById('formContato');
const toast_container =  document.querySelector('.contact-toast');
const toast_icon =  document.querySelector('.toast-icon');
const toast_message =  document.querySelector('.toast-message');

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

function Toast (tipo, messagem) {
  if (!(tipo != 'danger') || !(tipo != 'success')) {
    const danger = tipo == 'danger'
    const class_remove =  danger ? 'success' : 'danger';
    toast_container.classList.remove(class_remove);
    toast_container.classList.add(tipo);
    toast_message.innerHTML = messagem;
    toast_icon.innerHTML = danger ? '<i class="fa-solid fa-check"></i>' : '<i class="fa-solid fa-close"></i>';
    toast_container.style.display = 'flex';
  }
}

console.log(Toast('danger', 'Email não enviado.'));

async function sendEmail(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = JSON.stringify(Object.fromEntries(formData))
  const email = await fetch("http://localhost:3000/send-email", {
    body: data,
    headers: {
      'Content-Type': 'application/json'
    },
    method: "POST",
  });
  const resp = await email.json();
  console.log(resp);
}

form.addEventListener('submit', sendEmail);