document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoAbout");
  const playPauseButton = document.getElementById("playPauseButton");
  const videoBackground = document.getElementById("videoBackground");

  // Play/Pause on button click
  playPauseButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (video.paused) {
      videoBackground.style.display = "none"; // Убираем фон
      video.style.display = "block"; // Показываем видео
      video.play();
    } else {
      video.pause();
    }
  });

  // Pause video on click during playback
  video.addEventListener("click", () => {
    if (!video.paused) {
      video.pause();
    }
  });
});
