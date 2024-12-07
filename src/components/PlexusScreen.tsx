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
    this.size = Math.random() * 5 + 1;
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
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const color = "rgba(" + r + ", " + g + ", " + b + ")";

    this.ctx.fillStyle = color;
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

  let i: number;
  let j: number;
  let dx: number;
  let dy: number;
  let distance: number;

  // Update and draw each particle
  for (i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }

  // Draw lines between particles if they are close enough
  for (i = 0; i < particles.length; i++) {
    for (j = i; j < particles.length; j++) {
      dx = particles[i].x - particles[j].x;
      dy = particles[i].y - particles[j].y;
      distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }

  // Call the animate function again to keep it looping
  requestAnimationFrame(() => {
    animateParticles(particles, canvas, ctx);
  });
};

export function PlexusScreen() {
  useEffect(() => {
    const canvas = document.getElementById("plexusCanvas") as HTMLCanvasElement;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        const particles: Particle[] = [];
        for (let i = 0; i < 100; i++) {
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

        // Resize canvas on window resize
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
      id="plexusCanvas"
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
