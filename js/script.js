const toggleBtn = document.querySelector('.h-toggleBtn');
const menu = document.querySelector('.h-menu');
const btn = document.querySelector('.h-btn');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  btn.classList.toggle('active');
});
