document.documentElement.classList.add("js-ready");

const projects = {
  whatsapp: {
    type: "Inteligencia artificial · Automatización",
    title: "Asistente con WhatsApp",
    status: "En desarrollo",
    summary: "Prototipo de integración que conecta mensajería, automatización y procesamiento con inteligencia artificial.",
    challenge: "Coordinar mensajes, respuestas y datos operativos sin concentrar toda la lógica en un único servicio difícil de mantener.",
    solution: "Separar la recepción de mensajes, los flujos de n8n y el procesamiento en Python mediante webhooks y servicios ejecutados en contenedores.",
    outcome: "La arquitectura y los flujos principales continúan en evolución. El siguiente paso es publicar una demostración y documentar casos de prueba.",
    tags: ["Python", "n8n", "Webhooks", "APIs REST", "Docker", "IA"],
    links: []
  },
  autotask: {
    type: "Backend · Java · Automatización",
    title: "AutoTask Runner",
    status: "Prototipo",
    summary: "Aplicación de escritorio para observar carpetas y ejecutar acciones configurables cuando se detectan cambios en archivos.",
    challenge: "Automatizar tareas repetitivas sin fijar cada regla directamente en el código ni perder el control sobre los eventos procesados.",
    solution: "Combinar observación del sistema de archivos, reglas en JSON, tareas programadas y una separación clara entre detección, validación y ejecución.",
    outcome: "El prototipo permite practicar eventos, manejo de archivos y diseño por capas. Falta consolidar pruebas y preparar su repositorio público.",
    tags: ["Java", "JSON", "File Watcher", "Scheduler", "POO"],
    links: []
  },
  dashboard: {
    type: "Análisis de datos · Dashboard",
    title: "Dashboard Financiero Estacional",
    status: "En evolución",
    summary: "Exploración interactiva de datos bursátiles para comparar el comportamiento de índices y observar patrones temporales.",
    challenge: "Convertir series financieras dispersas en comparaciones comprensibles sin ocultar la calidad, periodicidad o limitaciones de los datos.",
    solution: "Construir un flujo de limpieza con Pandas y una interfaz en Streamlit para filtrar periodos, comparar activos y visualizar tendencias.",
    outcome: "La exploración y sus visualizaciones continúan creciendo. El próximo hito es documentar el origen de los datos y publicar una demostración reproducible.",
    tags: ["Python", "Streamlit", "Pandas", "Excel", "Visualización"],
    links: []
  },
  cards: {
    type: "Java · Proyecto académico",
    title: "Colección de cartas",
    status: "Repositorio público",
    summary: "Aplicación Java que carga cartas desde archivos, administra una colección y presenta sus datos mediante una interfaz gráfica.",
    challenge: "Modelar distintos tipos de cartas y permitir que la colección creciera sin concentrar todas las decisiones en una única clase.",
    solution: "Aplicar patrones Singleton, Factory y Strategy, separar modelo, controlador y vista, y utilizar Swing para la interfaz.",
    outcome: "Proyecto académico publicado con creación polimórfica de cartas, estrategias de ordenamiento y una interfaz reutilizable.",
    tags: ["Java", "Swing", "Factory", "Strategy", "Singleton", "POO"],
    links: [{ label: "Ver repositorio", url: "https://github.com/Seggov/Taller_4_VFinal" }]
  },
  movies: {
    type: "Datos · Streamlit",
    title: "Explorador de películas",
    status: "Demo pública",
    summary: "Aplicación interactiva para explorar el rendimiento histórico de géneros cinematográficos usando datos de TMDB.",
    challenge: "Permitir que una persona filtre años y géneros sin tener que manipular directamente el conjunto de datos.",
    solution: "Cargar y transformar los datos con Pandas, exponer filtros con Streamlit y representar las series mediante gráficos de Altair.",
    outcome: "Repositorio reproducible y demostración pública con filtros, tabla dinámica y visualización temporal.",
    tags: ["Python", "Streamlit", "Pandas", "Altair", "CSV"],
    links: [
      { label: "Ver repositorio", url: "https://github.com/Seggov/movies-dataset" },
      { label: "Abrir demo", url: "https://movies-dataset-template.streamlit.app/" }
    ]
  },
  game: {
    type: "Desarrollo de juegos · Colaboración",
    title: "Juego 2D colaborativo",
    status: "Repositorio público",
    summary: "Repositorio de práctica colaborativa para experimentar con mecánicas, escenas y organización de un proyecto de juego.",
    challenge: "Coordinar recursos y cambios de varios participantes mientras se aprende una arquitectura orientada a escenas.",
    solution: "Trabajar con control de versiones, responsabilidades separadas y componentes de juego que puedan evolucionar de forma independiente.",
    outcome: "Experiencia práctica de colaboración, integración y resolución de conflictos dentro de un proyecto de juego.",
    tags: ["Godot", "GDScript", "Git", "Trabajo en equipo"],
    links: [{ label: "Ver repositorio", url: "https://github.com/Seggov/jueguitoJuegote" }]
  },
  poo: {
    type: "Java · Aprendizaje",
    title: "Prácticas de programación orientada a objetos",
    status: "Repositorio público",
    summary: "Ejercicios y material práctico para fortalecer modelado de clases, responsabilidades y colaboración con Git.",
    challenge: "Pasar de ejercicios aislados a soluciones con responsabilidades claras y código que pueda explicarse y mantenerse.",
    solution: "Organizar ejemplos por tema, practicar encapsulamiento y polimorfismo, y documentar decisiones de diseño.",
    outcome: "Una bitácora pública del aprendizaje en Java y programación orientada a objetos.",
    tags: ["Java", "POO", "Git", "Documentación"],
    links: [{ label: "Ver repositorio", url: "https://github.com/Seggov/Ayudantias-POO" }]
  }
};

