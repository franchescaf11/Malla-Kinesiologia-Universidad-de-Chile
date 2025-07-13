const malla = document.getElementById("malla");

const ramos = {
    "Semestre 1": [
        "Bases Integradas de Química, Bioquímica, Biología Celular y Genética",
        "Anatomía estructural y funcional l",
        "Estructura y Función Tisular",
        "Física",
        "Estrategias de Búsqueda Bibliográfica",
        "Introducción a la Kinesiología"
    ],
    "Semestre 2": [
        "Anatomía Estructural y Funcional ll",
        "Fisiología General",
        "Neuroanatomía",
        "Biomecánica, Lesión y Reparación Tisular",
        "Introducción al estudio del Movimiento Humano",
        "Principios de Evolución",
        "Lectura Comprensiva de Artículos Científicos"
    ],
    "Semestre 3": [
        "Fisiología de Sistemas",
        "Bases Integradas de Infectología, Inmunología y Farmacología General",
        "Examen Kinésico Básico",
        "Control y Aprendizaje Motor",
        "Fundamentos de la Investigación Científica",
        "Educación Física l"
    ],
    "Semestre 4": [
        "Fisiopatología y Farmacología de Sistemas",
        "Examen de la Condición Física y la Conducta Motora",
        "Procedimientos Terapéuticos Básicos y Generales",
        "Kinesiología del Desarrollo Psicomotor",
        "Lectura Critica de Artículos Científicos",
        "Análisis Epidemiológico"
    ],
    "Semestre 5": [
        "Efectos de la actividad Fisica en la salud",
        "Evaluación e Intervención en la Neurokinesiología l",
        "Evaluación e Intervención en Cuidados Respiratorios l",
        "Evaluación e Intervención en Musculoesquelético l",
        "Revisión Bibliográfica",
        "Análisis del Modelo de Salud Chileno",
        "Modulo Integrado Interdisciplinario y Multiprofesional l",
        "Educación Fisica ll",
        "Ingles lV"
    ],
    "Semestre 6": [
        "Evaluación e Intervención en la Neurokinesiología ll",
        "Evaluación e Intervención en Cuidados Respiratorios ll",
        "Evaluación e Intervención en Musculoesquelético ll",
        "Razonamiento Clínico",
        "Diseño y Formulación de Proyectos de Investigación",
        "Responsabilidad del Ejercicio Profesional",
        "Actividad Física y Deportes"
    ],
    "Semestre 7": [
        "Intervención Profesional en Contexto l",
        "Estrategias Deportivas y Recreativas",
        "Análisis de la Relación Persona Entorno",
        "Determinantes Sociales de la Salud",
        "Ejecución de Proyectos de Investigación l",
        "Conceptos Básicos de Administración en Salud",
        "Metodologías de Enseñanza Aprendizaje"
    ],
    "Semestre 8": [
        "Intervención Profesional en Contexto ll",
        "Estrategias Deportivas y Recreativas Aplicadas",
        "Evaluación Ergonómica",
        "Programas de Promoción y Prevención en Salud",
        "Ejecución de Proyectos de Investigación ll",
        "Proyectos de Emprendimientos",
        "Aplicación Básica de Metodologías Docentes",
        "Modulo Integrado Interdisciplinario y Multiprofesional ll"
    ],
    "Semestre 9 y 10": [
        "Intervención Profesional l",
        "Intervención Profesional ll",
        "Proyectos de Intervención Ergonómica",
        "Intervención en Salud Comunitaria",
        "Cursos de Profundización Diciplinar y Profesional",
        "Comunicación Científica",
        "Administración en Salud"
    ]
};

const estadoRamos = JSON.parse(localStorage.getItem("estadoRamos") || "{}");

function guardarEstado() {
    localStorage.setItem("estadoRamos", JSON.stringify(estadoRamos));
}

for (const semestre in ramos) {
    const columna = document.createElement("div");
    columna.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = semestre;
    columna.appendChild(titulo);

    ramos[semestre].forEach(nombre => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = nombre;

        if (estadoRamos[nombre] === "aprobado") {
            div.classList.add("aprobado");
        }

        div.addEventListener("click", () => {
            div.classList.toggle("aprobado");
            if (div.classList.contains("aprobado")) {
                estadoRamos[nombre] = "aprobado";
            } else {
                delete estadoRamos[nombre];
            }
            guardarEstado();
        });

        columna.appendChild(div);
    });

    malla.appendChild(columna);
}
