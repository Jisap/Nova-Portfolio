import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Animate an element with a fade-in and slide-up effect on scroll.
 * @param {HTMLElement|string} element - Target element or selector
 * @param {object} options - GSAP and ScrollTrigger customization options
 */
export const animateFadeUp = (element, options = {}) => {
  const {
    delay = 0,                                  // delay before the animation starts (default: 0 seconds)
    duration = 1,                               // duration of the animation (default: 1 second)
    yOffset = 50,                               // vertical offset es el valor por defecto con el que empieza la animacion 50px más abajo
    trigger = element,                          // trigger element
    start = "top 85%",                          // when the top of the trigger hits 85% of the viewport
    toggleActions = "play none none reverse",   // actions to take when the scroll animation enters, leaves, reverses, and resets
    ...rest
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, y: yOffset },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions,
        ...rest,
      },
    }
  );
};

/**
 * Animate an element with a fade-in and slide-left effect on scroll.
 * @param {HTMLElement|string} element - Target element or selector
 * @param {object} options - GSAP and ScrollTrigger customization options
 */
export const animateFadeLeft = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    xOffset = -50,
    trigger = element,
    start = "top 85%",
    toggleActions = "play none none reverse",
    ...rest
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, x: xOffset },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions,
        ...rest,
      },
    }
  );
};

/**
 * Animate an element with a fade-in and slide-right effect on scroll.
 * @param {HTMLElement|string} element - Target element or selector
 * @param {object} options - GSAP and ScrollTrigger customization options
 */
export const animateFadeRight = (element, options = {}) => {
  const {
    delay = 0,
    duration = 1,
    xOffset = 50,
    trigger = element,
    start = "top 85%",
    toggleActions = "play none none reverse",
    ...rest
  } = options;

  return gsap.fromTo(
    element,
    { opacity: 0, x: xOffset },
    {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions,
        ...rest,
      },
    }
  );
};

/**
 * Animate multiple children elements with a staggered fade-up effect on scroll.
 * @param {HTMLElement[]|string} elements - Array of elements or selector query
 * @param {object} options - GSAP and ScrollTrigger customization options
 */
export const animateStaggeredFadeUp = (elements, options = {}) => {
  const {
    delay = 0,                                       // Tiempo de espera (en segundos) antes de que empiece la animación del primer elemento.
    duration = 0.8,                                  // Duración de la animación para cada elemento (en segundos).
    stagger = 0.15,                                  // Pequeño retraso adicional entre la animación de cada elemento consecutivo.
    yOffset = 40,                                    // Valor por defecto 40px más abajo.
    trigger = elements,                              // Elemento que activa la animación cuando entra en el viewport.
    start = "top 85%",                               // Cuándo empieza la animación. "top 85%" significa que la animación comienza cuando el borde superior del trigger alcanza el 85% de la altura del viewport.
    toggleActions = "play none none reverse",        // Acciones que toma la animación cuando entra, sale, revierte y se reinicia.
    ...rest
  } = options;

  return gsap.fromTo(
    elements,
    { opacity: 0, y: yOffset },     // Estado inicial: opacidad 0 (invisible) y desplazado 40px hacia abajo.
    {
      opacity: 1,                   // Estado final: opacidad 1 (visible) y desplazado 0px (posición original).
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power2.out",
      scrollTrigger: {
        trigger,
        start,
        toggleActions,
        ...rest,
      },
    }
  );
};

/**
 * Automatically set up scroll-triggered animations based on css classes within a container.
 * @param {HTMLElement} container - The container element holding the animated targets
 * @returns {gsap.Context} - GSAP Context for easy cleanup
 */
export const initScrollAnimations = (container) => {                          // Función encargada de inicializar todas las animaciones de scroll, buscando los elementos con las clases correspondientes en el contenedor proporcionado.
  const ctx = gsap.context(() => {                                            // Crea un nuevo Context de GSAP que buscara animaciones de elementos individuales y animaciones de grupos de elementos.
    // 1. Single Fade Up elements
    const fadeUpElements = container.querySelectorAll(".gsap-fade-up");
    fadeUpElements.forEach((el) => {
      animateFadeUp(el);
    });

    // 2. Single Fade Left elements
    const fadeLeftElements = container.querySelectorAll(".gsap-fade-left");
    fadeLeftElements.forEach((el) => {
      animateFadeLeft(el);
    });

    // 3. Single Fade Right elements
    const fadeRightElements = container.querySelectorAll(".gsap-fade-right");
    fadeRightElements.forEach((el) => {
      animateFadeRight(el);
    });

    // 4. Stagger containers/elements
    // Find all stagger containers
    const staggerContainers = container.querySelectorAll(".gsap-stagger-container");  // 1º busca los padres
    staggerContainers.forEach((parent) => {
      const items = parent.querySelectorAll(".gsap-stagger-item");                    // 2º busca los hijos
      if (items.length > 0) {
        animateStaggeredFadeUp(items, { trigger: parent });                           // 3º aplica la animación a los hijos
      }
    });
  }, container);

  return ctx;
};
