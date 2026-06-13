document.addEventListener("DOMContentLoaded", function() {
    // Back to Top Button
    let mybutton = document.getElementById("btnBackToTop");
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };
    mybutton.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Image Zoom Modal Logic
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("zoomedImage");
    const closeBtn = document.getElementsByClassName("close-modal")[0];

    // Select all images with class 'zoomable'
    const zoomableImages = document.querySelectorAll('.zoomable');
    
    zoomableImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        });
    });

    // Close Modal when clicking the X
    if(closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = "none";
        });
    }

    // Close Modal when clicking outside the image
    if(modal) {
        modal.addEventListener('click', function(e) {
            if(e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
