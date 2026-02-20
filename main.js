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
    category: "valoración",
    question: "¿Puedo hacer una valoración en línea?",
    answer:
      "Sí, ofrecemos video-consultas para pacientes foráneos. Aunque para el plan quirúrgico definitivo, es necesaria una revisión presencial antes de la cirugía.",
  },
  {
    category: "valoración",
    question: "¿Cuánto tiempo dura aproximadamente la consulta de valoración?",
    answer:
      "La consulta suele durar entre 45 minutos y 1 hora. Durante este tiempo, el cirujano te escuchará, resolverá todas tus dudas y realizará una evaluación minuciosa para recomendarte el plan adecuado.",
  },
  {
    category: "valoración",
    question: "¿Puedo acudir acompañada a mi cita de valoración?",
    answer:
      "Sí, eres bienvenida a venir con un acompañante si eso te hace sentir más cómoda. Nos importa que en todo momento te sientas segura y apoyada.",
  },
  {
    category: "indicaciones",
    isModal: true,
    buttonText: "Indicaciones previas: Facial",
    modalId: "modal-facial"
  },
  {
    category: "indicaciones",
    isModal: true,
    buttonText: "Indicaciones previas: Contorno corporal",
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
    category: "indicaciones",
    question: "¿Debo suspender algún medicamento antes de la cirugía?",
    answer:
      "Sí, debes suspender aspirinas, antiinflamatorios, anticonceptivos y cualquier suplemento o remedio herbolario al menos 15 días antes. En tu consulta te daremos una lista detallada de lo que debes evitar.",
  },
  {
    category: "indicaciones",
    question: "¿Es necesario estar en ayunas el día del procedimiento?",
    answer:
      "Es indispensable presentarte con un ayuno estricto de 8 horas (sin consumir alimentos sólidos ni líquidos, ni siquiera agua). Esto es fundamental por protocolos de anestesia y seguridad.",
  },
  {
    category: "indicaciones",
    question: "¿Qué pasa si me enfermo de gripe u otra infección antes de la fecha programada?",
    answer:
      "Si presentas síntomas de gripe, tos, fiebre o cualquier infección en los días previos, debes notificar inmediatamente a nuestro equipo médico. Por tu seguridad, la cirugía podría reprogramarse hasta que estés completamente sana.",
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
    category: "cirugía",
    question: "¿Cuánto dura normalmente la intervención?",
    answer:
      "El tiempo varía dependiendo del o los procedimientos a realizar. Una cirugía de contorno corporal puede durar de 3 a 5 horas, mientras que procedimientos faciales toman entre 2 y 4 horas. Tu médico te dará el tiempo estimado exacto en la valoración.",
  },
  {
    category: "cirugía",
    question: "¿El cirujano estará acompañado de otros especialistas?",
    answer:
      "Absolutamente. Nuestro cirujano principal siempre está acompañado de un equipo multidisciplinario altamente calificado, que incluye anestesiólogo certificado, instrumentista y enfermeras circulantes.",
  },
  {
    category: "cirugía",
    question: "¿Qué sucede si hay una emergencia durante la operación?",
    answer:
      "Al operar exclusivamente en hospitales certificados, contamos con todas las instalaciones necesarias (incluyendo terapia intensiva y banco de sangre) y un equipo médico preparado para manejar cualquier eventualidad y garantizar tu seguridad.",
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
    category: "post-cirugía",
    question: "¿Experimentaré mucho dolor después de la operación?",
    answer:
      "Es normal sentir molestias, inflamación y pesadez en los primeros días. Sin embargo, te proporcionaremos un esquema de analgésicos potente y personalizado para que tu recuperación sea lo más cómoda y asintomática posible.",
  },
  {
    category: "post-cirugía",
    question: "¿Cuándo podré bañarme normalmente?",
    answer:
      "Por regla general, autorizamos el baño completo (ducha rápida con agua tibia y jabón neutro) a partir del tercer o cuarto día postoperatorio, dependiendo de tu evolución. El equipo de enfermería te indicará los cuidados para tus incisiones.",
  },
  {
    category: "post-cirugía",
    question: "¿Cómo es el seguimiento médico tras ser dada de alta?",
    answer:
      "El seguimiento es estrecho y cercano. Tendrás revisiones presenciales periódicas (generalmente al día siguiente, a la semana, 15 días, al mes y a los 3 meses) para retirar puntos, monitorear la cicatrización y asegurar un resultado óptimo.",
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
    category: "casarecuperacion",
    question: "¿Puedo recibir visitas durante mi estancia en la casa de recuperación?",
    answer:
      "Sí, las visitas están permitidas, pero sugerimos limitarlas en tiempo y número de personas durante los primeros días para asegurar tu máximo descanso y evitar riesgo de infecciones cruzadas.",
  },
  {
    category: "casarecuperacion",
    question: "¿Cuántos días se recomienda permanecer en la casa postoperatoria?",
    answer:
      "Recomendamos una estancia mínima de 3 a 5 días, que son los días críticos donde necesitas mayor apoyo con tus drenajes, baño y traslados. Algunos pacientes foráneos optan por quedarse de 7 a 10 días o más.",
  },
  {
    category: "casarecuperacion",
    question: "¿Cuentan con dietas especiales o para restricciones alimenticias?",
    answer:
      "Por supuesto. Nuestro equipo de nutrición adapta el plan alimenticio antiinflamatorio a tus necesidades y preferencias sin comprometer los nutrientes esenciales que tu cuerpo necesita para sanar.",
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
    category: "fajas",
    question: "¿Por cuánto tiempo debo usar la faja postoperatoria?",
    answer:
      "Se debe usar de forma continua (día y noche) durante el primer mes, retirándola únicamente para el baño. Posteriormente, el doctor indicará su uso por 12 horas diarias hasta cumplir los 3 meses postoperatorios.",
  },
  {
    category: "fajas",
    question: "¿Cómo debo lavar y cuidar mi prenda de compresión?",
    answer:
      "Se recomienda lavarla a mano con jabón neutro, secarla a la sombra y no usar secadora para mantener la integridad de la tela elástica y la compresión médica constante.",
  },
  {
    category: "fajas",
    question: "¿Es normal sentir que la faja me aprieta excesivamente al principio?",
    answer:
      "Sí, al principio puedes sentirla apretada por la inflamación natural del procedimiento. Sin embargo, nunca debe cortarte la circulación ni dificultar tu respiración. Si esto ocurre, avísanos de inmediato.",
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
    category: "spa",
    question: "¿Duelen los masajes de drenaje linfático?",
    answer:
      "No, un drenaje linfático correcto no debe generar dolor agudo. Son movimientos suaves, rítmicos e indoloros enfocados en desinflamar, eliminar líquidos y relajar los tejidos.",
  },
  {
    category: "spa",
    question: "¿Qué aparatología utilizan en las terapias postquirúrgicas?",
    answer:
      "Utilizamos tecnología de punta aprobada médica y estéticamente, incluyendo ultrasonido terapéutico, radiofrecuencia (en fases posteriores), y presoterapia, aplicados por terapeutas certificadas en cuidados post-cirugía plástica.",
  },
  {
    category: "spa",
    question: "¿Cuántos masajes necesitaré en total?",
    answer:
      "El número promedio ideal es de 10 sesiones, divididas de 2 a 3 por semana. Sin embargo, cada cuerpo es distinto y nuestras especialistas evaluarán si requieres más sesiones de acuerdo a tu nivel de fibrosis e inflamación.",
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
    category: "directorio",
    question: "¿Los estudios de laboratorio tienen fecha de caducidad para la cirugía?",
    answer:
      "Sí, los exámenes preoperatorios no deben tener una antigüedad mayor a 15-20 días respecto a la fecha de tu operación para que reflejen tu estado de salud actual de forma precisa.",
  },
  {
    category: "directorio",
    question: "¿Cuentan con algún servicio de enfermería a domicilio en su directorio?",
    answer:
      "Sí, tenemos alianzas con agencias de enfermeras certificadas que pueden asistir a tu domicilio u hotel para apoyarte con tu cuidado, baños y medicamentos si decides no quedarte en la casa de recuperación.",
  },
  {
    category: "directorio",
    question: "¿Qué pasa si mis estudios de laboratorio preoperatorios tienen resultados anormales?",
    answer:
      "Nuestro equipo médico revisará detalladamente los estudios. De encontrar alteraciones, te pediremos ser valorada por un especialista (como un médico internista o hematólogo) quien deberá emitir una carta de autorización para proceder, garantizando tu seguridad al 100%.",
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
    category: "pagos",
    question: "¿Se requiere un pago inicial para apartar la fecha de cirugía?",
    answer:
      "Sí, solicitamos un anticipo mínimo (establecido en tu presupuesto) para asegurar tu fecha de quirófano y programación con el hospital y anestesiólogo.",
  },
  {
    category: "pagos",
    question: "¿Cuándo debo liquidar el total de mi procedimiento?",
    answer:
      "El saldo total de tu paquete quirúrgico debe estar completamente liquidado al menos 7 días antes de la fecha agendada para tu intervención, para garantizar toda la logística de tu cirugía.",
  },
  {
    category: "pagos",
    question: "¿Qué sucede si necesito cancelar mi cirugía después de haber dado el apartado?",
    answer:
      "Si la cancelación se debe a motivos médicos comprobables no previstos, podemos reagendar sin problema. En caso de cancelación por motivos personales, nuestras políticas aplican retenciones por los gastos administrativos y de reservación ya efectuados con el hospital.",
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
