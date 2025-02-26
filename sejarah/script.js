var togglebtn = document.querySelector(".togglebtn");
var nav = document.querySelector(".nav-links");

togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
});
