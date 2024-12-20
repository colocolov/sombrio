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