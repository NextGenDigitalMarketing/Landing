// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Shadow

window.addEventListener("scroll", function () {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.background="#0b1120";

header.style.boxShadow="0 8px 20px rgba(0,0,0,.4)";

}

else{

header.style.background="#111827";

header.style.boxShadow="none";

}

});
