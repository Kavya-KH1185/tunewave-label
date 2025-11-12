const section = document.querySelector('.reviews-section');
const leftBtn = document.querySelector('.arrow.left');
const rightBtn = document.querySelector('.arrow.right');

rightBtn.addEventListener('click', () => {
  section.scrollBy({ left: 370, behavior: 'smooth' });
});

leftBtn.addEventListener('click', () => {
  section.scrollBy({ left: -370, behavior: 'smooth' });
});
