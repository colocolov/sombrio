// Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const submitBtn = document.getElementById('submit');
const body = document.body;

// Открытие модального окна при клике на кнопку
openModalBtn.onclick = function() {
  modal.style.display = "block";
  body.classList.add("_lock");
};

// Закрытие модального окна при клике на крестик
closeModal.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("_lock");
};

// Закрытие модального окна при клике на фон
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("_lock");
  }
};

// Логика отправки (можно заменить на вашу реализацию)
submitBtn.onclick = function() {
  const phone = document.getElementById('phone').value;
  if (phone) {
    alert('Номер телефона: ' + phone);
    modal.style.display = "none";
  } else {
    alert('Пожалуйста, введите номер телефона.');
  }
};
