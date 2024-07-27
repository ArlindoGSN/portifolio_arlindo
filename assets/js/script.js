const botao = document.querySelector(".dark_mode_button");

botao.addEventListener("click", () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark_mode");
});
