var textloop = new Typed('.text-loop', {
    strings : ['Frontend Web Developer.', /*'Backend Web Developer.','Full Stack Web Developer.'*/],
    typeSpeed : 80,
    backSpeed: 60,
    loop: true,
});


// Navbar section 

const menu = document.querySelector(".menu");
const navlink = document.querySelector(".navlink");
const close = document.querySelector(".close");

menu.addEventListener('click', () => {
    navlink.classList.add("open");
    close.addEventListener('click', () => {
        navlink.classList.remove("open");
    });
});