const button = document.querySelector('button');
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

button.addEventListener('click', () => {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const randomX = Math.floor(Math.random() * (windowWidth - buttonWidth));
  const randomY = Math.floor(Math.random() * (windowHeight - buttonHeight));
  button.style.position = 'absolute';
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
});