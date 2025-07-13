const ramos = {
    "Semestre 1": [
        "Bases Integradas de Química, Bioquímica, Biología Celular y Genética",
        "Anatomía estructural y funcional I",
        "Estructura y Función Tisular",
        "Física",
        "Estrategias de Búsqueda Bibliográfica",
        "Introducción a la Kinesiología"
    ],
    "Semestre 2": [
        "Anatomía Estructural y Funcional II",
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
        "Educación Física I"
    ],
    "Semestre 4": [
        "Fisiopatología y Farmacología de Sistemas",
        "Examen de la Condición Física y la Conducta Motora",
        "Procedimientos Terapéuticos Básicos y Generales",
        "Kinesiología del Desarrollo Psicomotor",
        "Lectura Crítica de Artículos Científicos",
        "Análisis Epidemiológico"
    ],
    "Semestre 5": [
        "Efectos de la actividad Física en la salud",
        "Evaluación e Intervención en la Neurokinesiología I",
        "Evaluación e Intervención en Cuidados Respiratorios I",
        "Evaluación e Intervención en Musculoesquelético I",
        "Revisión Bibliográfica",
        "Análisis del Modelo de Salud Chileno",
        "Modulo Integrado Interdisciplinario y Multiprofesional I",
        "Educación Física II",
        "Inglés IV"
    ],
    "Semestre 6": [
        "Evaluación e Intervención en la Neurokinesiología II",
        "Evaluación e Intervención en Cuidados Respiratorios II",
        "Evaluación e Intervención en Musculoesquelético II",
        "Razonamiento Clínico",
        "Diseño y Formulación de Proyectos de Investigación",
        "Responsabilidad del Ejercicio Profesional",
        "Actividad Física y Deportes"
    ],
    "Semestre 7": [
        "Intervención Profesional en Contexto I",
        "Estrategias Deportivas y Recreativas",
        "Análisis de la Relación Persona Entorno",
        "Determinantes Sociales de la Salud",
        "Ejecución de Proyectos de Investigación I",
        "Conceptos Básicos de Administración en Salud",
        "Metodologías de Enseñanza Aprendizaje"
    ],
    "Semestre 8": [
        "Intervención Profesional en Contexto II",
        "Estrategias Deportivas y Recreativas Aplicadas",
        "Evaluación Ergonómica",
        "Programas de Promoción y Prevención en Salud",
        "Ejecución de Proyectos de Investigación II",
        "Proyectos de Emprendimientos",
        "Aplicación Básica de Metodologías Docentes",
        "Modulo Integrado Interdisciplinario y Multiprofesional II"
    ],
    "Semestre 9 y 10": [
        "Intervención Profesional I",
        "Intervención Profesional II",
        "Proyectos de Intervención Ergonómica",
        "Intervención en Salud Comunitaria",
        "Cursos de Profundización Disciplinar y Profesional",
        "Comunicación Científica",
        "Administración en Salud"
    ]
};

const prerrequisitos = {
    "Fisiología General": ["Bases Integradas de Química, Bioquímica, Biología Celular y Genética", "Física"],
    "Bases Integradas de Infectología, Inmunología y Farmacología General": ["Neuroanatomía", "Fisiología General"],
    "Biomecánica, Lesión y Reparación Tisular": ["Estructura y Función Tisular"],
    "Examen Kinésico Básico": ["Anatomía estructural y funcional I", "Anatomía Estructural y Funcional II"],
    "Procedimientos Terapéuticos Básicos y Generales": ["Introducción al estudio del Movimiento Humano", "Examen Kinésico Básico"],
    "Educación Física II": ["Educación Física I"],
    "Fisiología de Sistemas": ["Fisiología General"],
    "Fisiopatología y Farmacología de Sistemas": ["Fisiología de Sistemas", "Bases Integradas de Infectología, Inmunología y Farmacología General"],
    "Evaluación e Intervención en la Neurokinesiología I": ["Kinesiología del Desarrollo Psicomotor"],
    "Efectos de la actividad Física en la salud": ["Examen de la Condición Física y la Conducta Motora", "Fisiopatología y Farmacología de Sistemas"],
    "Actividad Física y Deportes": ["Educación Física I", "Efectos de la actividad Física en la salud"]
    // Puedes continuar agregando todos los demás prerrequisitos aquí
};

function crearMalla() {
    const container = document.getElementById("malla-container");
    Object.entries(ramos).forEach(([semestre, listaRamos]) => {
        const columna = document.createElement("div");
        columna.className = "semestre";
        const titulo = document.createElement("h3");
        titulo.textContent = semestre;
        columna.appendChild(titulo);
        listaRamos.forEach(ramo => {
            const div = document.createElement("div");
            div.className = "ramo";
            div.textContent = ramo;
            div.dataset.nombre = ramo;
            if (prerrequisitos[ramo]) {
                div.classList.add("bloqueado");
            }
            div.onclick = () => toggleEstado(div);
            columna.appendChild(div);
        });
        container.appendChild(columna);
    });
    actualizarEstadoInicial();
}

function toggleEstado(div) {
    if (div.classList.contains("bloqueado")) return;
    div.classList.toggle("aprobado");
    verificarDesbloqueos();
}

function verificarDesbloqueos() {
    document.querySelectorAll(".ramo.bloqueado").forEach(div => {
        const requisitos = prerrequisitos[div.dataset.nombre];
        if (requisitos && requisitos.every(nombre => {
            const ramoAprobado = [...document.querySelectorAll(".ramo.aprobado")].some(el => el.dataset.nombre === nombre);
            return ramoAprobado;
        })) {
            div.classList.remove("bloqueado");
        }
    });
}

function actualizarEstadoInicial() {
    verificarDesbloqueos();
}

window.onload = crearMalla;