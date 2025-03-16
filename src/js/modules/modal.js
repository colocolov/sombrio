// Получаем элементы
const modal = document.getElementById('modal');

if (modal) {

  const openModalBtns = document.querySelectorAll('.openModalBtn');
  const closeModalBtn = document.getElementById('closeModal');
  const submitBtn = document.getElementById('submit');
  const socialLink = document.querySelectorAll('.social__icon');
  const phoneInput = document.getElementById('phone');
  const body = document.body;

  // Функция закрытия окна
  function closeModal() {
    modal.classList.remove("open");
    body.classList.remove("_lock");
  }

  // Открытие модального окна при клике на кнопку
  openModalBtns.forEach(button => {
    button.onclick = function() {
      modal.classList.add('open');
      body.classList.add('_lock');
      if (!phoneInput.value) {
        phoneInput.value = "+373 "; // Автоматически подставляем код страны
      }
    };
  });

  // Закрытие модального окна при клике на крестик
  closeModalBtn.onclick = function() {
    closeModal();
  };

  // Закрытие модального окна при клике на фон
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  };

  // Закрытие при клике на соц.сети
  if (socialLink.length) {
    socialLink.forEach((item) => {
      item.addEventListener("click", () => {
        closeModal();
      });
    });
  }


  // Закрытие модального окна про клавише Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      closeModal();
    }
  });

  // Фиксируем код страны +373 при фокусе
    if (phoneInput) {
        phoneInput.addEventListener("focus", function () {
            if (!phoneInput.value.startsWith("+373 ")) {
                phoneInput.value = "+373 ";
            }
        });

        phoneInput.addEventListener("input", function (e) {
            let value = phoneInput.value.replace(/\D/g, ""); // Убираем все не-цифры
            value = value.replace(/^373/, ""); // Убираем лишний код страны
            value = value.trim(); // Убираем случайные пробелы

            // Ограничиваем длину номера 8 цифрами
            if (value.length > 8) {
                value = value.substring(0, 8);
            }

            // Форматируем номер с пробелами: +373 XX XXXXXXX
            let formatted = "+373 ";
            if (value.length > 0) {
                formatted += value.substring(0, 2) + " "; // Первые 2 цифры
            }
            if (value.length > 2) {
                formatted += value.substring(2); // Остальные 6 цифр
            }

            phoneInput.value = formatted;
        });

        // Запрещаем удаление кода страны
        phoneInput.addEventListener("keydown", function (e) {
            if (phoneInput.selectionStart <= 5 && (e.key === "Backspace" || e.key === "Delete")) {
                e.preventDefault();
            }
        });

        // Перед отправкой формы убираем пробел
        phoneInput.closest("form").addEventListener("submit", function () {
            phoneInput.value = phoneInput.value.replace(/\s+/g, ""); // Убираем пробел перед отправкой
        });
    }

  // Проверка перед отправкой
  // submitBtn.onclick = function() {
  //   const phone = phoneInput.value;
  //   const phonePattern = /^\+373 \d{2} \d{3} \d{3}$/; // Формат "+373 60 230 480"

  //   if (phonePattern.test(phone)) {
  //     alert('Номер телефона: ' + phone);
  //     modal.style.display = "none";
  //     body.classList.remove('_lock');
  //   } else {
  //     alert('Введите корректный номер телефона в формате +373 60 230 480');
  //   }
  // };

  // Закрытие окна через 5 секунд после успешной отправки формы
  document.addEventListener('wpcf7mailsent', function () { 
    setTimeout(() => { 
        closeModal(); 
    }, 5000); 
  }, false);


}