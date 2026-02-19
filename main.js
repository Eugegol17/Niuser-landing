const faqs = [
  {
    category: "consulta",
    question: "¿La consulta inicial tiene costo?",
    answer:
      "Sí, la consulta inicial tiene un costo de recuperación. Sin embargo, si decides programar tu cirugía con nosotros, este monto se bonifica al total de tu procedimiento.",
  },
  {
    category: "consulta",
    question: "¿Qué incluye la valoración inicial?",
    answer:
      "Incluye una evaluación física detallada, discusión de tus objetivos, explicación del procedimiento sugerido, análisis de riesgos y beneficios, y un presupuesto personalizado.",
  },
  {
    category: "operacion",
    question: "¿En qué clínicas operan?",
    answer:
      "Operamos únicamente en hospitales certificados que cuentan con todas las normas de seguridad y terapia intensiva para garantizar tu bienestar.",
  },
  {
    category: "operacion",
    question: "¿Qué tipo de anestesia utilizan?",
    answer:
      "Depende del procedimiento. Puede ser anestesia local con sedación, bloqueo regional o anestesia general. Todo esto se define en tu valoración con el anestesiólogo.",
  },
  {
    category: "recuperacion",
    question: "¿Cuánto tiempo de recuperación necesito?",
    answer:
      "El tiempo varía por procedimiento. Generalmente recomendamos de 7 a 14 días de reposo relativo antes de volver a actividades de oficina, y 4 a 6 semanas para ejercicio intenso.",
  },
  {
    category: "recuperacion",
    question: "¿Incluyen las fajas y medicamentos?",
    answer:
      "Las prendas postquirúrgicas de primera etapa están incluidas en tu paquete. Los medicamentos se recetan y se adquieren por separado en la farmacia de tu preferencia.",
  },
  {
    category: "pagos",
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos efectivo, transferencia bancaria, y tarjetas de crédito/débito. También contamos con opciones de financiamiento con instituciones aliadas.",
  },
  {
    category: "pagos",
    question: "¿Puedo pagar a meses sin intereses?",
    answer:
      "Sí, contamos con promociones de meses sin intereses con tarjetas participantes. Consulta las promociones vigentes con nuestro equipo de ventas.",
  },
  {
    category: "consulta",
    question: "¿Puedo hacer una valoración en línea?",
    answer:
      "Sí, ofrecemos video-consultas para pacientes foráneos. Aunque para el plan quirúrgico definitivo, es necesaria una revisión presencial antes de la cirugía.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const faqGrid = document.getElementById("faq-grid");
  const navItems = document.querySelectorAll(".faq-nav-item");

  // Render FAQs
  function renderFAQs(filter = "all") {
    faqGrid.innerHTML = "";

    const filteredFaqs =
      filter === "all" ? faqs : faqs.filter((faq) => faq.category === filter);

    filteredFaqs.forEach((faq, index) => {
      const faqEl = document.createElement("div");
      faqEl.className = "faq-item";
      faqEl.innerHTML = `
        <button class="faq-question" aria-expanded="false">
          ${faq.question}
          <i data-lucide="chevron-down" class="faq-icon"></i>
        </button>
        <div class="faq-answer">
          <div class="faq-answer-content">
            ${faq.answer}
          </div>
        </div>
      `;

      faqGrid.appendChild(faqEl);

      // Add event listener
      const questionBtn = faqEl.querySelector(".faq-question");
      questionBtn.addEventListener("click", () => toggleAccordion(faqEl));
    });

    // Re-initialize icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Accordion Logic
  function toggleAccordion(item) {
    const isActive = item.classList.contains("active");

    // Close all other items
    document.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".faq-answer").style.maxHeight = null;
      el.querySelector(".faq-question").setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      item.classList.add("active");
      const answer = item.querySelector(".faq-answer");
      answer.style.maxHeight = answer.scrollHeight + "px";
      item.querySelector(".faq-question").setAttribute("aria-expanded", "true");
    }
  }

  // Navigation Logic
  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      navItems.forEach((nav) => nav.classList.remove("active"));
      e.target.classList.add("active"); // e.target refers to the clicked element
      renderFAQs(e.target.dataset.category);
    });
  });

  // Initial Render
  renderFAQs();
});
