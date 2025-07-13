const ramos = [
  { nombre: "Bases Integradas de Química, Bioquímica, Biología Celular y Genética", semestre: 1 },
  { nombre: "Anatomía estructural y funcional l", semestre: 1 },
  { nombre: "Estructura y Función Tisular", semestre: 1 },
  { nombre: "Física", semestre: 1 },
  { nombre: "Estrategias de Búsqueda Bibliográfica", semestre: 1 },
  { nombre: "Introducción a la Kinesiología", semestre: 1 },
  { nombre: "Anatomía Estructural y Funcional ll", semestre: 2, requisitos: ["Anatomía estructural y funcional l"] },
  { nombre: "Fisiología General", semestre: 2, requisitos: ["Bases Integradas de Química, Bioquímica, Biología Celular y Genética", "Física"] },
  { nombre: "Neuroanatomía", semestre: 2 },
  { nombre: "Biomecánica, Lesión y Reparación Tisular", semestre: 2, requisitos: ["Estructura y Función Tisular"] },
  { nombre: "Introducción al estudio del Movimiento Humano", semestre: 2 },
  { nombre: "Principios de Evolución", semestre: 2 },
  { nombre: "Lectura Comprensiva de Artículos Científicos", semestre: 2 },
];

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (let i = 1; i <= 10; i++) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = `Semestre ${i}`;
    columna.appendChild(titulo);

    const ramosSemestre = ramos.filter(r => r.semestre === i);
    for (const ramo of ramosSemestre) {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = ramo.nombre;
      div.dataset.nombre = ramo.nombre;

      if (ramo.requisitos) {
        div.classList.add("bloqueado");
      }

      div.addEventListener("click", () => toggleRamo(div, ramo));
      columna.appendChild(div);
    }

    contenedor.appendChild(columna);
  }
}

function toggleRamo(div, ramo) {
  if (div.classList.contains("bloqueado")) return;

  const aprobado = div.classList.toggle("aprobado");
  localStorage.setItem(ramo.nombre, aprobado);

  actualizarBloqueos();
}

function actualizarBloqueos() {
  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const ramoData = ramos.find(r => r.nombre === nombre);
    if (!ramoData?.requisitos) return;

    const requisitosCumplidos = ramoData.requisitos.every(req => localStorage.getItem(req) === "true");
    if (requisitosCumplidos) {
      div.classList.remove("bloqueado");
    } else {
      div.classList.add("bloqueado");
    }
  });
}

window.onload = () => {
  crearMalla();

  document.querySelectorAll(".ramo").forEach(div => {
    const nombre = div.dataset.nombre;
    const aprobado = localStorage.getItem(nombre) === "true";
    if (aprobado) div.classList.add("aprobado");
  });

  actualizarBloqueos();
};
