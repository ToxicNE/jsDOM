// Получаем ссылки на необходимые элементы страницы
const mainTitle = document.querySelector('h1');
const subTitle = document.querySelector('h2');
const btn = document.querySelector('button');

// Определяем функцию анимации, которая будет менять стиль заголовков
function animateTitle() {
  // Изменяем размер заголовков
  mainTitle.style.fontSize = '60px';
  subTitle.style.fontSize = '40px';
  // Изменяем цвет текста заголовков
  mainTitle.style.color = 'red';
  subTitle.style.color = 'blue';
}

// Определяем функцию для обработки клика на кнопке
function handleClick() {
  // Вызываем функцию анимации
  animateTitle();
}

// Определяем функцию для обработки нажатия на клавишу
function handleKeyPress(event) {
  // Проверяем, была ли нажата клавиша "Enter"
  if (event.key === 'Enter') {
    // Вызываем функцию анимации
    animateTitle();
  }
}

// Добавляем обработчики событий на кнопку и на всю страницу
btn.addEventListener('click', handleClick);
document.addEventListener('keypress', handleKeyPress);
