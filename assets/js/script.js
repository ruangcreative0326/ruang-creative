/* ==================================================
   RUANG CREATIVE
   SCRIPT.JS V3.0 FINAL
================================================== */



/* ==========================
   PORTFOLIO FILTER
========================== */


const filterButtons =
document.querySelectorAll(".filter-btn");


const galleryImages =
document.querySelectorAll(".gallery-img");



if(filterButtons.length > 0){


filterButtons.forEach(button=>{


button.addEventListener("click",()=>{


const filter =
button.dataset.filter;



filterButtons.forEach(btn=>{

btn.classList.remove("active");

});



button.classList.add("active");





galleryImages.forEach(image=>{


const category =
image.dataset.category;



if(filter === "all" || category === filter){


image.style.display="block";


}else{


image.style.display="none";


}



});



});


});


}








/* ==========================
   LIGHTBOX GALLERY
========================== */


const lightbox =
document.getElementById("lightbox");


const lightboxImage =
lightbox?.querySelector("img");


const closeLightbox =
document.querySelector(".lightbox-close");



if(lightbox && galleryImages.length > 0){



galleryImages.forEach(image=>{


image.addEventListener("click",()=>{


lightbox.classList.add("active");


if(lightboxImage){


lightboxImage.src =
image.src;


}



});


});





closeLightbox?.addEventListener("click",()=>{


lightbox.classList.remove("active");


});





lightbox.addEventListener("click",(e)=>{


if(e.target === lightbox){


lightbox.classList.remove("active");


}


});



}









/* ==========================
   BOOKING WHATSAPP
========================== */


const bookingButton =
document.getElementById("bookingBtn");



if(bookingButton){


bookingButton.addEventListener("click",()=>{



const nama =
document.getElementById("nama")?.value || "";



const nomor =
document.getElementById("nomor")?.value || "";



const paket =
document.getElementById("paket")?.value || "";



const tanggal =
document.getElementById("tanggal")?.value || "";



const pesan =
document.getElementById("pesan")?.value || "";






const text =

`Halo Ruang Creative,

Saya ingin melakukan booking.

Nama:
${nama}

Nomor WhatsApp:
${nomor}

Paket:
${paket}

Tanggal:
${tanggal}

Catatan:
${pesan}`;



const whatsapp =

"https://wa.me/6282134190135?text="
+
encodeURIComponent(text);



window.open(
whatsapp,
"_blank"
);



});


}









/* ==========================
   FAQ ACCORDION
========================== */


const faqQuestions =
document.querySelectorAll(".faq-question");



if(faqQuestions.length > 0){



faqQuestions.forEach(question=>{



question.addEventListener("click",()=>{



const faqItem =
question.parentElement;



const answer =
faqItem.querySelector(".faq-answer");





faqItem.classList.toggle("active");





if(faqItem.classList.contains("active")){



answer.style.maxHeight =
answer.scrollHeight + "px";



}else{



answer.style.maxHeight =
null;



}



});



});


}









/* ==========================
   TESTIMONIAL SCROLL ANIMATION
========================== */


const testimonialCards =
document.querySelectorAll(".testimonial-card");



if(testimonialCards.length > 0){



const testimonialObserver =

new IntersectionObserver((entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



entry.target.classList.add("show");



testimonialObserver.unobserve(
entry.target
);



}



});



},
{

threshold:.2

});






testimonialCards.forEach(card=>{


testimonialObserver.observe(card);


});



}









/* ==========================
   STATISTIC COUNTER
========================== */


const counters =
document.querySelectorAll(".counter");



if(counters.length > 0){



const counterObserver =

new IntersectionObserver((entries)=>{



entries.forEach(entry=>{



if(entry.isIntersecting){



const counter =
entry.target;



const target =
Number(counter.dataset.target);



let count = 0;



const updateCounter = ()=>{



const increment =
Math.ceil(target / 100);



if(count < target){



count += increment;


counter.innerText =
count;



setTimeout(
updateCounter,
20
);



}else{



counter.innerText =
target + "+";



}



};




updateCounter();




counterObserver.unobserve(
counter
);



}



});



},
{

threshold:.5

});






counters.forEach(counter=>{


counterObserver.observe(counter);


});



}

/* ==========================
   GLOBAL SCROLL REVEAL
========================== */


const revealElements =
document.querySelectorAll(
"section, .service-card, .price-card, .stat-item, .booking-form, .map-container"
);



if(revealElements.length > 0){


const revealObserver =
new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


revealObserver.unobserve(
entry.target
);


}


});


},
{

threshold:.15

});



revealElements.forEach(element=>{


element.classList.add("reveal");


revealObserver.observe(element);


});


}
