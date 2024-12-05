// Elements
const startEvaluationBtn = document.getElementById('startEvaluation');
const popup = document.getElementById('popup');
const nextSectionBtn = document.getElementById('nextSection');
const sectionTitle = document.getElementById('section-title');
const questionsContainer = document.getElementById('questions-container');
const labels = ['Para nada', 'Rara vez', 'Mas o menos', 'Ocasionalmente', 'Casi siempre', 'Siempre'];
const labelsHTML = labels.map(label => `<span>${label}</span>`).join(' ');

const recomendacion_general = [
  "Excelente. El equipo está bien alineado y funciona de manera óptima. Mantener las estrategias actuales con revisiones periódicas.",
  "Bueno. Hay áreas a mejorar, pero el equipo tiene bases sólidas. Reforzar las recomendaciones de cada sección.",
  "Por mejorar. Es necesario intervenir en múltiples áreas para garantizar el éxito del equipo.",
]

const sections = [
  {
    title: "Sección 1: Objetivos del equipo",
    questions: [
      "¿El equipo comprende claramente los objetivos generales?",
      "¿Los miembros se sienten identificados con los objetivos?",
      "¿Las metas están alineadas con la organización?"
    ],
    recomendaciones: [
      "Excelente: Mantener reuniones periódicas para reforzar la alineación de objetivos y motivar al equipo.",
      "Bueno: Realizar talleres de alineación para profundizar el entendimiento de los objetivos.",
      "Por mejorar: Organizar sesiones de retroalimentación para revisar y aclarar los objetivos del equipo.",
    ],
  },
  {
    title: "Sección 2: Estructura y roles",
    questions: [
      "¿Los roles están claramente definidos?",
      "¿Los roles están alineados con las cualidades individuales?",
      "¿La estructura favorece la colaboración?"
    ],
    recomendaciones: [
      "Excelente: Continuar promoviendo roles claros y revisarlos periódicamente para ajustarse a las necesidades del equipo.",
      "Bueno: Revisar si los roles necesitan adaptaciones para aumentar la eficiencia y claridad.",
      "Por mejorar: Implementar un análisis de competencias y rediseñar roles según fortalezas individuales y necesidades del equipo.",
    ],
  },
  {
    title: "Sección 3: Características de los miembros ",
    questions: [
      "¿El equipo tiene un buen equilibrio entre habilidades técnicas y comprensión del negocio?",
      "¿Los miembros muestran curiosidad, adaptabilidad y una actitud creativa para resolver problemas?",
      "¿El equipo tiene una buena dinámica y sinergia para trabajar juntos?"
    ],
    recomendaciones: [
      "Excelente: Fomentar actividades que refuercen la cohesión del equipo y celebren los logros grupales.",
      "Bueno: Realizar actividades de team-building para mejorar la dinámica.",
      "Por mejorar: Identificar fuentes de conflicto o falta de sinergia y promover un entorno de colaboración más abierto.",
    ],
  },
  {
    title: "Sección 4: Liderazgo del equipo ",
    questions: [
      "¿El liderazgo del equipo fomenta una cultura positiva y alineada con los valores organizacionales?",
      "¿El líder proporciona apoyo en el desarrollo profesional de los miembros del equipo?",
      "¿El líder maneja de manera efectiva los conflictos internos y las salidas del equipo?"
    ],
    recomendaciones: [
      "Excelente: Continuar promoviendo una cultura abierta y fortaleciendo el liderazgo basado en el apoyo y la confianza.",
      "Bueno: Evaluar cómo reforzar los programas de desarrollo profesional y aumentar el soporte a los colaboradores.",
      "Por mejorar: Implementar un programa de liderazgo que incluya formación en resolución de conflictos y desarrollo de talento.",
    ],
  },
  {
    title: "Sección 5: Motivaciones y necesidades del equipo",
    questions: [
      "¿El equipo cuenta con herramientas y acceso a datos adecuados para su trabajo?",
      "¿Los miembros se sienten integrados en la cultura organizacional?",
      "¿Los proyectos asignados fomentan la creatividad y el interés de los miembros del equipo?"
    ],
    recomendaciones: [
      "Excelente: Explorar nuevas tecnologías y metodologías que sigan motivando al equipo.",
      "Bueno: Identificar y suplir carencias en herramientas o integración cultural.",
      "Por mejorar: Priorizar la mejora del acceso a herramientas y el diseño de proyectos que impulsen la creatividad.",
    ],
  },
  {
    title: "Sección 6: Retención y desarrollo de talento",
    questions: [
      "¿El equipo percibe opciones de crecimiento profesional dentro de la organización?",
      "¿Se fomenta la participación en proyectos personales o de pasión dentro del equipo?",
      "¿Existen iniciativas para retener talento y reconocer el valor individual?"
    ],
    recomendaciones: [
      "Excelente: Mantener estrategias de retención y explorar más oportunidades de desarrollo profesional.",
      "Bueno: Incrementar los programas de desarrollo y diseñar proyectos que mantengan el interés del talento clave.",
      "Por mejorar: Crear un plan formal de retención, que incluya proyectos de interés personal y esquemas de reconocimiento.",
    ],
  },
  {
    title: "Sección 7: Habilidades y funciones",
    questions: [
      "¿El equipo de trabajo está conformado por personas adecuadas para sus funciones?",
      "¿Sientes que los conocimientos técnicos fueron bien aplicados en el desarrollo de los modelos?",
      "¿El equipo tiene una buena sinergia a nivel de desarrollos en conjunto?"
    ],
    recomendaciones: [
      "Excelente: Mantener los estándares actuales, fomentar la especialización técnica y explorar proyectos colaborativos desafiantes que sigan desarrollando sinergias.",
      "Bueno: Reforzar la capacitación técnica para potenciar la aplicación de conocimientos y consolidar dinámicas colaborativas en proyectos grupales.",
      "Por mejorar: Evaluar las asignaciones de funciones, implementar un plan de capacitación técnica estructurado y actividades que fortalezcan la sinergia del equipo.",
    ],
  },
  {
    title: "Sección 8: Lineamientos del equipo",
    questions: [
      "¿El equipo desarrolla estrategias para priorizar las tareas y cumplir objetivos?",
      "¿El equipo de trabajo tiene una buena interacción entre sus miembros?",
      "¿El equipo está motivado para desarrollar los proyectos de la organización?",
    ],
    recomendaciones: [
      "Excelente: Mantener las estrategias de priorización actuales y motivar al equipo con metas claras y proyectos alineados con los intereses de sus integrantes.",
      "Bueno: Mejorar la planificación de tareas con herramientas ágiles y fomentar espacios de interacción para mantener la cohesión.",
      "Por mejorar: Establecer lineamientos claros de priorización, implementar dinámicas para fortalecer la interacción y desarrollar programas que incentiven la motivación colectiva.",
    ],
  },
  {
    title: "Sección 9: Ambiente laboral",
    questions: [
      "¿Sientes que tus aportes e ideas han dado un valor agregado?",
      "¿Recibes y brindas una retroalimentación a los procesos del modelo?",
      "¿El ambiente laboral dentro del equipo es amable y cohesivo?",
    ],
    recomendaciones: [
      "Excelente: Continuar promoviendo la retroalimentación constructiva y mantener un ambiente de trabajo colaborativo y valorador de ideas.",
      "Bueno: Fomentar el intercambio de ideas y formalizar espacios regulares de retroalimentación estructurada.",
      "Por mejorar: Diseñar mecanismos que den visibilidad al aporte individual, formalizar canales de retroalimentación y actividades para promover un ambiente laboral más cohesivo.",
    ],
  },

];

