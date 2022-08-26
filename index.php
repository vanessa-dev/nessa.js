<!DOCTYPE html>
<html lang="PT-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Desenvolvedor Web com conhecimento nas seguintes tecnologias:HTML,CSS, LESS, JavaScript, Jquery, BootStrap, React, PHP, CodeIgniter...">
  <meta name="keywords" content="JavaScript, Jquery, React">
  <meta name="author" content="Vanessa Santana">
  <title>Desenvolvedor Web com foco em JavaScript</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,600&family=Roboto+Slab:wght@500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.min.css">
</head>
<body>
  <header class="header">
    <nav>
      <h1><a href="./">Nessa.js</a></h1>
      <ul class="header-menu__mobile">
        <li><a href="#technology">Tecnologias</a></li>
        <li><a href="#project">Projetos</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <a href="#" class="icon-mobile" aria-label="Menu mobile"><i class="fa-solid fa-bars"></i></a>
    </nav>
  </header>
  <main>
    <section aria-label="Introdução" class="introduction">
      <div>
        <p class="introduction-hello">OI! &#128075;</p>
        <h2 title="Eu sou Vanessa Santana">Eu sou Vanessa Santana</h2>
        <p class="introduction-job">
          Desenvolvedora Web &</br>
          Desenvolvedora JavaScript
        </p>
        <button class="primary-button">Currículo <i class="fa-solid fa-download"></i></button>
      </div>
      <div class="introduction-img">
        <img src="assets/img/introduction.svg" alt="Computador"/>
      </div>
    </section>
    <section aria-label="Tecnologias Usadas" class="tech" id="technology">
      <div class="titulo">
        <h2>Tecnologias <span>Usadas</span></h2>
        <span class="sublinhado"></span>
      </div>
      <div class="tech-used">
        <div class="tech-item">
          <i class="fa-brands fa-html5"></i>
          <p>HTML</p>
        </div>
        <div class="tech-item">
          <i class="fa-brands fa-css3-alt"></i>
          <p>Css</p>
        </div>
        <div class="tech-item">
          <i class="fa-brands fa-less"></i>
          <p>LESS</p>
        </div>
        <div class="tech-item">
          <i class="fa-brands fa-js"></i>
          <p>JavaScript</p>
        </div>
        <div class="tech-item">
          <i class="fa-solid fa-code"></i>
          <p>JQuery</p>
        </div>
        <div class="tech-item">
          <i class="fa-brands fa-react"></i>
          <p>React</p>
        </div>
        <div class="tech-item">
          <i class="fa-brands fa-php"></i>
          <p>PHP</p>
        </div>
        <div class="tech-item">
          <i class="fa-solid fa-code"></i>
          <p>CodeIgniter</p>
        </div>
        <div class="tech-item">
          <i class="fa-solid fa-code"></i>
          <p>MySql</p>
        </div>
      </div>
    </section>
    <section aria-label="Projetos realizados" class="projects" id="project">
      <div class="titulo">
        <h2>Meus <span>Projetos</span></h2>
        <span class="sublinhado"></span>
      </div>
      <div class="projects-cards">
        <div class="projects-card__item">
          <div class="projects-card__links">
            <a href="https://jrastro.com.br/"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <h3>JRastro</h3>
          <p>Uma aplicação Web com intuito de divulgar serviços de monitoramento de Veiculos: Moto, Carro e Caminhão.</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JQuery</li>
            <li>PHP</li>
          </ul>
        </div>
        <div class="projects-card__item">
          <div class="projects-card__links">
            <a href="https://github.com/vanessa-dev/projeto-bicicleta"><i class="fa-brands fa-github"></i></a>
            <a href="https://vanessa-dev.github.io/projeto-bicicleta"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
          </div>
          <h3>BickCraft</h3>
          <p>Uma aplicação Web para divilgar bicicletas feitas a mão, desenvolvido para praticar os conhecimentos de flexbox, prototipo do curso da Origamid. </p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <!-- <li>PHP</li> -->
          </ul>
        </div>
        <div class="projects-card__item">
          <div class="projects-card__links">
            <a href="https://github.com/vanessa-dev/todo-list"><i class="fa-brands fa-github"></i></a>
          </div>
          <h3>Todo-List</h3>
          <p>Uma aplicação Web de gerenciamento de tarefas, e possivel filtrar por tarefas cincluidas ou não. </p>
          <ul>
            <li>React</li>
          </ul>
        </div>
      </div>
      <a class="projects-mais" href="https://github.com/vanessa-dev?tab=repositories">Mais</a>
    </section>
    <section aria-label="Entre em contato" class="contact" id="contact">
      <div class="titulo">
        <h2>Contate<span>-me</span></h2>
        <span class="sublinhado"></span>
      </div>
      <div class="contact-container">
        <img src="assets/img/messenger.svg" alt="">
        <form method="POST" action="php/send_email.php">
          <label>
           Nome *
           <input type="text" name="name"  required>
          </label>
          <label>
            Sobrenome
            <input type="text" name="surname"  >
           </label>
          <label>
            Email *
            <input type="email" name="email"  required>
          </label>
          <label>
            Telefone
            <input type="text" name="telephone"  >
          </label>
          <label>
            Mensagem
            <textarea name="message"></textarea>
          </label>
          <button class="primary-button" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  </main>
  <footer>
    <p>Todos direitos Reservados &copy;</p>
    <p class="icons">
      <a href="https://github.com/vanessa-dev"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.instagram.com/nessa.dev/"><i  class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/vanessa-dev"><i class="fa-brands fa-linkedin"></i></a>
    </p>
  </footer>
  <script src="assets/js/main.min.js"></script>
</body>
</html>