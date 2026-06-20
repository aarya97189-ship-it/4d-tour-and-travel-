// ===============================
// 4D Tour and Travel - script.js
// ===============================

// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 80) {
        navbar.style.padding = "8px 0";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";
    } else {
        navbar.style.padding = "15px 0";
        navbar.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Counter Animation
const counters = document.querySelectorAll("h2");

counters.forEach(counter => {

    const update = () => {

        const target = +counter.innerText.replace(/\D/g, "");

        if (!target) return;

        const count = +counter.getAttribute("data-count") || 0;

        const speed = Math.ceil(target / 80);

        if (count < target) {

            const next = Math.min(count + speed, target);

            counter.setAttribute("data-count", next);

            counter.innerText = next.toLocaleString() + "+";

            setTimeout(update, 25);

        }

    };

    if (counter.innerText.includes("+")) {
        update();
    }

});

// Fade Animation
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("fade-up");

        }

    });

});

document.querySelectorAll(".card,.review-card,.why-box").forEach(el => {

    observer.observe(el);

});

// Back To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
left:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#0d6efd;
color:#fff;
font-size:22px;
cursor:pointer;
display:none;
z-index:9999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Current Year

const year = new Date().getFullYear();

const footer = document.querySelector("footer .text-center");

if (footer) {

    footer.innerHTML = `© ${year} 4D Tour and Travel | All Rights Reserved`;

}

console.log("4D Tour and Travel Website Loaded Successfully");