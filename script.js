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
});// =======================================
// 4D Tour and Travel - script.js Part 2
// Premium Features
// =======================================

// Loading Screen
window.addEventListener("load", () => {

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

}

});


// Hero Slider

const heroImages=[

"images/hero.jpg",

"images/hero2.jpg",

"images/hero3.jpg",

"images/hero4.jpg"

];

let heroIndex=0;

const hero=document.querySelector(".hero");

if(hero){

setInterval(()=>{

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

hero.style.backgroundImage=`url(${heroImages[heroIndex]})`;

},5000);

}


// Scroll Progress Bar

const progress=document.createElement("div");

progress.id="progressBar";

document.body.appendChild(progress);

progress.style.cssText=`

position:fixed;

top:0;

left:0;

height:5px;

background:#ff9800;

width:0%;

z-index:99999;

`;

window.addEventListener("scroll",()=>{

let total=document.documentElement.scrollHeight-window.innerHeight;

let current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});


// Package Search

const search=document.getElementById("searchPackage");

if(search){

search.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

card.style.display=card.innerText.toLowerCase().includes(value)

?"block":"none";

});

});

}


// WhatsApp Popup

setTimeout(()=>{

const popup=document.createElement("div");

popup.innerHTML=`

<div style="position:fixed;

bottom:100px;

right:20px;

background:#fff;

padding:15px;

border-radius:12px;

box-shadow:0 5px 20px rgba(0,0,0,.25);

z-index:9999;

max-width:260px;">

<h6>👋 Welcome!</h6>

<p>Need a Tour Package?</p>

<a href="https://wa.me/919643586598"

style="background:#25D366;

padding:10px 18px;

color:#fff;

text-decoration:none;

border-radius:8px;

display:inline-block;">

Chat on WhatsApp

</a>

</div>

`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},12000);

},6000);


// Image Zoom

document.querySelectorAll(".gallery img").forEach(img=>{

img.onclick=function(){

const overlay=document.createElement("div");

overlay.style.cssText=`

position:fixed;

top:0;

left:0;

width:100%;

height:100%;

background:rgba(0,0,0,.9);

display:flex;

justify-content:center;

align-items:center;

z-index:999999;

`;

overlay.innerHTML=`<img src="${this.src}"

style="max-width:90%;

max-height:90%;

border-radius:10px;">`;

document.body.appendChild(overlay);

overlay.onclick=()=>overlay.remove();

}

});


// Auto Current Time

function updateClock(){

const now=new Date();

const time=now.toLocaleTimeString();

const clock=document.getElementById("clock");

if(clock){

clock.innerHTML=time;

}

}

setInterval(updateClock,1000);


// Navbar Active

const links=document.querySelectorAll(".nav-link");

links.forEach(link=>{

link.addEventListener("click",()=>{

links.forEach(l=>l.classList.remove("active"));

link.classList.add("active");

});

});


console.log("Premium Script Loaded Successfully");// ==========================================
// 4D Tour and Travel
// Premium Script Part 3
// ==========================================

// Visitor Counter
let visitors = localStorage.getItem("visitors");

if (!visitors) {
    visitors = 1;
} else {
    visitors = parseInt(visitors) + 1;
}

localStorage.setItem("visitors", visitors);

const visitorBox = document.getElementById("visitor-count");

if (visitorBox) {
    visitorBox.innerHTML = visitors.toLocaleString();
}


// Offer Popup

setTimeout(() => {

const offer = document.createElement("div");

offer.id = "offerPopup";

offer.innerHTML = `
<div style="
position:fixed;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background:#fff;
width:340px;
padding:25px;
border-radius:15px;
box-shadow:0 10px 40px rgba(0,0,0,.35);
z-index:999999;
text-align:center;">

<h3 style="color:#0d6efd;">Special Offer 🎉</h3>

<p>Book Your Tour Today & Get Exclusive Discounts.</p>

<a href="https://wa.me/919643586598"
style="
display:inline-block;
padding:12px 20px;
background:#25D366;
color:#fff;
text-decoration:none;
border-radius:8px;
margin-top:10px;">
Book on WhatsApp
</a>

<br><br>

<button id="closeOffer"
style="
padding:8px 18px;
border:none;
background:#dc3545;
color:#fff;
border-radius:6px;">
Close
</button>

</div>
`;

document.body.appendChild(offer);

document
.getElementById("closeOffer")
.onclick = () => offer.remove();

},15000);


// Live Date

const dateBox = document.getElementById("today");

if(dateBox){

const d = new Date();

dateBox.innerHTML = d.toDateString();

}


// Fleet Auto Slider

let fleet = document.querySelectorAll(".fleet-item");

let fleetIndex = 0;

if(fleet.length){

setInterval(()=>{

fleet.forEach(item=>item.style.display="none");

fleet[fleetIndex].style.display="block";

fleetIndex++;

if(fleetIndex>=fleet.length){

fleetIndex=0;

}

},3500);

}


// Button Ripple

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const x=e.offsetX;

const y=e.offsetY;

circle.style.left=x+"px";

circle.style.top=y+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},700);

});

});


// Copy Phone Number

