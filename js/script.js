const toggleBtn = document.querySelector('.h-toggleBtn');
const menu = document.querySelector('.h-menu');
const btn = document.querySelector('.h-btn');
const main = document.querySelector('#main');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
  main.classList.toggle('add');
});
