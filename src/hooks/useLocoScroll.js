import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import imagesLoaded from "imagesloaded";

// export const useLocoScroll = () => {
//   useEffect(() => {
//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".page"),
//       smooth: true,
//     });

//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".page", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector(".page").style.transform
//         ? "transform"
//         : "fixed",
//     });

//     // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
//     ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

//     // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
//     ScrollTrigger.refresh();
//   }, []);
// };

// gsap.registerPlugin(ScrollTrigger);

// export default function useLocoScroll() {
//   useEffect(() => {
//     // let locoScroll = null;

//     const locoScroll = new LocomotiveScroll({
//       el: document.querySelector(".page"),
//       smooth: true,
//     });

//     // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
//     locoScroll.on("scroll", ScrollTrigger.update);

//     // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
//     ScrollTrigger.scrollerProxy(".page", {
//       scrollTop(value) {
//         return arguments.length
//           ? locoScroll.scrollTo(value, 0, 0)
//           : locoScroll.scroll.instance.scroll.y;
//       }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//       getBoundingClientRect() {
//         return {
//           top: 0,
//           left: 0,
//           width: window.innerWidth,
//           height: window.innerHeight,
//         };
//       },
//       // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//       pinType: document.querySelector(".page").style.transform
//         ? "transform"
//         : "fixed",
//     });

//     const lsUpdate = () => {
//       if (locoScroll) {
//         locoScroll.update();
//       }
//     };

//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();

//     return () => {
//       if (locoScroll) {
//         ScrollTrigger.removeEventListener("refresh", lsUpdate);
//         locoScroll.destroy();
//         // locoScroll = null;
//         console.log("Kill", locoScroll);
//       }
//     };
//   }, []);
// }

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll() {
  useEffect(() => {
    let locoScroll = null;

    const scrollEl = document.querySelector(".page");

    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.075,
      multiplier: 0.9,
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },

      pinType: scrollEl.style.transform ? "transform" : "fixed",
    });

    const lsUpdate = () => {
      if (locoScroll) {
        // setTimeout(() => {
        // }, 500);

        imagesLoaded(scrollEl, { background: true }, function () {
          locoScroll.update();
        });
      }
    };

    ScrollTrigger.addEventListener("refresh", lsUpdate);
    ScrollTrigger.refresh();

    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener("refresh", lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
        console.log("Kill", locoScroll);
      }
    };
  });
}
