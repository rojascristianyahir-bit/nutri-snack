const phone = "523141093382";

document.querySelectorAll("[data-product]").forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const message = `Hola, quiero pedir: ${product}. ¿Aún está disponible?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
});
