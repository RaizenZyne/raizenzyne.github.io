import { useEffect } from "react";

// Particle constructor
class Particle {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

  constructor(
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.size = Math.random() * 1 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update = () => {
    this.x += this.speedX;
    this.y += this.speedY;

    // Bounce particles off the edges
    if (this.x > this.canvas.width || this.x < 0) {
      this.speedX = -this.speedX;
    }
    if (this.y > this.canvas.height || this.y < 0) {
      this.speedY = -this.speedY;
    }
  };

  draw = () => {
    // const r = Math.floor(Math.random() * 255);
    // const g = Math.floor(Math.random() * 255);
    // const b = Math.floor(Math.random() * 255);
    // const color = "rgba(" + r + ", " + g + ", " + b + ")";

    // this.size = Math.random() * 1;

    this.ctx.fillStyle = "white";
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.fill();
  };
}

// Animate particles
const animateParticles = (
  particles: Particle[],
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw each particle
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  // Call the animate function again to keep it looping
  requestAnimationFrame(() => {
    animateParticles(particles, canvas, ctx);
  });
};

export function ParticleScreen() {
  useEffect(() => {
    const canvas = document.getElementById(
      "particleCanvas"
    ) as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const particles: Particle[] = [];
        const n = Math.floor((canvas.width * canvas.height) / 10000) / 2;
        for (let i = 0; i < n; i++) {
          particles.push(
            new Particle(
              canvas,
              ctx,
              Math.random() * canvas.width,
              Math.random() * canvas.height
            )
          );
        }

        requestAnimationFrame(() => {
          animateParticles(particles, canvas, ctx);
        });

        window.addEventListener("resize", () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        });

        return () => {
          window.removeEventListener("resize", () => {});
        };
      }
    }
  }, []);

  return (
    <canvas
      id="particleCanvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  );
}
