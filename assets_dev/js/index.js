const menu_hamburguer = document.querySelector('.icon-mobile');
const menu = document.querySelector('.header-menu__mobile');
const form = document.getElementById('formContato');

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