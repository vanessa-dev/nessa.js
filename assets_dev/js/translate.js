const translate_switch = document.querySelector('.switch-button-checkbox');
//Header
const translate_header = document.querySelector();

function changeData(file) {
  const path = `../../language/${file}`;
  fetch(path)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
};

translate_switch.addEventListener('change', async function() {
  const file_language = this.checked ? 'en.json' : 'pt.json';
  changeData(file_language);
});