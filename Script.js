document.addEventListener("DOMContentLoaded", function () {
    const botonGenerar = document.querySelector(".boton-generar");
    const popup = document.getElementById("popup");
    const cerrarPopup = document.getElementById("cerrar-popup");
    const tarjetas = document.querySelectorAll(".tarjeta");

    botonGenerar.addEventListener("click", function () {
        popup.style.display = "block";
    });

    tarjetas.forEach((tarjeta) => {
        tarjeta.addEventListener("click", function () {
            tarjetas.forEach((t) => t.classList.remove("selected"));
            tarjeta.classList.add("selected");
        });
    });

    cerrarPopup.addEventListener("click", function () {
        const selectedTarjeta = document.querySelector(".tarjeta.selected");
        if (selectedTarjeta) {
            const opcionSeleccionada = selectedTarjeta.textContent;
            alert(`Opción seleccionada: ${opcionSeleccionada}`);
        }
        popup.style.display = "none";
    });
});