let currentSectionIndex = 0;
let scores = {};

// Event Listeners
startEvaluationBtn.addEventListener('click', () => {
  document.querySelector('.intro-container').classList.add('hidden');
  popup.classList.remove('hidden');
  loadSection();
});

nextSectionBtn.addEventListener('click', () => {
  saveScores();
  currentSectionIndex++;
  if (currentSectionIndex < sections.length) {
    loadSection();
  } else {
    showSummary();
  }
});

// Load Section
function loadSection() {
  const currentSection = sections[currentSectionIndex];
  sectionTitle.innerText = currentSection.title;
  questionsContainer.innerHTML = '';

  currentSection.questions.forEach((question, index) => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('slider-container');
    questionContainer.innerHTML = `
      <p>${question}</p>
      <input class="slider-ranges" type="range" min="0" max="5" value="0" id="question-${index}">
      <div class="slider-labels">${labelsHTML}</div>
    `;
    questionsContainer.appendChild(questionContainer);
  });
}

// Save Scores
function saveScores() {
  const currentSection = sections[currentSectionIndex];
  const inputs = questionsContainer.querySelectorAll('input[type="range"]');
  scores[currentSection.title] = Array.from(inputs).map(input => parseInt(input.value));
}

// Función para obtener la recomendación general basada en el puntaje
function getGeneralRecommendation(score) {
  console.log(score)
  if (score >= 100) {
    return recomendacion_general[0];
  } else if (score >= 70) {
    return recomendacion_general[1];
  } else {
    return recomendacion_general[2];
  }
}

