const languageToggle = document.querySelector('.switch-button-checkbox');

// Get all elements that will have language transitions
const getTransitionElements = () => {
  return [
    ...document.querySelectorAll('.header-menu__mobile a'),
    ...document.querySelectorAll('.introduction-hello, .introduction-job, .introduction-welcome'),
    ...document.querySelectorAll('.titulo h2'),
    ...document.querySelectorAll('.projects-cards .projects-card__item p'),
    ...document.querySelectorAll('.projects-mais'),
    ...document.querySelectorAll('#contact .titulo h2'),
    ...document.querySelectorAll('#contact label'),
    ...document.querySelectorAll('#contact input, #contact textarea'),
    ...document.querySelectorAll('.enviar-form')
  ].filter(el => el !== null);
};

const elementsMap = {
  metaData: {
    title: document.querySelector('title'),
    description: document.querySelector('meta[name="description"]'),
    keywords: document.querySelector('meta[name="keywords"]'),
    author: document.querySelector('meta[name="author"]')
  },
  header: {
    technologies: document.querySelector('.header-menu__mobile li:nth-child(1) a'),
    projects: document.querySelector('.header-menu__mobile li:nth-child(2) a'),
    contact: document.querySelector('.header-menu__mobile li:nth-child(3) a')
  },
  introduction: {
    hello: document.querySelector('.introduction-hello'),
    description: document.querySelector('.introduction-job'),
    welcome: document.querySelector('.introduction-welcome'),
    resumeButton: document.querySelector('.introduction-download')
  },
  technology: {
    title1: document.querySelector('#technology .titulo h2'),
  },
  projects: {
    title: document.querySelector('#project .titulo h2'),
    card1Desc: document.querySelector('#project .projects-cards .projects-card__item:nth-child(1) p'),
    card2Desc: document.querySelector('#project .projects-cards .projects-card__item:nth-child(2) p'),
    card3Desc: document.querySelector('#project .projects-cards .projects-card__item:nth-child(3) p'),
    moreLink: document.querySelector('#project .projects-mais')
  },
  contact: {
    title: document.querySelector('#contact .titulo h2'),
    nameLabel: document.querySelector('#contact label:nth-of-type(1)'),
    nameInput: document.querySelector('#contact input[name="name"]'),
    surnameLabel: document.querySelector('#contactlabel:nth-of-type(2)'),
    surnameInput: document.querySelector('#contact input[name="surname"]'),
    emailLabel: document.querySelector('#contact label:nth-of-type(3)'),
    emailInput: document.querySelector('#contact input[name="email"]'),
    telephoneLabel: document.querySelector('#contact label:nth-of-type(4)'),
    telephoneInput: document.querySelector('#contact input[name="telephone"]'),
    messageLabel: document.querySelector('#contact label:nth-of-type(5)'),
    messageInput: document.querySelector('#contact textarea[name="message"]'),
    submitButton: document.querySelector('#contact .enviar-form')
  }
};

// Transition helper functions
function addTransitionClasses() {
  const elements = getTransitionElements();
  elements.forEach(el => {
    el.classList.add('language-transition');
  });
}

function fadeOutElements() {
  const elements = getTransitionElements();
  elements.forEach(el => {
    el.classList.add('fade-out');
  });
}

function fadeInElements() {
  const elements = getTransitionElements();
  elements.forEach(el => {
    el.classList.remove('fade-out');
    el.classList.add('fade-in');
  });
}

function removeTransitionClasses() {
  const elements = getTransitionElements();
  elements.forEach(el => {
    el.classList.remove('language-transition', 'fade-out', 'fade-in');
  });
}

function setHeaderTexts(data) {
  if (!elementsMap.header.technologies || !elementsMap.header.projects || !elementsMap.header.contact) 
    return;

  elementsMap.header.technologies.textContent = data.header.technologies;
  elementsMap.header.projects.textContent = data.header.projects;
  elementsMap.header.contact.textContent = data.header.contact;
}

function setIntroductionTexts(data) {
  if (!elementsMap.introduction.hello || !elementsMap.introduction.description || !elementsMap.introduction.welcome || !elementsMap.introduction.resumeButton) 
    return;

  elementsMap.introduction.hello.textContent = data.introduction.hello;
  elementsMap.introduction.description.textContent = data.introduction.description;
  elementsMap.introduction.welcome.textContent = data.introduction.welcome;
  elementsMap.introduction.resumeButton.childNodes[0].nodeValue = `${data.introduction.resume} `;
}

function setTechnologyTexts(data) {
  if (!elementsMap.technology.title1)
    return;

  const title = `${data.technology.title_1} ${data.technology.title_2}`;
  elementsMap.technology.title1.innerHTML = `${data.technology.title_1} <span>${data.technology.title_2}</span>`;
}

