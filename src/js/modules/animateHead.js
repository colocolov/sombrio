document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".heading");

  const observerOptions = {
    root: null, // Вся область просмотра
    threshold: 0.2, // Анимация запускается, когда элемент виден на 20%
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  }, observerOptions);

  headings.forEach((heading) => observer.observe(heading));
});