function copyPhone(){

navigator.clipboard.writeText("9045066598");

alert("Phone Number Copied Successfully");

}


// Auto Greeting

const hour=new Date().getHours();

const greet=document.getElementById("greeting");

if(greet){

if(hour<12){

greet.innerHTML="Good Morning ☀️";

}

else if(hour<18){

greet.innerHTML="Good Afternoon 🌤️";

}

else{

greet.innerHTML="Good Evening 🌙";

}

}


// Booking Success Message

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",()=>{

alert("Thank You! Your enquiry has been submitted successfully.");

});

}


// Disable Right Click

document.addEventListener("contextmenu",e=>{

e.preventDefault();

});


// Keyboard Shortcuts

document.addEventListener("keydown",function(e){

if(e.key==="F12"){

e.preventDefault();

}

});


console.log("4D Premium Script Part 3 Loaded");// ==========================================
// 4D Tour and Travel
// Premium Script Part 4
// ==========================================

// Preloader

window.addEventListener("load",function(){

const preloader=document.querySelector(".preloader");

if(preloader){

preloader.style.opacity="0";

setTimeout(()=>{

preloader.remove();

},1000);

}

});


// Navbar Color Change

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>150){

nav.classList.add("shadow-lg");

nav.style.background="#003b8e";

}else{

nav.classList.remove("shadow-lg");

nav.style.background="linear-gradient(90deg,#0d6efd,#003b8e)";

}

});


// Tour Card Hover Sound

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// Auto Scroll Reviews

const reviewContainer=document.querySelector(".review-slider");

if(reviewContainer){

setInterval(()=>{

reviewContainer.scrollBy({

left:350,

behavior:"smooth"

});

if(reviewContainer.scrollLeft+reviewContainer.clientWidth>=reviewContainer.scrollWidth){

reviewContainer.scrollTo({

left:0,

behavior:"smooth"

});

}

},4000);

}


// WhatsApp Floating Notification

setTimeout(()=>{

const notify=document.createElement("div");

notify.innerHTML=`
<div style="
position:fixed;
bottom:170px;
right:20px;
background:#25D366;
color:#fff;
padding:12px 18px;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:99999;
font-size:15px;">
💬 We are Online! Chat with us now.
</div>
`;

document.body.appendChild(notify);

setTimeout(()=>{

notify.remove();

},8000);

},5000);


// Animated Number Counter

document.querySelectorAll(".count-number").forEach(counter=>{

let target=+counter.dataset.target;

let count=0;

let speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

}

update();

});


// Auto Copyright

const copyright=document.getElementById("copyright");

if(copyright){

copyright.innerHTML="© "+new Date().getFullYear()+" 4D Tour and Travel. All Rights Reserved.";

}


// Page Loaded

console.log("Premium Script Part 4 Loaded Successfully");// ====================================
// 4D Tour and Travel
// Premium Script Part 5
// ====================================

// Live Visitors (Demo)

let online = document.getElementById("onlineUsers");

if(online){

let users = Math.floor(Math.random()*25)+15;

online.innerHTML = users;

setInterval(()=>{

users = Math.floor(Math.random()*25)+15;

online.innerHTML = users;

},10000);

}


// Random Booking Notification

const customers=[
"Rahul from Delhi",
"Priya from Noida",
"Amit from Lucknow",
"Rohit from Jaipur",
"Anjali from Chandigarh",
"Deepak from Gurgaon",
"Neha from Agra",
"Vikas from Meerut"
];

const tours=[
"Shimla Manali Package",
"Char Dham Yatra",
"Nainital Tour",
"Haridwar Rishikesh Tour",
"Mussoorie Package",
"Spiti Valley Tour"
];

function bookingPopup(){

const popup=document.createElement("div");

popup.style.cssText=`
position:fixed;
left:20px;
bottom:20px;
background:#fff;
padding:15px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,.25);
z-index:999999;
max-width:320px;
`;

popup.innerHTML=`
<b>🎉 New Booking</b><br><br>
${customers[Math.floor(Math.random()*customers.length)]}
booked
<b>${tours[Math.floor(Math.random()*tours.length)]}</b>
just now.
`;

document.body.appendChild(popup);

setTimeout(()=>{

popup.remove();

},5000);

}

setInterval(bookingPopup,30000);


// Floating Call Button Animation

const call=document.querySelector(".callbtn");

if(call){

setInterval(()=>{

call.animate([

{transform:"scale(1)"},

{transform:"scale(1.15)"},

{transform:"scale(1)"}

],{

duration:1200

});

},2500);

}


// WhatsApp Button Animation

const whatsapp=document.querySelector(".whatsapp");

if(whatsapp){

setInterval(()=>{

whatsapp.animate([

{transform:"rotate(0deg)"},

{transform:"rotate(12deg)"},

{transform:"rotate(-12deg)"},

{transform:"rotate(0deg)"}

],{

duration:700

});

},5000);

}


// Current Year

document.querySelectorAll(".year").forEach(el=>{

el.innerHTML=new Date().getFullYear();

});


// Console Message

console.log("%cWelcome to 4D Tour and Travel","color:blue;font-size:18px;font-weight:bold;");

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