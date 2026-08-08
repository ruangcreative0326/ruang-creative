// ==========================
// FAQ ACCORDION
// ==========================

const faqQuestions = document.querySelectorAll(".faq-question");


faqQuestions.forEach(question => {


    question.addEventListener("click", () => {


        const answer = question.nextElementSibling;
        const icon = question.querySelector("span");


        answer.classList.toggle("active");


        if(answer.classList.contains("active")){

            icon.textContent = "−";

        } else {

            icon.textContent = "+";

        }


    });


});

// ==========================
// GALLERY LIGHTBOX
// ==========================

const galleryImages = document.querySelectorAll(".gallery-img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = lightbox.querySelector("img");

const lightboxClose = document.querySelector(".lightbox-close");



galleryImages.forEach(image => {


    image.addEventListener("click", () => {


        lightbox.classList.add("active");


        lightboxImage.src = image.src;


    });


});



lightboxClose.addEventListener("click", () => {


    lightbox.classList.remove("active");


});



lightbox.addEventListener("click", (e) => {


    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }


});
// ==========================
// BOOKING WHATSAPP FORM
// ==========================


const bookingBtn = document.getElementById("bookingBtn");


if(bookingBtn){


bookingBtn.addEventListener("click", function(){


    const nama = document.getElementById("nama").value;

    const nomor = document.getElementById("nomor").value;

    const paket = document.getElementById("paket").value;

    const tanggal = document.getElementById("tanggal").value;

    const pesan = document.getElementById("pesan").value;



    const text =

`Halo Ruang Creative,

Saya ingin melakukan booking.

Nama: ${nama}

Nomor WhatsApp: ${nomor}

Paket: ${paket}

Tanggal Foto: ${tanggal}

Catatan:
${pesan}`;



    const url =

`https://wa.me/6282134190135?text=${encodeURIComponent(text)}`;



    window.open(url, "_blank");


});


}
