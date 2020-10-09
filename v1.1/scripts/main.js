
let menuToggle = document.querySelector("#toggle-menu");
let icon = document.querySelector("#icon");


var rot = 180;

menuToggle.addEventListener("click", function() {
    setTimeout(function() {
        icon.style.transform = 'rotate('+rot+'deg)';
        rot = (rot + 180) % 360;
    }, 300);
});