// Получаем элементы формы и кнопки "Отправить"
const form = document.querySelector('.card-form');
const submitButton = form.querySelector('.submit-button');

// Получаем элементы для отображения информации о карте
const cardBankLogo = document.querySelector('.card-bank-logo');
const cardTypeLogo = document.querySelector('.card-type-logo');
const cardNumber = document.querySelector('.card-number');
const cardHolder = document.querySelector('.card-holder');
const cardExpirationMonth = document.querySelector('.card-expiration-month');
const cardExpirationYear = document.querySelector('.card-expiration-year');

// Получаем элементы таблицы и кнопку "Очистить"
const tableBody = document.querySelector('.card-table tbody');
const clearButton = document.querySelector('.clear-button');

// Функция для обновления изображения логотипа банка
function updateBankLogo() {
  const bankLogo = form.bank.value.toLowerCase().replace(/\s+/g, '-');
  cardBankLogo.src = `https://logo.clearbit.com/${bankLogo}.com`;
}

// Функция для обновления изображения логотипа типа карты
function updateCardTypeLogo() {
  const cardType = form.cardtype.value.toLowerCase();
  cardTypeLogo.src = `img/${cardType}.png`;
}

// Функция для отображения данных о карте
function showCardInfo() {
  cardBankLogo.style.display = 'block';
  cardTypeLogo.style.display = 'block';
  cardNumber.textContent = form.cardnumber.value;
  cardHolder.textContent = form.cardholder.value;
  cardExpirationMonth.textContent = form.expirationmonth.value;
  cardExpirationYear.textContent = form.expirationyear.value;
}

// Функция для очистки формы
function clearForm() {
  form.reset();
  cardBankLogo.style.display = 'none';
  cardTypeLogo.style.display = 'none';
  cardNumber.textContent = '•••• •••• •••• ••••';
  cardHolder.textContent = 'FULL NAME';
  cardExpirationMonth.textContent = 'MM';
  cardExpirationYear.textContent = 'YY';
}

// Функция для добавления данных о карте в таблицу
function addToTable() {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${form.bank.value}</td>
    <td>${form.cardtype.value}</td>
    <td>${form.cardnumber.value}</td>
    <td>${form.cardholder.value}</td>
    <td>${form.expirationmonth.value}/${form.expirationyear.value}</td>
  `;
  tableBody.appendChild(row);
}

// Обработчик отправки формы
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Отменяем стандартное поведение формы
  showCardInfo();
  addToTable();
  clearForm();
});

// Обработчик изменения поля "Название банка"
form.bank.addEventListener('change', () => {
  updateBankLogo();
});

// Обработчик изменения поля "Тип карты"
form.cardtype.addEventListener('change', () => {
  updateCardTypeLogo();
});

// Обработчик клика по кнопке "Очистить"
clearButton.addEventListener('click', () => {
  clearForm();
});

// Инициализация изображения логотипа банка и типа карты
updateBankLogo();
updateCardTypeLogo();

