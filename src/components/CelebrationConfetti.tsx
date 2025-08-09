import { useEffect } from "react";
import confetti from "canvas-confetti";

const CelebrationConfetti = () => {
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    const primary = `hsl(${css.getPropertyValue('--primary').trim()})`;
    const secondary = `hsl(${css.getPropertyValue('--secondary').trim()})`;
    const accent = `hsl(${css.getPropertyValue('--accent').trim()})`;
    const destructive = `hsl(${css.getPropertyValue('--destructive').trim()})`;

    const colors = [primary, secondary, accent, destructive];

    const duration = 2000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  return null;
};

export default CelebrationConfetti;
