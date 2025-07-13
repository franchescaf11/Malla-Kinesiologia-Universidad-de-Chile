
const ramos = {
  // Estructura {nombre: {semestre, prerrequisitos: [nombres]}}
  "Física": { semestre: 1, prerrequisitos: [] },
  "Bases Integradas de Química, Bioquímica, Biología Celular y Genética": { semestre: 1, prerrequisitos: [] },
  "Fisiología General": { semestre: 2, prerrequisitos: ["Bases Integradas de Química, Bioquímica, Biología Celular y Genética", "Física"] },
  "Neuroanatomía": { semestre: 2, prerrequisitos: [] },
  "Bases Integradas de Infectología, Inmunología y Farmacología General": { semestre: 3, prerrequisitos: ["Neuroanatomía", "Fisiología General"] },
  // Puedes agregar más aquí...
};

const totalSemestres = 10;
const container = document.getElementById("mallaContainer");
const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos") || "{}");

function crearMalla() {
  for (let i = 1; i <= totalSemestres; i++) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h3>Semestre ${i}</h3>`;
    for (const [ramo, datos] of Object.entries(ramos)) {
      if (datos.semestre === i) {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = ramo;

        if (estadoRamos[ramo]) {
          div.classList.add("aprobado");
        } else if (!cumplePrerrequisitos(ramo)) {
          div.classList.add("bloqueado");
        }

        div.onclick = () => {
          if (div.classList.contains("bloqueado")) return;
          div.classList.toggle("aprobado");
          estadoRamos[ramo] = div.classList.contains("aprobado");
          localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
          location.reload();
        };

        col.appendChild(div);
      }
    }
    container.appendChild(col);
  }
}

function cumplePrerrequisitos(ramo) {
  return ramos[ramo].prerrequisitos.every(pr => estadoRamos[pr]);
}

crearMalla();
