// Rolagem suave do menu
document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// Efeito de ampliação nas imagens
document.querySelectorAll(".galeria img").forEach(img => {

    img.addEventListener("click", () => {

        window.open(img.src, "_blank");

    });

});

// Sombra no menu ao rolar a página
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
    } else {
        header.style.boxShadow = "none";
    }

});