// Función para obtener la recomendación basada en el puntaje de la sección
function getRecommendationForSection(title, sectionScore) {
  const sectionIndex = sections.findIndex(section => section.title === title);
  larecomendation = sections[sectionIndex].recomendaciones;
  if (sectionScore >= 12) {
    return larecomendation[0];
  } else if (sectionScore >= 7) {
    return larecomendation[1];
  } else {
    return larecomendation[2];
  }
}

// Show Summary
function showSummary() {
  const summaryHTML = `
    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
    <div class="summary-content">
      <h1>Resumen de la Evaluación</h1>
      <p>Puntuación Global: ${calculateOverallScore()}%</p>
      <p><strong>Recomendación General:</strong> ${getGeneralRecommendation(calculateOverallScore())}</p>
      ${Object.entries(scores)
        .map(
          ([section, values]) => `
          <h2>${section}</h2>
          <p>Puntaje: ${values.reduce((a, b) => a + b, 0)}</p>
          <p><strong>Recomendación:</strong> ${getRecommendationForSection(section, values.reduce((a, b) => a + b, 0))}</p>
        `
        )
        .join('')}
      <div class="button-container">
      <button onclick="window.location.reload()">Ir al Menú</button>
    </div>
    </div>
    <footer>
    <div class="footer-content">
      <div class="footer-item">
        <a href="https://www.linkedin.com/in/yamuna-mena/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank">
          <img src="static/linkedin-logo.png" alt="LinkedIn Logo" />
        </a>
        <p>Yamu Mena</p>
      </div>
      <div class="footer-item">
        <a href="https://www.linkedin.com/in/milton-fabian-cifuentes-ortega/" target="_blank">
          <img src="static/linkedin-logo.png" alt="LinkedIn Logo" />
        </a>
        <p>Milton Cifuentes</p>
      </div>
      <div class="footer-item">
        <a href="https://www.linkedin.com/in/julian-andres-ospina-78456023/" target="_blank">
          <img src="static/linkedin-logo.png" alt="LinkedIn Logo" />
        </a>
        <p>Julian Ospina</p>
      </div>
    </div>
    <div class="university-logo">
      <img src="static/university-logo.png" alt="University Logo" />
    </div>
  </footer>
  `;

  document.body.innerHTML = summaryHTML;

  // Add Scroll Progress Bar
  const progressBar = document.querySelector('.progress-bar');
  window.addEventListener('scroll', () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const percentage = (window.scrollY / maxScroll) * 100;
    progressBar.style.width = `${percentage}%`;
  });

  enableScroll();
}

// Calculate Overall Score
function calculateOverallScore() {
  const totalScore = Object.values(scores).flat().reduce((a, b) => a + b, 0);
  const maxScore = sections.length * 3 * 5; // 3 preguntas por sección, valor máximo 5
  return ((totalScore / maxScore) * 100).toFixed(2);
}

// Cuando el HTML con el contenido adicional se cargue, permite el scroll
function enableScroll() {
  document.body.classList.add('scrollable');
  document.body.classList.remove('no-scroll');
}

// Cuando vuelvas a la página inicial, bloquea el scroll
function disableScroll() {
  document.body.classList.remove('scrollable');
  document.body.classList.add('no-scroll');
}

// Función para cerrar el popup
function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

// Para abrir el popup (por ejemplo, si deseas abrirlo en algún evento)
function openPopup() {
  document.getElementById("popup").classList.remove("hidden");
}