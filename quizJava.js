document.getElementById("quizForm").addEventListener("submit", function(event) {
      event.preventDefault();

      let total = 10;
      let puntos = 0;

      for (let i = 1; i <= total; i++) {
        let respuesta = document.querySelector(`input[name="q${i}"]:checked`);
        if (respuesta && respuesta.value === "1") {
          puntos++;
        }
      }

      const resultado = document.getElementById("resultado");
        resultado.style.background="black";
        resultado.style.fontSize="larger";
        resultado.style.textAlign="center";

      resultado.innerHTML = `Obtuviste <strong>${puntos}</strong> de <strong>${total}</strong> puntos.`;

      if (puntos === total) {
        resultado.innerHTML += "<br> ¡Eres uno de los mas grandes fans de the beatles";
      } else if (puntos >= total * 0.6) {
        resultado.innerHTML += "<br>¡Buen trabajo! Eres un fan";
      } else {
        resultado.innerHTML += "<br>Sigue escuchando a los Beatles, ¡Es una de las mejores Bandas que conoceras!";
      }
    });


document.addEventListener("DOMContentLoaded", function () {
  const preguntas = Array.from(document.querySelectorAll("fieldset"));

  preguntas.forEach((fieldset, index) => {
    const legend = fieldset.querySelector("legend");
    const radios = Array.from(fieldset.querySelectorAll("input[type='radio']"));

    // Establece tabindex dinámicamente: legend y radios
    legend.setAttribute("tabindex", "0");
    radios.forEach(radio => radio.setAttribute("tabindex", "0"));

    // Navegación automática cuando el usuario selecciona una opción
    radios.forEach((radio, radioIndex) => {
      radio.addEventListener("change", () => {
        setTimeout(() => {
          const siguiente = preguntas[index + 1];
          if (siguiente) {
            // Enfoca el legend de la siguiente pregunta
            const siguienteLegend = siguiente.querySelector("legend");
            if (siguienteLegend) {
              siguienteLegend.focus();
            }
          } else {
            // Si es la última pregunta, enfoca el botón de enviar
            const btnEnviar = document.querySelector("input[type='submit']");
            if (btnEnviar) btnEnviar.focus();
          }
        }, 100);
      });
    });
  });
});
