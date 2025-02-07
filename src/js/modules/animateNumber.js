function animateNumbers(selector, start, duration) { //!!!!!!!!!!!!
  const elements = document.querySelectorAll(selector);

  if (!elements.length) return; // Если элементов нет, прерываем выполнение

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
    elements.forEach((element) => {
      if (isInViewport(element) && !element.classList.contains('animated')) {
        element.classList.add('animated'); // Убираем повторное выполнение
         const end = parseInt(element.textContent, 10) || 0; //!!!!!!!!!!!!
        animateCount(element, start, end, duration);
      }
    });
  };

  document.addEventListener('scroll', onScroll);
  onScroll(); // Запуск при загрузке страницы
}

// Вызываем функцию для всех чисел после подключения файла
animateNumbers('.advantage__number span', 0, 1000); //!!!!!!!!!!!!
animateNumbers('.stock__quantity span', 0, 1000);//!!!!!!!!!!!!
