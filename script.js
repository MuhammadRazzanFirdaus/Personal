// var togglebtn = document.querySelector(".togglebtn");
// var nav = document.querySelector(".nav-links");

// togglebtn.addEventListener("click", function () {
//     this.classList.toggle("click");
//     nav.classList.toggle("open");
// });

document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".togglebtn");
    const navLinks = document.querySelector(".nav-links");
  
    toggleBtn.addEventListener("click", function () {
      navLinks.classList.toggle("open");
      toggleBtn.classList.toggle("click");
    });
  });

var typed = new Typed(".input", {
    strings: [
        "Frontend Developer",
        "UI/UX Designer",
        "Web Developer",
        "Full Stack Developer",
    ],
    typeSpeed: 50,
    backSpeed: 60,
    loop: true,
});