const faqs = [
  {
    category: "valoración",
    question: "¿La valoración inicial tiene costo?",
    answer:
      "Sí, la consulta inicial tiene un costo de recuperación. Sin embargo, si decides programar tu cirugía con nosotros, este monto se bonifica al total de tu procedimiento.",
  },
  {
    category: "valoración",
    question: "¿Qué incluye la valoración inicial?",
    answer:
      "Incluye una evaluación física detallada, discusión de tus objetivos, explicación del procedimiento sugerido, análisis de riesgos y beneficios, y un presupuesto personalizado.",
  },
  {
    category: "indicaciones",
    isModal: true,
    buttonText: "Indicaciones previas a tu cirugía: Facial",
    modalId: "modal-facial"
  },
  {
    category: "indicaciones",
    isModal: true,
    buttonText: "Indicaciones previas a tu cirugía: Contorno corporal",
    modalId: "modal-contorno"
  },
  {
    category: "indicaciones",
    question: "¿Con cuánto tiempo de anticipación debo iniciar mi preparación antes del procedimiento?",
    answer:
      "Te sugerimos iniciar tu protocolo médico al menos 15 días antes. Esto incluye realizar tus estudios de laboratorio, suspender medicamentos específicos si el doctor lo indica y mantener una dieta equilibrada.",
  },
  {
    category: "indicaciones",
    question: "¿Qué elementos es indispensable que lleve conmigo el día programado?",
    answer:
      "Para tu mayor comodidad, recomendamos llevar ropa holgada y fácil de poner (preferentemente abotonada al frente), calzado cómodo, tu identificación oficial y todo el expediente de estudios médicos impreso.",
  },
  {
    category: "cirugía",
    question: "¿En qué clínicas operan?",
    answer:
      "Operamos únicamente en hospitales certificados que cuentan con todas las normas de seguridad y terapia intensiva para garantizar tu bienestar.",
  },
  {
    category: "cirugía",
    question: "¿Qué tipo de anestesia utilizan?",
    answer:
      "Depende del procedimiento. Puede ser anestesia local con sedación, bloqueo regional o anestesia general. Todo esto se define en tu valoración con el anestesiólogo.",
  },
  {
    category: "post-cirugía",
    question: "¿Cuánto tiempo de recuperación necesito?",
    answer:
      "El tiempo varía por procedimiento. Generalmente recomendamos de 7 a 14 días de reposo relativo antes de volver a actividades de oficina, y 4 a 6 semanas para ejercicio intenso.",
  },
  {
    category: "post-cirugía",
    question: "¿Incluyen las fajas y medicamentos?",
    answer:
      "Las prendas postquirúrgicas de primera etapa están incluidas en tu paquete. Los medicamentos se recetan y se adquieren por separado en la farmacia de tu preferencia.",
  },
  {
    category: "casarecuperacion",
    question: "¿Tienen casa de recuperación?",
    answer:
      "Sí, contamos con una exclusiva casa de recuperación diseñada especialmente para tu confort postoperatorio, equipada con todas las comodidades y atención profesional 24/7.",
  },
  {
    category: "casarecuperacion",
    question: "¿Qué incluye la estancia en la casa de recuperación?",
    answer:
      "Nuestra estancia incluye hospedaje premium, alimentación balanceada especializada, asistencia de enfermería 24 horas, lavandería básica y traslado a tus consultas de revisión.",
  },
  {
    category: "fajas",
    question: "¿Cuáles son las fajas recomendadas?",
    answer:
      "Tras la cirugía necesitas prendas de compresión de grado médico. Nosotros proporcionamos tu faja de primera etapa, diseñadas para amoldarse a tu nueva figura y facilitar el drenaje.",
  },
  {
    category: "fajas",
    question: "¿Venden fajas adicionales o de segunda etapa?",
    answer:
      "Sí, en nuestras instalaciones y tienda puedes adquirir fajas de segunda etapa, fajas reloj de arena, tablas abdominales y espumas especiales para continuar esculpiendo tu figura.",
  },
  {
    category: "spa",
    question: "¿Manejan paquetes de masajes de drenaje linfático?",
    answer:
      "Sí, nuestro Spa Postquirúrgico ofrece paquetes especializados de drenaje linfático, ultrasonido y terapias combinadas esenciales para reducir la inflamación y prevenir fibrosis.",
  },
  {
    category: "spa",
    question: "¿Cuándo debo empezar los masajes post-operatorios?",
    answer:
      "Generalmente recomendamos iniciar el drenaje linfático entre el segundo y cuarto día después de la cirugía, siempre y cuando tu cirujano lo autorice y según tu evolución personal.",
  },
  {
    category: "directorio",
    question: "¿Dónde me recomiendan realizar mis estudios preoperatorios para que sean confiables?",
    answer:
      "Para mayor certeza en tus resultados, contamos con un directorio de laboratorios y centros de imagenología de alta confianza que sugerimos a nuestros pacientes, algunos de los cuales ofrecen ventajas o tarifas preferenciales si mencionas que vienes de nuestra parte.",
  },
  {
    category: "directorio",
    question: "¿Con qué especialista puedo acudir si requiero una valoración médica adicional (ej. cardiológica)?",
    answer:
      "Si durante tu evaluación inicial detectamos que necesitas el visto bueno de otro profesional, te compartiremos nuestro listado de especialistas médicos sugeridos (cardiólogos, internistas, etc.) en los que confiamos plenamente para complementar tu cuidado.",
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
    category: "valoración",
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

      if (faq.isModal) {
        faqEl.className = "faq-modal-container";
        faqEl.innerHTML = `
          <button class="btn-modal-trigger" data-modal="${faq.modalId}">
            ${faq.buttonText}
            <i data-lucide="file-text" class="btn-icon"></i>
          </button>
        `;
        faqGrid.appendChild(faqEl);

        const btn = faqEl.querySelector(".btn-modal-trigger");
        btn.addEventListener("click", () => {
          const modal = document.getElementById(faq.modalId);
          if (modal) {
            modal.classList.add("show");
            const modalContent = modal.querySelector('.modal-content');
            if (modalContent) {
              modalContent.scrollTop = 0;
            }
          }
        });
      } else {
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
      }
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

  // Modal Close Logic
  const closeBtns = document.querySelectorAll(".modal-close");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.closest(".modal").classList.remove("show");
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("show");
    }
  });
});
