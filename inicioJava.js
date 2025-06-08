// Mostrar sección seleccionada y ocultar las demás
function mostrar(id) {
  const secciones = document.querySelectorAll(".contenido");
  secciones.forEach(section => section.classList.remove("activo"));

  const activa = document.getElementById(id);
  if (activa) {
    activa.classList.add("activo");
  }
}

// Cargar álbumes desde XML
document.addEventListener("DOMContentLoaded", () => {
  fetch("AlbumesCanciones.xml")
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const xml = parser.parseFromString(data, "application/xml");

      const albums = xml.getElementsByTagName("album");
      const tbody = document.getElementById("tablaAlbumes")?.querySelector("tbody");

      if (tbody) {
        for (let i = 0; i < albums.length; i++) {
          const titulo = albums[i].getAttribute("title");
          const anio = albums[i].getAttribute("year");

          const fila = document.createElement("tr");
          fila.innerHTML = `
            <td><a href="album.html?nombre=${encodeURIComponent(titulo)}">${titulo}</a></td>
            <td>${anio}</td>
          `;
          tbody.appendChild(fila);
        }
      }
    })
    .catch(error => {
      console.error("Error al cargar el XML:", error);
    });
});
