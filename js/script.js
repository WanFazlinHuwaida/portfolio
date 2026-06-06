document.addEventListener("DOMContentLoaded", function() {
    // Back to Top Button logic
    let mybutton = document.getElementById("btnBackToTop");

    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    mybutton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Form Submission Handling
    const contactForm = document.getElementById("contactForm");
    if(contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Thank you for your message, Wan Fazlin Huwaida will get back to you soon!");
            contactForm.reset();
        });
    }
});