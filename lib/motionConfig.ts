// Unified Framer Motion animation system for the entire site
// Easing: cubic-bezier(0.22, 1, 0.36, 1)
// Duration: 0.6s – 0.9s

export const EASING = [0.22, 1, 0.36, 1];
export const DURATION = 0.7;

export const fadeInUp = {
  initial: { opacity: 0, y: 40, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: DURATION, ease: EASING } },
};

export const fadeInDown = {
  initial: { opacity: 0, y: -40, filter: 'blur(8px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: DURATION, ease: EASING } },
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -40, filter: 'blur(8px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: DURATION, ease: EASING } },
};

export const fadeInRight = {
  initial: { opacity: 0, x: 40, filter: 'blur(8px)' },
  animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: DURATION, ease: EASING } },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
