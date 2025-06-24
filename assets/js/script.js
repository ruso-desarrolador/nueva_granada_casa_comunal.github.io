const btnSubir = document.getElementById("btnSubir");
window.addEventListener("scroll", () => {
  btnSubir.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll suave al hacer clic en el botón
btnSubir.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});