function setProjectsTexts(data, lang) {
  if (!elementsMap.projects.title)
    return;

  elementsMap.projects.title.innerHTML = `${data.projects.title_1} <span>${data.projects.title_2}</span>`;
  if (elementsMap.projects.card1Desc) 
    elementsMap.projects.card1Desc.textContent = data.projects.project_description_1;

  if (elementsMap.projects.card2Desc) 
    elementsMap.projects.card2Desc.textContent = data.projects.project_description_2;

  if (elementsMap.projects.card3Desc) 
    elementsMap.projects.card3Desc.textContent = data.projects.project_description_3;

  if (elementsMap.projects.moreLink) 
    elementsMap.projects.moreLink.textContent = lang === 'en.json' ? 'More Projects' : 'Outros Projetos';
}

function setContactTexts(data, lang) {
  if (!elementsMap.contact.title) 
    return;

  elementsMap.contact.title.innerHTML = `${data.contact.title_1}<span>${data.contact.title_2}</span>`;
  if (elementsMap.contact.nameLabel)
     elementsMap.contact.nameLabel.childNodes[0].nodeValue = `${data.contact.name.label} *`;

  if (elementsMap.contact.nameInput) 
    elementsMap.contact.nameInput.placeholder = data.contact.name.placeholder;

  if (elementsMap.contact.surnameLabel) 
    elementsMap.contact.surnameLabel.childNodes[0].nodeValue = data.contact.surname.label;

  if (elementsMap.contact.surnameInput) 
    elementsMap.contact.surnameInput.placeholder = data.contact.surname.placeholder;

  if (elementsMap.contact.emailLabel) 
    elementsMap.contact.emailLabel.childNodes[0].nodeValue = `${data.contact.email.label} *`;

  if (elementsMap.contact.emailInput) 
    elementsMap.contact.emailInput.placeholder = data.contact.email.placeholder;

  if (elementsMap.contact.telephoneLabel)
    elementsMap.contact.telephoneLabel.childNodes[0].nodeValue = data.contact.telephone.label;

  if (elementsMap.contact.messageLabel) 
    elementsMap.contact.messageLabel.childNodes[0].nodeValue = `${data.contact.message.label} *`;

  if (elementsMap.contact.messageInput) 
    elementsMap.contact.messageInput.placeholder = data.contact.message.placeholder;

  if (elementsMap.contact.submitButton) 
    elementsMap.contact.submitButton.textContent = data.contact.submit;
}

function setMetaAndTitle(lang, data) {
  const html = document.documentElement;

  // Set language attribute
  html.setAttribute('lang', lang === 'en.json' ? 'en' : 'pt-br');

  // Use data from language files
  if (data && data.metaData) {
    if (elementsMap.metaData.title) 
      elementsMap.metaData.title.textContent = data.metaData.title;

    if (elementsMap.metaData.description) 
      elementsMap.metaData.description.setAttribute('content', data.metaData.description);

    if (elementsMap.metaData.keywords) 
      elementsMap.metaData.keywords.setAttribute('content', data.metaData.keywords);

    if (elementsMap.metaData.author) 
      elementsMap.metaData.author.setAttribute('content', data.metaData.author);
  }
}

function updateDownloadLink(lang) {
  const anchor = document.querySelector('.introduction-download');
  if (!anchor) 
    return;

  anchor.setAttribute('href', lang === 'en.json' ? 'assets/download/CV_EN.pdf' : 'assets/download/CV_PT.pdf');
}

async function applyLanguage(langFile) {
  // Add transition classes if not already present
  addTransitionClasses();
  
  // Start fade out animation
  fadeOutElements();
  
  // Wait for fade out to complete
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Fetch new language data
  const path = `language/${langFile}`;
  const res = await fetch(path);
  const data = await res.json();
  
  // Update all content
  setHeaderTexts(data);
  setIntroductionTexts(data);
  setTechnologyTexts(data);
  setProjectsTexts(data, langFile);
  setContactTexts(data, langFile);
  setMetaAndTitle(langFile, data);
  updateDownloadLink(langFile);
  
  // Start fade in animation
  fadeInElements();
  
  // Remove transition classes after animation completes
  setTimeout(() => {
    removeTransitionClasses();
  }, 300);
}

async function initLanguageToggle() {
  if (!languageToggle) 
    return;

  const saved = localStorage.getItem('site_lang');
  const isEnglish = saved === 'en.json' ? true : false;
  const langFile = isEnglish ? 'en.json' : 'pt.json';

  languageToggle.checked = isEnglish;
  
  // Load initial language without transitions
  const path = `language/${langFile}`;
  const res = await fetch(path);
  const data = await res.json();
  setHeaderTexts(data);
  setIntroductionTexts(data);
  setTechnologyTexts(data);
  setProjectsTexts(data, langFile);
  setContactTexts(data, langFile);
  setMetaAndTitle(langFile, data);
  updateDownloadLink(langFile);
 
  languageToggle.addEventListener('change', function() {
    const selected = this.checked ? 'en.json' : 'pt.json';
    localStorage.setItem('site_lang', selected);
    applyLanguage(selected);
  });
}

document.addEventListener('DOMContentLoaded', initLanguageToggle);