document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoAbout");
  const playPauseButton = document.getElementById("playPauseButton");
  const videoBackground = document.getElementById("videoBackground");

  // Check if the screen width is less than 768px
  const isMobile = () => window.innerWidth < 1024;

  const playVideo = () => {
    videoBackground.style.opacity = "0"; // Скрываем фон
    if (isMobile()) {
      playPauseButton.style.opacity = "0"; // Скрываем кнопку на мобильных
      playPauseButton.style.pointerEvents = "none";
    }
    video.style.display = "block"; // Показываем видео
    video.play(); // Воспроизводим видео
  };

  const pauseVideo = () => {
    video.pause(); // Ставим видео на паузу
    videoBackground.style.opacity = "1"; // Показываем фон
    if (isMobile()) {
      playPauseButton.style.opacity = "1"; // Показываем кнопку на мобильных
      playPauseButton.style.pointerEvents = "auto";
    }
  };

  // Play/Pause button click
  playPauseButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // Video click for play/pause
  video.addEventListener("click", () => {
    if (video.paused) {
      playVideo();
    } else {
      pauseVideo();
    }
  });

  // Show button and background when video ends
  video.addEventListener("ended", () => {
    videoBackground.style.opacity = "1";
    if (isMobile()) {
      playPauseButton.style.opacity = "1"; // Показываем кнопку только на мобильных
      playPauseButton.style.pointerEvents = "auto";
    }
  });

  // Ensure correct button visibility on resize
  const updateButtonVisibility = () => {
    if (!isMobile()) {
      // На экранах >= 768px кнопка всегда видима
      playPauseButton.style.opacity = "1";
      playPauseButton.style.pointerEvents = "auto";
    } else {
      // На экранах < 768px кнопка управляется логикой play/pause
      if (video.paused) {
        playPauseButton.style.opacity = "1";
        playPauseButton.style.pointerEvents = "auto";
      } else {
        playPauseButton.style.opacity = "0";
        playPauseButton.style.pointerEvents = "none";
      }
    }
  };

  // Run on load and resize
  window.addEventListener("resize", updateButtonVisibility);
  updateButtonVisibility();
});
