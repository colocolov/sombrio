document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.advantage__item');

  items.forEach(item => {
    const name = item.querySelector('.advantage__name');

    name.addEventListener('click', () => {
      // Убираем класс active у всех элементов
      items.forEach(i => i.classList.remove('active'));

      // Добавляем класс active только к текущему элементу
      item.classList.add('active');
    });
  });
});
