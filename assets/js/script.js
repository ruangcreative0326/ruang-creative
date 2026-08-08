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


