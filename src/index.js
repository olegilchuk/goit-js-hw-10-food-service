import creMenu from './teamlates/menu.hbs';
import menu from './data/menu.json';

const listRef = document.querySelector('.js-menu');
const switchRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

const { LIGHT, DARK } = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

listRef.insertAdjacentHTML('beforeend', creMenu(menu));

switchRef.addEventListener('change', changeTheme);

let themeGet = localStorage.getItem('theme');
console.log(themeGet);

bodyRef.classList.add(themeGet ? themeGet : LIGHT);
switchRef.checked = themeGet === DARK;
function changeTheme(e) {
  if (e.target.checked) {
    bodyRef.classList.add(DARK);
    bodyRef.classList.remove(LIGHT);
    localStorage.setItem('theme', DARK);
  } else {
    bodyRef.classList.add(LIGHT);
    bodyRef.classList.remove(DARK);
    localStorage.setItem('theme', LIGHT);
  }
}
