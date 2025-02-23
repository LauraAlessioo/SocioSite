document.addEventListener("DOMContentLoaded", function () {
    const primeiraSecao = document.querySelector(".primeira");
    const segundaSecao = document.querySelector(".segunda");

    // Função para suavizar a rolagem
    function smoothScroll() {
        let scrollY = window.scrollY;
        let targetScroll = scrollY + (window.scrollY - scrollY) * 0.1; // Ajuste para suavizar
        window.scrollTo(0, targetScroll);
        
        if (Math.abs(window.scrollY - targetScroll) > 0.5) {
            requestAnimationFrame(smoothScroll);
        }
    }

    window.addEventListener("wheel", function (event) {
        event.preventDefault(); 
        let scrollAmount = event.deltaY * 0.2; 
        window.scrollBy({ top: scrollAmount, behavior: "smooth" });
    }, { passive: false });

    window.addEventListener("scroll", function () {
        const sectionTop = segundaSecao.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
            segundaSecao.classList.add("show");
            segundaSecao.classList.remove("hide");

            primeiraSecao.classList.add("hide");
            primeiraSecao.classList.remove("show");
        } else {
            segundaSecao.classList.remove("show");
            segundaSecao.classList.add("hide");

            primeiraSecao.classList.add("show");
            primeiraSecao.classList.remove("hide");
        }
    });
});

// <-------------------------------------------------------------------------->

let currentIndex = 0;
        const images = document.querySelectorAll(".carousel img");

        function showSlide(index) {
            images.forEach((img, i) => {
                img.classList.toggle("active", i === index);
            });
        }

        function prevSlide() {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showSlide(currentIndex);
        }

        function nextSlide() {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showSlide(currentIndex);
        }
