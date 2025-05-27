import { animate, onScroll } from "https://cdn.jsdelivr.net/npm/animejs/+esm";

animate(".intro-section", {
  keyframes: {
    "0%": { opacity: 0.1 },
    "50%": { scale: 1, opacity: 1 },
    "100%": { scale: 2, opacity: 0 },
  },
  autoplay: onScroll({
    container: ".container",
    enter: "center top",
    leave: "top+=40% bottom",
    sync: 0.75,
  }),
});

animate(".main-feature-section__title", {
  keyframes: {
    "0%": { opacity: 0, x: 100 },
    "100%": { opacity: 1, x: 0 },
  },
  autoplay: onScroll({
    container: ".container",
    enter: "bottom top",
    leave: "center bottom",
    sync: 0.75,
  }),
});

animate(".main-feature-section__ul", {
  keyframes: {
    "0%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
  autoplay: onScroll({
    container: ".container",
    enter: "bottom top-=47",
    leave: "center bottom",
    sync: 0.75,
  }),
});

animate(".main-feature-section__li", {
  keyframes: {
    "0%": { opacity: 0, x: 100 },
    "100%": { opacity: 1, x: 0 },
  },
  delay: (_, i) => 200 + i * 100,
  autoplay: onScroll({
    container: ".container",
    enter: "bottom top-=66",
    leave: "center bottom",
    sync: 0.75,
  }),
});

animate(".highlight", {
  backgroundPositionX: "-100%",
  autoplay: onScroll({
    container: ".container",
    enter: "center+=10% top",
    leave: "center+=10% bottom",
    sync: 0.5,
  }),
});

animate(".action-section__button", {
  keyframes: {
    "0%": { opacity: 0, y: 100 },
    "100%": { opacity: 1, y: 0 },
  },
  delay: (_, i) => 200 + i * 100,
  autoplay: onScroll({
    container: ".container",
    enter: "center+=50% top",
    leave: "center bottom",
    sync: 0.75,
  }),
});
