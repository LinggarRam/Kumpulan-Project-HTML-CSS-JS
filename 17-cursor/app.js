const cursor = document.querySelector(".cursor");

const moveCursor = function (pageX, pageY) {
    cursor.style.left = pageX + "px";
    cursor.style.top = pageY + "px";
};

document.addEventListener("mouseover", function (event) {
    moveCursor(event.pageX, event.pageY);
});