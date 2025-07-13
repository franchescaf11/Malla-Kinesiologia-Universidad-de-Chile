const malla = document.getElementById("malla");

const ramos = {
    "Semestre 1": [
        { nombre: "Bases Integradas de Química, Bioquímica, Biología Celular y Genética" },
        { nombre: "Anatomía estructural y funcional l" },
        { nombre: "Estructura y Función Tisular" },
        { nombre: "Física" },
        { nombre: "Estrategias de Búsqueda Bibliográfica" },
        { nombre: "Introducción a la Kinesiología" }
    ],
    "Semestre 2": [
        { nombre: "Anatomía Estructural y Funcional ll", prerequisitos: ["Anatomía estructural y funcional l"] },
        { nombre: "Fisiología General", prerequisitos: ["Bases Integradas de Química, Bioquímica, Biología Celular y Genética", "Física"] },
        { nombre: "Neuroanatomía" },
        { nombre: "Biomecánica, Lesión y Reparación Tisular", prerequisitos: ["Estructura y Función Tisular"] },
        { nombre: "Introducción al estudio del Movimiento Humano" },
        { nombre: "Principios de Evolución" },
        { nombre: "Lectura Comprensiva de Artículos Científicos" }
    ]
};

const estadoRamos = {};

function puedeDesbloquear(prerqs) {
    return !prerqs || prerqs.every(pr => estadoRamos[pr] === "aprobado");
}

function render() {
    malla.innerHTML = "";
    for (const [semestre, ramosSemestre] of Object.entries(ramos)) {
        const col = document.createElement("div");
        col.className = "semestre";
        const title = document.createElement("h3");
        title.textContent = semestre;
        col.appendChild(title);

        ramosSemestre.forEach(ramo => {
            const div = document.createElement("div");
            div.textContent = ramo.nombre;
            const estado = estadoRamos[ramo.nombre];

            if (estado === "aprobado") {
                div.className = "ramo aprobado";
            } else if (!puedeDesbloquear(ramo.prerequisitos)) {
                div.className = "ramo bloqueado";
            } else {
                div.className = "ramo pendiente";
            }

            div.addEventListener("click", () => {
                if (!puedeDesbloquear(ramo.prerequisitos)) return;
                estadoRamos[ramo.nombre] = estadoRamos[ramo.nombre] === "aprobado" ? "pendiente" : "aprobado";
                render();
            });

            col.appendChild(div);
        });

        malla.appendChild(col);
    }
}

render();
