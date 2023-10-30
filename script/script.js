function scrollToSection(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute("href").substring(1); // Remove o "#" do href
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
    }
}

// Adiciona um ouvinte de evento de clique a todos os links no menu
const menuLinks = document.querySelectorAll("header ul li a");
menuLinks.forEach(link => {
    link.addEventListener("click", scrollToSection);
});