const miniProjects = [
  {
    id: "cards",
    type: "Java · POO",
    title: "Colección de cartas",
    description: "Aplicación académica con interfaz Swing y patrones Factory, Strategy y Singleton.",
    tags: ["Java", "Swing", "Patrones"]
  },
  {
    id: "movies",
    type: "Datos",
    title: "Explorador de películas",
    description: "Dashboard Streamlit para comparar ingresos de géneros cinematográficos a través del tiempo.",
    tags: ["Python", "Pandas", "Altair"]
  },
  {
    id: "game",
    type: "Colaboración",
    title: "Juego 2D colaborativo",
    description: "Práctica de integración, control de versiones y desarrollo basado en escenas.",
    tags: ["Godot", "GDScript", "Git"]
  },
  {
    id: "poo",
    type: "Aprendizaje",
    title: "Prácticas de POO",
    description: "Ejercicios y material para fortalecer diseño orientado a objetos y documentación técnica.",
    tags: ["Java", "POO", "Equipo"]
  }
];

const track = document.getElementById("miniProjects");
const prevButton = document.getElementById("prevProject");
const nextButton = document.getElementById("nextProject");
const progressBar = document.getElementById("scrollProgress");
const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

function renderMiniProjects() {
  if (!track) return;

  track.innerHTML = miniProjects.map((project) => `
    <article class="carousel-card">
      <p class="mini-type">${project.type}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <ul class="tags">
        ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
      </ul>
      <button type="button" class="text-link project-trigger" data-project="${project.id}">
        Ver detalles <span aria-hidden="true">↗</span>
      </button>
    </article>
  `).join("");
}

function scrollCarousel(direction) {
  if (!track) return;
  const amount = Math.min(380, track.clientWidth * .85);
  track.scrollBy({ left: direction * amount, behavior: "smooth" });
}

function updateProgress() {
  if (!progressBar) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function setText(id, value) {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
}

function openProject(projectId) {
  const project = projects[projectId];
  if (!project || !modal) return;

  setText("modalType", project.type);
  setText("modalTitle", project.title);
  setText("modalStatus", project.status);
  setText("modalSummary", project.summary);
  setText("modalChallenge", project.challenge);
  setText("modalSolution", project.solution);
  setText("modalOutcome", project.outcome);

  const tags = document.getElementById("modalTags");
  const actions = document.getElementById("modalActions");
  if (tags) {
    tags.replaceChildren(...project.tags.map((tag) => {
      const item = document.createElement("li");
      item.textContent = tag;
      return item;
    }));
  }

  if (actions) {
    actions.replaceChildren();
    if (project.links.length) {
      project.links.forEach((link, index) => {
        const anchor = document.createElement("a");
        anchor.className = `button ${index === 0 ? "primary" : "secondary"}`;
        anchor.href = link.url;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        anchor.textContent = link.label;
        actions.append(anchor);
      });
    } else {
      const note = document.createElement("span");
      note.className = "button disabled";
      note.textContent = "Repositorio público próximamente";
      note.setAttribute("aria-disabled", "true");
      actions.append(note);
    }
  }

  modal.showModal();
  document.body.classList.add("modal-open");
}

function closeProject() {
  if (!modal?.open) return;
  modal.close();
  document.body.classList.remove("modal-open");
}

function closeNavigation() {
  if (!mainNav || !navToggle) return;
  mainNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.querySelector(".sr-only").textContent = "Abrir menú";
}

renderMiniProjects();
prevButton?.addEventListener("click", () => scrollCarousel(-1));
nextButton?.addEventListener("click", () => scrollCarousel(1));
track?.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    event.preventDefault();
    scrollCarousel(event.key === "ArrowLeft" ? -1 : 1);
  }
});

document.addEventListener("click", (event) => {
  const trigger = event.target.closest(".project-trigger");
  if (trigger) openProject(trigger.dataset.project);
});

modalClose?.addEventListener("click", closeProject);
modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeProject();
});
modal?.addEventListener("close", () => document.body.classList.remove("modal-open"));

navToggle?.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navToggle.querySelector(".sr-only").textContent = isOpen ? "Abrir menú" : "Cerrar menú";
  mainNav?.classList.toggle("open", !isOpen);
});
mainNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", () => {
  updateProgress();
  if (window.innerWidth > 820) closeNavigation();
});
updateProgress();

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.delay || 0);
      window.setTimeout(() => entry.target.classList.add("revealed"), delay);
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: .12 });

  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      mainNav?.querySelectorAll("a").forEach((link) => {
        link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: "-30% 0px -60%", threshold: 0 });

  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("revealed"));
}
