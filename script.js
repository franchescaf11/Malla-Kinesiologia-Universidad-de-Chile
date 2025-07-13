const malla = {
    1: [
        "Bases Integradas de Química, Bioquímica, Biología Celular y Genética",
        "Anatomía estructural y funcional l",
        "Estructura y Función Tisular",
        "Física",
        "Estrategias de Búsqueda Bibliográfica",
        "Introducción a la Kinesiología"
    ],
    2: [
        "Anatomía Estructural y Funcional ll",
        "Fisiología General",
        "Neuroanatomía",
        "Biomecánica, Lesión y Reparación Tisular",
        "Introducción al estudio del Movimiento Humano",
        "Principios de Evolución",
        "Lectura Comprensiva de Artículos Científicos"
    ]
    // Los demás semestres serán agregados...
};

function crearMalla() {
    const contenedor = document.getElementById("malla");
    Object.keys(malla).forEach(sem => {
        const columna = document.createElement("div");
        columna.classList.add("semestre");
        const titulo = document.createElement("h3");
        titulo.textContent = `Semestre ${sem}`;
        columna.appendChild(titulo);
        malla[sem].forEach(ramo => {
            const div = document.createElement("div");
            div.classList.add("ramo");
            div.textContent = ramo;
            div.onclick = () => {
                div.classList.toggle("aprobado");
            };
            columna.appendChild(div);
        });
        contenedor.appendChild(columna);
    });
}

window.onload = crearMalla;
