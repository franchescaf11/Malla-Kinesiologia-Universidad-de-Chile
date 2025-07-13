document.addEventListener('DOMContentLoaded', function () {
  const prerrequisitos = {
    "Fisiología General": ["Bases Integradas de Química, Bioquímica, Biología Celular y Genética", "Física"],
    "Bases Integradas de Infectología, Inmunología y Farmacología General": ["Neuroanatomía", "Fisiología General"],
    "Biomecánica, Lesión y Reparación Tisular": ["Estructura y Función Tisular"],
    "Examen Kinésico Básico": ["Anatomía estructural y funcional I", "Anatomía estructural y funcional II"],
    "Procedimientos Terapéuticos Básicos y Generales": ["Introducción al estudio del Movimiento Humano", "Examen Kinésico Básico"],
    "Educación Física II": ["Educación Física I"],
    "Fisiología de Sistemas": ["Fisiología General"],
    "Fisiopatología y Farmacología de Sistemas": ["Fisiología de Sistemas", "Bases Integradas de Infectología, Inmunología y Farmacología General"],
    "Evaluación e Intervención en la Neurokinesiología I": ["Kinesiología del Desarrollo Psicomotor"],
    "Efectos de la actividad Física en la salud": ["Examen de la Condición Física y la Conducta Motora", "Fisiopatología y Farmacología de Sistemas"],
    "Actividad Física y Deportes": ["Educación Física I", "Efectos de la actividad Física en la salud"],
    "Evaluación e Intervención en Cuidados Respiratorios I": ["Examen de la Condición Física y la Conducta Motora"],
    "Evaluación e Intervención en Musculoesquelético I": ["Procedimientos Terapéuticos Básicos y Generales"],
    "Evaluación e Intervención en la Neurokinesiología II": ["Evaluación e Intervención en la Neurokinesiología I"],
    "Evaluación e Intervención en Musculoesquelético II": ["Evaluación e Intervención en Musculoesquelético I"],
    "Evaluación e Intervención en Cuidados Respiratorios II": ["Evaluación e Intervención en Cuidados Respiratorios I"],
    "Razonamiento Clínico": [
      "Evaluación e Intervención en Cuidados Respiratorios I",
      "Evaluación e Intervención en Musculoesquelético I",
      "Evaluación e Intervención en la Neurokinesiología I"
    ],
    "Estrategias Deportivas y Recreativas": ["Actividad Física y Deportes"],
    "Estrategias Deportivas y Recreativas Aplicadas": ["Estrategias Deportivas y Recreativas"],
    "Intervención Profesional en Contexto I": [
      "Efectos de la actividad Física en la salud",
      "Evaluación e Intervención en Cuidados Respiratorios II",
      "Evaluación e Intervención en Musculoesquelético II",
      "Evaluación e Intervención en la Neurokinesiología II"
    ],
    "Intervención Profesional en Contexto II": [
      "Evaluación e Intervención en Cuidados Respiratorios II",
      "Evaluación e Intervención en Musculoesquelético II",
      "Evaluación e Intervención en la Neurokinesiología II"
    ],
    "Análisis de la Relación Persona Entorno": [
      "Evaluación e Intervención en Cuidados Respiratorios II",
      "Evaluación e Intervención en Musculoesquelético II",
      "Evaluación e Intervención en la Neurokinesiología II"
    ],
    "Evaluación Ergonómica": ["Análisis de la Relación Persona Entorno"],
    "Proyectos de Intervención Ergonómica": ["Evaluación Ergonómica"],
    "Intervención Profesional I": ["Intervención Profesional en Contexto II"],
    "Intervención Profesional II": ["Intervención Profesional I"],
    "Cursos de Profundización Diciplinar y Profesional": [
      "Intervención Profesional en Contexto I",
      "Intervención Profesional en Contexto II"
    ]
  };

  const ramos = document.querySelectorAll('.ramo');

  ramos.forEach(ramo => {
    const nombre = ramo.textContent.trim();
    const requisitos = prerrequisitos[nombre] || [];

    const cumplido = requisitos.every(req => {
      const reqElem = [...ramos].find(r => r.textContent.trim() === req);
      return reqElem && reqElem.classList.contains('aprobado');
    });

    if (ramo.classList.contains('aprobado')) {
      return;
    }

    if (cumplido) {
      ramo.classList.remove('bloqueado');
      ramo.classList.add('desbloqueado');
      ramo.addEventListener('click', () => {
        ramo.classList.toggle('aprobado');
        ramo.classList.toggle('desbloqueado');
        location.reload();
      });
    } else {
      ramo.classList.add('bloqueado');
    }
  });
});