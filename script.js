const toggleBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.navbar2 .nav-menu');

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle('show');
});
