const backgrounds = [
    "photos/background1.jpg",
    "photos/background2.jpg",
    "photos/background3.jpg"
];

let currentIndex = 0;
const showcase = document.querySelector(".showcase-area");

function changeBackground() {
    showcase.style.backgroundImage = `url(${backgrounds[currentIndex]})`;
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Change background every 2 seconds
setInterval(changeBackground, 2000);






document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from refreshing the page
        modal.style.display = "flex"; // Show modal
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none"; // Hide modal
    });

    // Close modal if user clicks outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

