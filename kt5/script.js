const form = document.querySelector('.card-form');
const submitButton = form.querySelector('.submit-button');

const cardBankLogo = document.querySelector('.card-bank-logo');
const cardTypeLogo = document.querySelector('.card-type-logo');
const cardNumber = document.querySelector('.card-number');
const cardHolder = document.querySelector('.card-holder');
const cardExpirationMonth = document.querySelector('.card-expiration-month');
const cardExpirationYear = document.querySelector('.card-expiration-year');

const tableBody = document.querySelector('.card-table tbody');
const clearButton = document.querySelector('.clear-button');

function updateBankLogo() {
  const bankLogo = form.bank.value.toLowerCase().replace(/\s+/g, '-');
  cardBankLogo.src = `https://logo.clearbit.com/${bankLogo}.com`;
}

function updateCardTypeLogo() {
  const cardType = form.cardtype.value.toLowerCase();
  cardTypeLogo.src = `img/${cardType}.png`;
}

function showCardInfo() {
  cardBankLogo.style.display = 'block';
  cardTypeLogo.style.display = 'block';
  cardNumber.textContent = form.cardnumber.value;
  cardHolder.textContent = form.cardholder.value;
  cardExpirationMonth.textContent = form.expirationmonth.value;
  cardExpirationYear.textContent = form.expirationyear.value;
}

function clearForm() {
  form.reset();
  cardBankLogo.style.display = 'none';
  cardTypeLogo.style.display = 'none';
  cardNumber.textContent = '•••• •••• •••• ••••';
  cardHolder.textContent = 'FULL NAME';
  cardExpirationMonth.textContent = 'MM';
  cardExpirationYear.textContent = 'YY';
}

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

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  showCardInfo();
  addToTable();
  clearForm();
});

form.bank.addEventListener('change', () => {
  updateBankLogo();
});

form.cardtype.addEventListener('change', () => {
  updateCardTypeLogo();
});

clearButton.addEventListener('click', () => {
  clearForm();
});

updateBankLogo();
updateCardTypeLogo();

