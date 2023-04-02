// получаем элементы формы и кнопку отправки
const form = document.querySelector('.order-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const submitButton = document.querySelector('.submit-button');

// добавляем обработчик события submit на форму
form.addEventListener('submit', (event) => {
  // отменяем стандартное поведение формы
  event.preventDefault();
  
  // проверяем, заполнены ли все поля
  if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '') {
    alert('Пожалуйста, заполните все поля формы');
  } else {
    // отправляем данные на сервер
    alert(`Заказ принят: ${nameInput.value}, ${emailInput.value}, ${phoneInput.value}`);
    form.reset();
  }
});

// добавляем обработчик события keydown на поле ввода имени
nameInput.addEventListener('keydown', (event) => {
  // если пользователь нажал Enter, перемещаем фокус на поле ввода email
  if (event.keyCode === 13) {
    event.preventDefault();
    emailInput.focus();
  }
});

// добавляем обработчик события keydown на поле ввода email
emailInput.addEventListener('keydown', (event) => {
  // если пользователь нажал Enter, перемещаем фокус на поле ввода телефона
  if (event.keyCode === 13) {
    event.preventDefault();
    phoneInput.focus();
  }
});

// добавляем обработчик события keydown на поле ввода телефона
phoneInput.addEventListener('keydown', (event) => {
  // если пользователь нажал Enter, отправляем форму
  if (event.keyCode === 13) {
    event.preventDefault();
    submitButton.click();
  }
});
