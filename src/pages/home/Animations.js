import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const textReveal = (node1, node2, node3) => {
  gsap.from([node1, node2, node3], {
    delay: 0.8,
    duration: 1,
    opacity: 0,
    x: -20,
    ease: "Expo.easeInOut",
  });
};

export const titleReveal = (node) => {
  gsap.to(node, {
    delay: 0.4,
    duration: 1,
    width: "100%",
    ease: "Expo.easeInOut",
  });
};
