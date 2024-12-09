import { useEffect, useRef } from "react";

export function MatrixScreen() {
  const frame = useRef(0);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
  const fontSize = 10;

  useEffect(() => {
    const letters = characters.split("");
    const canvas = document.getElementById("matrix-bg") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      let columns = canvas.width / fontSize;

      const drops: number[] = [];
      for (let i = 0; i < 256; i++) {
        drops[i] = 0;
      }

      function draw() {
        columns = canvas.width / fontSize;

        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.fillStyle = "rgba(0, 0, 0, .03)";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          for (let i = 0; i < columns; i++) {
            const text = letters[Math.floor(Math.random() * letters.length)];
            ctx.fillStyle = "silver";
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            drops[i]++;
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
              drops[i] = 0;
            }
          }
        }

        setTimeout(() => {
          frame.current = requestAnimationFrame(draw);
        }, 120);
      }

      frame.current = requestAnimationFrame(draw);

      window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });

      return () => {
        window.removeEventListener("resize", () => {});
        cancelAnimationFrame(frame.current);
      };
    }
  }, []);

  return (
    <canvas
      id="matrix-bg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
