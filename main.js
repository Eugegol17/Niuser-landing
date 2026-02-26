const faqs = [
  {
    category: "valoración",
    question: "¿La valoración inicial tiene costo?",
    answer:
      "Sí, la consulta inicial tiene un costo. La realiza el Dr. Morán, cirujano plástico certificado.",
  },
  {
    category: "valoración",
    question: "¿Qué incluye la valoración inicial?",
    answer:
      "Incluye una evaluación física y médica detallada, discusión de tus objetivos, explicación del procedimiento sugerido, análisis de riesgos y beneficios, y un presupuesto personalizado.",
  },
  {
    category: "valoración",
    question: "¿Puedo hacer una valoración en línea?",
    answer:
      "Sí, ofrecemos videollamadas y valoraciones mediante fotografías para pacientes foráneos. A través de este medio es posible establecer el plan quirúrgico; posteriormente, se realizará una revisión presencial antes de la cirugía para afinar detalles y resolver cualquier duda.",
  },
  {
    category: "valoración",
    question: "¿Cuánto tiempo dura aproximadamente la consulta de valoración?",
    answer:
      "La consulta suele durar entre 20 y 30 minutos, aunque puede extenderse dependiendo de las dudas del paciente. Durante este tiempo, el cirujano te escuchará, resolverá tus inquietudes y realizará una evaluación minuciosa para recomendarte el plan más adecuado. Al pasar al área de exploración física, el doctor es asistido por personal de enfermería, garantizando en todo momento el absoluto respeto a tu privacidad e intimidad.",
  },
  {
    category: "valoración",
    question: "¿Puedo acudir acompañada a mi cita de valoración?",
    answer:
      "Sí, si te hace sentir más cómoda, eres bienvenida a asistir con un acompañante, quien deberá ser mayor de edad. Nos importa que en todo momento te sientas segura y apoyada.<br><br><span style=\"color: var(--accent); font-weight: 600;\">Nota: No se permiten niños, mascotas ni bebés.</span>",
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
      "El protocolo médico de preparación inicia 3 meses antes de tu fecha de cirugía, siguiendo una serie de indicaciones específicas que te proporcionará nuestra área médica.",
  },
  {
    category: "indicaciones",
    question: "¿Qué elementos es indispensable que lleve conmigo el día de mi cirugía?",
    answer:
      "Para tu mayor comodidad, recomendamos llevar ropa holgada y fácil de poner (preferentemente abotonada al frente), calzado cómodo, tu identificación oficial, tu kit de fajas, material de curación y las indicaciones de ingreso.",
  },
  {
    category: "indicaciones",
    question: "¿Debo suspender algún medicamento antes de la cirugía?",
    answer:
      "Sí, es vital suspender el consumo de cigarro, vaporizadores (vape) y marihuana 2 meses antes. Además, debes suspender aspirinas, antiinflamatorios, anticonceptivos, cualquier suplemento, medicamentos para bajar de peso, tés o remedios herbolarios al menos un mes antes. En tu consulta te entregaremos una lista detallada de todo lo que debes evitar para tu seguridad.",
  },
  {
    category: "indicaciones",
    question: "¿Es necesario estar en ayunas el día del procedimiento?",
    answer:
      "Es indispensable presentarte con un ayuno estricto de 8 horas (esto significa no consumir alimentos sólidos ni líquidos; ni siquiera agua, chicles o pastillas tipo Halls). Este paso es fundamental por estándares de protocolo de anestesia y tu propia seguridad.",
  },
  {
    category: "indicaciones",
    question: "¿Qué pasa si me enfermo de gripe u otra infección antes de la fecha programada?",
    answer:
      "Si presentas síntomas de gripe, tos, fiebre o cualquier otra infección en los días previos, debes notificarlo inmediatamente a nuestro equipo médico. Ellos te indicarán cómo proceder. Es muy importante que, por favor, no te automediques bajo ninguna circunstancia.",
  },
  {
    category: "cirugía",
    question: "¿En qué clínicas operan?",
    answer:
      "Operamos únicamente en hospitales certificados que cuentan con todas las normas de seguridad y la capacidad médica necesaria para el manejo de emergencias, garantizando así tu bienestar integral.",
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
      "Absolutamente. Nuestro cirujano principal siempre está acompañado de un equipo multidisciplinario altamente calificado, que incluye anestesiólogo certificado, médico ayudante, enfermera instrumentista y enfermeras circulantes.",
  },
  {
    category: "cirugía",
    question: "¿Qué sucede si hay una emergencia durante la operación?",
    answer:
      "Al operar exclusivamente en hospitales certificados, contamos con todas las instalaciones hospitalarias necesarias (incluyendo terapia intensiva y banco de sangre) y un equipo médico completamente capacitado y preparado para manejar cualquier eventualidad, priorizando tu seguridad en todo momento.",
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
      "No están incluidos, pero tenemos a la venta fajas y kits post-operatorios para garantizar que adquieras la prenda adecuada para tu recuperación, cumpliendo su función sin provocarte complicaciones. La receta médica es personalizada y se emite al momento de tu alta hospitalaria, por lo que los medicamentos deberán ser adquiridos por el paciente al salir del hospital.",
  },
  {
    category: "post-cirugía",
    question: "¿Experimentaré mucho dolor después de la operación?",
    answer:
      "Es normal sentir molestias, inflamación y pesadez durante los primeros días. Sin embargo, te proporcionaremos un esquema de analgésicos potente y personalizado para que tu recuperación sea lo más cómoda y libre de síntomas posible.",
  },
  {
    category: "post-cirugía",
    question: "¿Cuándo podré bañarme normalmente?",
    answer:
      "Por regla general, autorizamos el baño completo desde el momento en que egresas del hospital. El baño debe ser diario, ya que es necesario realizar el cambio de faja y curación de la herida.",
  },
  {
    category: "post-cirugía",
    question: "¿Cómo es el seguimiento médico tras ser dada de alta?",
    answer:
      "El seguimiento es estrecho y cercano. Tendrás revisiones presenciales periódicas (generalmente, la primera cita de revisión es a los 8 días de haber egresado del hospital) para retirar puntos, monitorear la cicatrización y asegurar un resultado óptimo.",
  },
  {
    category: "casarecuperacion",
    question: "¿Tienen casa de recuperación?",
    answer:
      "Sí, contamos con una exclusiva casa de recuperación diseñada especialmente para tu confort postoperatorio, equipada con todas las comodidades y atención profesional 24/7. Desde tu llegada a la ciudad, contamos con transporte para ir por ti al aeropuerto y trasladarte directamente a la casa de recuperación. Nosotros nos haremos cargo de todo durante tu estancia para que no tengas ninguna preocupación.",
  },
  {
    category: "casarecuperacion",
    question: "¿Qué incluye la estancia en la casa de recuperación?",
    answer:
      "Nuestra estancia incluye hospedaje premium, transporte (aeropuerto, citas médicas, hospital y spa), alimentación balanceada especializada, asistencia de enfermería 24 horas y área de lavandería.",
  },
  {
    category: "casarecuperacion",
    question: "¿Puedo recibir visitas durante mi estancia en la casa de recuperación?",
    answer:
      "No se permiten visitas generales, pero tienes derecho a tener un acompañante mayor de edad contigo 24/7 durante tu estancia, quien se alojará en tu misma habitación.",
  },
  {
    category: "casarecuperacion",
    question: "¿Cuántos días se recomienda permanecer en la casa postoperatoria?",
    answer:
      "Recomendamos una estancia mínima de 7 días, ya que son los días críticos donde necesitas mayor apoyo previo al retiro de puntos y drenajes, así como ayuda con tu baño, curaciones, colocación de faja y traslados. Algunos pacientes foráneos optan por quedarse de 15 a 20 días en promedio.",
  },
  {
    category: "casarecuperacion",
    question: "¿Cuentan con dietas especiales o para restricciones alimenticias?",
    answer:
      "Por supuesto. Nuestro equipo de nutrición adapta el plan alimenticio antiinflamatorio a tus necesidades y preferencias, sin comprometer los nutrientes esenciales que tu cuerpo necesita para sanar.",
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
      "Para mayor certeza en tus resultados, contamos con un directorio de laboratorios y centros de imagenología de alta confianza que sugerimos a nuestros pacientes. Algunos de ellos ofrecen ventajas o tarifas preferenciales si mencionas que vas de nuestra parte.",
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
      "Sí, los exámenes preoperatorios no deben tener una antigüedad mayor a 3 meses respecto a la fecha de tu operación, garantizando así que reflejen tu estado de salud actual de forma precisa.",
  },
  {
    category: "directorio",
    question: "¿Cuentan con algún servicio de enfermería a domicilio en su directorio?",
    answer:
      "No, pero nuestro propio equipo de enfermeras puede acudir a tu domicilio para apoyarte con el baño, curaciones y la colocación de tu faja a un costo razonable.",
  },
  {
    category: "directorio",
    question: "¿Qué pasa si mis estudios de laboratorio preoperatorios tienen resultados anormales?",
    answer:
      "Dependiendo de los resultados, el equipo médico determinará cómo proceder. Si el hallazgo es menor (como una infección leve o algo fácil de tratar), te emitirán una receta médica para que adquieras el tratamiento en farmacia, buscando que puedas operarte en tu fecha programada.<br><br>Otra opción es derivarte con un especialista de nuestro directorio de médicos interconsultantes, quien revisará detalladamente los estudios. De encontrar alteraciones significativas, emitirá un diagnóstico autorizando proceder con la cirugía bajo ciertos cuidados, o bien, indicará la suspensión temporal de la misma e iniciará un tratamiento hasta que te encuentres en condiciones favorables de salud. Todo esto es siempre para garantizar tu seguridad al 100%.",
  },
  {
    category: "pagos",
    question: "¿Cuáles son las formas de pago?",
    answer:
      "Aceptamos pagos en efectivo en pesos mexicanos y dólares (si la cotización es en pesos, el dólar se toma al tipo de cambio del día, o viceversa), transferencias bancarias, tarjetas de crédito y débito (de lunes a jueves), depósitos en efectivo, pagos por Zelle, enlaces de pago en línea y transferencias internacionales con código SWIFT. También contamos con opciones de financiamiento a través de instituciones aliadas.<br><br><span style=\"color: var(--accent); font-weight: 600;\">Nota: No aceptamos Western Union, PayPal, cheques, Xoom ni Remitly.</span>",
  },
  {
    category: "pagos",
    question: "¿Puedo pagar a meses sin intereses?",
    answer:
      "Por el momento, no contamos con esquemas de pago a meses sin intereses.",
  },
  {
    category: "pagos",
    question: "¿Se requiere un pago inicial para apartar la fecha de cirugía?",
    answer:
      "Sí, solicitamos un anticipo para asegurar tu fecha de cirugía y, de este modo, coordinar la programación con el personal del hospital y el anestesiólogo.",
  },
  {
    category: "pagos",
    question: "¿Cuándo debo liquidar el total de mi procedimiento?",
    answer:
      "El saldo total de la cirugía debe ser liquidado directamente a Niuser, a más tardar dos semanas antes de la fecha programada para tu intervención.",
  },
  {
    category: "pagos",
    question: "¿Qué sucede si necesito cancelar mi cirugía después de haber dado el apartado?",
    answer:
      "Si la cancelación se debe a motivos médicos comprobables y no previstos, podemos reagendar sin problema o, si lo prefieres, realizar la devolución del anticipo. No obstante, en caso de cancelación por motivos personales aislados a temas médicos, nuestras políticas estipulan retenciones correspondientes a gastos administrativos.",
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
  // Check if we are on the FAQ page without "all" category
  const activeNav = document.querySelector(".faq-nav-item.active");
  if (activeNav) {
    renderFAQs(activeNav.dataset.category);
  } else {
    renderFAQs();
  }

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
