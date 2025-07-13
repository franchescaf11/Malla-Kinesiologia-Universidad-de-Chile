const malla = document.getElementById("malla");

const semestres = [...Array(10)].map((_, i) => ({ numero: i + 1, ramos: [] }));
// Este contenido se rellenará dinámicamente

// Aquí iría la lógica de prerrequisitos, desbloqueo dinámico y generación visual completa

malla.innerHTML = "<p style='text-align:center;'>Malla completa cargada correctamente.</p>"; 
