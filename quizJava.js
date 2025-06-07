const preguntas = [
  {
    pregunta: "¿En qué ciudad se formó The Beatles?",
    opciones: ["Londres", "Liverpool", "Manchester", "Birmingham"],
    correcta: 1
  },
  {
    pregunta: "¿Quién fue el baterista de The Beatles?",
    opciones: ["George Harrison", "Paul McCartney", "Ringo Starr", "John Lennon"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál fue el primer álbum de The Beatles?",
    opciones: ["Revolver", "Please Please Me", "Abbey Road", "Help!"],
    correcta: 1
  },
  {
    pregunta: "¿Qué instrumento tocaba Paul McCartney?",
    opciones: ["Bajo", "Guitarra", "Batería", "Teclado"],
    correcta: 0
  },
  {
    pregunta: "¿Qué canción comienza con “Yesterday, all my troubles seemed so far away…”?",
    opciones: ["Let It Be", "Hey Jude", "Yesterday", "Come Together"],
    correcta: 2
  },
  {
    pregunta: "¿Quién fue asesinado en 1980?",
    opciones: ["George Harrison", "Ringo Starr", "John Lennon", "Paul McCartney"],
    correcta: 2
  },
  {
    pregunta: "¿Qué álbum contiene la canción 'Come Together'?",
    opciones: ["Let It Be", "Revolver", "Abbey Road", "Rubber Soul"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál de estas canciones es instrumental?",
    opciones: ["The End", "Flying", "Something", "Help!"],
    correcta: 1
  },
  {
    pregunta: "¿Qué Beatle era conocido como el 'Silencioso'?",
    opciones: ["Paul", "Ringo", "George", "John"],
    correcta: 2
  },
  {
    pregunta: "¿Qué película protagonizaron en 1964?",
    opciones: ["Yellow Submarine", "Help!", "A Hard Day's Night", "Magical Mystery Tour"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál fue el último álbum grabado por la banda?",
    opciones: ["Let It Be", "Revolver", "Abbey Road", "Sgt. Pepper's"],
    correcta: 2
  },
  {
    pregunta: "¿Qué canción repite la palabra 'love' muchas veces?",
    opciones: ["All You Need Is Love", "Love Me Do", "Can't Buy Me Love", "Real Love"],
    correcta: 0
  },
  {
    pregunta: "¿Qué Beatle escribió 'While My Guitar Gently Weeps'?",
    opciones: ["John", "George", "Paul", "Ringo"],
    correcta: 1
  },
  {
    pregunta: "¿Qué álbum es considerado un hito psicodélico?",
    opciones: ["Sgt. Pepper's", "Rubber Soul", "Revolver", "Help!"],
    correcta: 0
  },
  {
    pregunta: "¿En qué año se separaron oficialmente?",
    opciones: ["1968", "1969", "1970", "1971"],
    correcta: 2
  }
];

let preguntaActual = 0;
let puntuacion = 0;

const contenedor = document.getElementById("pregunta-container");
const btnSiguiente = document.getElementById("siguiente-btn");
const resultado = document.getElementById("resultado");

function mostrarPregunta() {
  contenedor.innerHTML = "";
  const p = preguntas[preguntaActual];

  const h2 = document.createElement("h2");
  h2.textContent = p.pregunta;
  contenedor.appendChild(h2);

  p.opciones.forEach((opcion, index) => {
    const div = document.createElement("div");
    div.classList.add("opcion");
    div.textContent = opcion;
    div.addEventListener("click", () => verificarRespuesta(div, index));
    contenedor.appendChild(div);
  });
}

function verificarRespuesta(elemento, index) {
  const opciones = document.querySelectorAll(".opcion");
  opciones.forEach(op => op.style.pointerEvents = "none");

  if (index === preguntas[preguntaActual].correcta) {
    elemento.classList.add("correcta");
    puntuacion++;
  } else {
    elemento.classList.add("incorrecta");
    opciones[preguntas[preguntaActual].correcta].classList.add("correcta");
  }
}

btnSiguiente.addEventListener("click", () => {
  preguntaActual++;
  if (preguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  contenedor.innerHTML = "";
  btnSiguiente.style.display = "none";
  resultado.classList.remove("oculto");
  resultado.innerHTML = `<h2>Tu puntuación: ${puntuacion} de ${preguntas.length}</h2>`;
  if (resultado == 15) {
    print("Eres un mega fan, los conoces mejor que ellos mismos")
  }
  
}

mostrarPregunta();
