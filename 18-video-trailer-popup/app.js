const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close");
const trailer = document.querySelector(".trailer-container");
const video = document.querySelector("video");

btn.addEventListener("click", () => {
    trailer.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    trailer.classList.add("active");
    video.pause();
    video.currentTime = 0;
});