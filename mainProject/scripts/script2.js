// получаем ссылки на все продукты на странице
const products = document.querySelectorAll('.product');

// добавляем обработчики событий мыши для каждого продукта
products.forEach(product => {
  product.addEventListener('mouseover', () => {
    product.classList.add('highlight'); // добавляем класс для подсветки продукта
  });
  product.addEventListener('mouseout', () => {
    product.classList.remove('highlight'); // удаляем класс для подсветки продукта
  });
});

// получаем ссылки на кнопки прокрутки страницы вверх и вниз
const scrollTopButton = document.querySelector('.scroll-top');
const scrollBottomButton = document.querySelector('.scroll-bottom');

// добавляем обработчики событий мыши для кнопок прокрутки страницы
scrollTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
scrollBottomButton.addEventListener('click', () => {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
});

// добавляем обработчики событий клавиатуры для кнопок прокрутки страницы
document.addEventListener('keydown', event => {
  if (event.key === 'ArrowUp') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  if (event.key === 'ArrowDown') {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }
});
