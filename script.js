
const ramos = [
  { id: "anatomia", nombre: "Anatomía", semestre: 1, requisitos: [] },
  { id: "biologia", nombre: "Biología Celular", semestre: 1, requisitos: [] },
  { id: "fisica", nombre: "Física", semestre: 1, requisitos: [] },
  { id: "quimica", nombre: "Química", semestre: 1, requisitos: [] },
  { id: "neuroanatomia", nombre: "Neuroanatomía", semestre: 2, requisitos: ["anatomia"] },
  { id: "fisiologia", nombre: "Fisiología", semestre: 2, requisitos: ["biologia"] },
  { id: "biomecanica", nombre: "Biomecánica", semestre: 3, requisitos: ["fisica", "anatomia"] },
  { id: "kine_basal", nombre: "Kinesiología Basal", semestre: 4, requisitos: ["fisiologia"] },
  { id: "evaluacion", nombre: "Evaluación Kinésica", semestre: 5, requisitos: ["kine_basal"] },
  { id: "respiratoria", nombre: "Kinesiología Respiratoria", semestre: 6, requisitos: ["evaluacion"] },
  { id: "neurokine", nombre: "Kinesiología en Neurorehabilitación", semestre: 7, requisitos: ["evaluacion"] },
  { id: "deportiva", nombre: "Kinesiología Deportiva", semestre: 8, requisitos: ["evaluacion"] },
  { id: "internado1", nombre: "Internado 1", semestre: 9, requisitos: ["respiratoria", "neurokine"] },
  { id: "internado2", nombre: "Internado 2", semestre: 10, requisitos: ["internado1"] },
];

const estado = {};

function crearMalla() {
  const contenedor = document.getElementById("malla");
  const semestres = [...new Set(ramos.map(r => r.semestre))];
  semestres.forEach(s => {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = `Semestre ${s}`;
    columna.appendChild(titulo);

    ramos.filter(r => r.semestre === s).forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.textContent = r.nombre;
      div.id = r.id;
      if (r.requisitos.length > 0 && !r.requisitos.every(req => estado[req])) {
        div.classList.add("bloqueado");
      }
      div.addEventListener("click", () => {
        if (div.classList.contains("bloqueado")) return;
        div.classList.toggle("aprobado");
        estado[r.id] = div.classList.contains("aprobado");
        actualizarBloqueos();
      });
      columna.appendChild(div);
    });

    contenedor.appendChild(columna);
  });
}

function actualizarBloqueos() {
  ramos.forEach(r => {
    const div = document.getElementById(r.id);
    if (!div.classList.contains("aprobado")) {
      if (r.requisitos.length > 0 && !r.requisitos.every(req => estado[req])) {
        div.classList.add("bloqueado");
      } else {
        div.classList.remove("bloqueado");
      }
    }
  });
}

crearMalla();
