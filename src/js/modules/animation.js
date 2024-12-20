function animateAdvantages() {
  const items = document.querySelectorAll('.advantage__item');

  items.forEach((item, index) => {
    const delay = index * 0.3; // Задержка для каждого элемента
    item.style.transitionDelay = `${delay}s`;

    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
    };

    const onScroll = () => {
      items.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add('in-view');
        } else {
          item.classList.remove('in-view'); // Удаляем класс, если элемент выходит за пределы экрана
        }
      });
    };

    document.addEventListener('scroll', onScroll);
    onScroll(); // Проверяем начальную видимость элементов
  });
}

document.addEventListener('DOMContentLoaded', animateAdvantages);


// анимация цифры 5
function animateNumber() {
  const numberElement = document.querySelector('.advantage__number span');

  if (!numberElement) return; // Если элемента нет, прерываем выполнение

  const animateCount = (element, start, end, duration) => {
    const range = end - start;
    const increment = range / (duration / 16); // ~60 FPS
    let current = start;

    const updateNumber = () => {
      current += increment;
      if (current >= end) {
        current = end;
        element.textContent = Math.round(current);
        return; // Завершаем анимацию
      }
      element.textContent = Math.round(current);
      requestAnimationFrame(updateNumber);
    };

    updateNumber();
  };

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
  };

  const onScroll = () => {
    if (isInViewport(numberElement)) {
      numberElement.parentElement.classList.add('in-view'); // Эффект появления
      animateCount(numberElement, 1, 5, 1000); // Анимация от 1 до 5 за 1 секунду
    } else {
      numberElement.textContent = 1; // Сбрасываем число, чтобы анимация могла повториться
    }
  };

  document.addEventListener('scroll', onScroll);
  onScroll(); // Запуск при загрузке страницы
}

// Вызываем функцию сразу после подключения файла
animateNumber();

