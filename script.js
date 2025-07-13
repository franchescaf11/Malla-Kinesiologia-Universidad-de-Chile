const ramos = {
  1: [
    "Bases Integradas de Química, Bioquímica, Biología Celular y Genética",
    "Anatomía estructural y funcional I",
    "Estructura y Función Tisular",
    "Física",
    "Estrategias de Búsqueda Bibliográfica",
    "Introducción a la Kinesiología"
  ],
  2: [
    "Anatomía Estructural y Funcional II",
    "Fisiología General",
    "Neuroanatomía",
    "Biomecánica, Lesión y Reparación Tisular",
    "Introducción al estudio del Movimiento Humano",
    "Principios de Evolución",
    "Lectura Comprensiva de Artículos Científicos"
  ],
  3: [
    "Fisiología de Sistemas",
    "Bases Integradas de Infectología, Inmunología y Farmacología General",
    "Examen Kinésico Básico",
    "Control y Aprendizaje Motor",
    "Fundamentos de la Investigación Científica",
    "Educación Física l"
  ],
  4: [
    "Fisiopatología y Farmacología de Sistemas",
    "Examen de la Condición Física y la Conducta Motora",
    "Procedimientos Terapéuticos Básicos y Generales",
    "Kinesiología del Desarrollo Psicomotor",
    "Lectura Critica de Artículos Científicos",
    "Análisis Epidemiológico"
  ],
  5: [
    "Efectos de la actividad Fisica en la salud",
    "Evaluación e Intervención en la Neurokinesiología I",
    "Evaluación e Intervención en Cuidados Respiratorios I",
    "Evaluación e Intervención en Musculoesquelético I",
    "Revisión Bibliográfica",
    "Análisis del Modelo de Salud Chileno",
    "Modulo Integrado Interdisciplinario y Multiprofesional I",
    "Educación Física II",
    "Ingles IV"
  ],
  6: [
    "Evaluación e Intervención en la Neurokinesiología II",
    "Evaluación e Intervención en Cuidados Respiratorios II",
    "Evaluación e Intervención en Musculoesquelético II",
    "Razonamiento Clínico",
    "Diseño y Formulación de Proyectos de Investigación",
    "Responsabilidad del Ejercicio Profesional",
    "Actividad Física y Deportes"
  ],
  7: [
    "Intervención Profesional en Contexto I",
    "Estrategias Deportivas y Recreativas",
    "Análisis de la Relación Persona Entorno",
    "Determinantes Sociales de la Salud",
    "Ejecución de Proyectos de Investigación I",
    "Conceptos Básicos de Administración en Salud",
    "Metodologías de Enseñanza Aprendizaje"
  ],
  8: [
    "Intervención Profesional en Contexto II",
    "Estrategias Deportivas y Recreativas Aplicadas",
    "Evaluación Ergonómica",
    "Programas de Promoción y Prevención en Salud",
    "Ejecución de Proyectos de Investigación II",
    "Proyectos de Emprendimientos",
    "Aplicación Básica de Metodologías Docentes",
    "Modulo Integrado Interdisciplinario y Multiprofesional II"
  ],
  9: [
    "Intervención Profesional I",
    "Intervención Profesional II",
    "Proyectos de Intervención Ergonómica",
    "Intervención en Salud Comunitaria",
    "Cursos de Profundización Diciplinar y Profesional",
    "Comunicación Científica",
    "Administración en Salud"
  ]
};

const container = document.getElementById("malla-container");

Object.keys(ramos).forEach(num => {
  const sem = document.createElement("div");
  sem.className = "semestre";
  const title = document.createElement("h3");
  title.textContent = `Semestre ${num}`;
  sem.appendChild(title);

  ramos[num].forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo no-aprobado";
    div.textContent = ramo;
    div.onclick = () => {
      if (div.classList.contains("bloqueado")) return;
      div.classList.toggle("aprobado");
      div.classList.toggle("no-aprobado");
    };
    sem.appendChild(div);
  });

  container.appendChild(sem);
});
