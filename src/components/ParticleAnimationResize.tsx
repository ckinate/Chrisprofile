import { useEffect, useRef } from "react";

export default function ParticleAnimationResize() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Particle class defined outside useEffect
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
  
      constructor(canvas: HTMLCanvasElement) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.5;
      }
  
      update(canvas: HTMLCanvasElement) {
        this.x += this.speedX;
        this.y += this.speedY;
  
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  
        // Slight opacity change for twinkling effect
        this.opacity += Math.random() * 0.02 - 0.01;
        if (this.opacity < 0.5) this.opacity = 0.5;
        if (this.opacity > 1) this.opacity = 1;
      }
  
      draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) {
        console.error("Canvas element not found");
        return;
      }
  
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get 2D context for canvas");
        return;
      }
  
      let animationFrameId: number;
      let particles: Particle[] = [];
  
      // Set canvas size to match full document
      const resizeCanvas = () => {
        canvas.width = document.documentElement.scrollWidth;
        canvas.height = document.documentElement.scrollHeight;
        console.log("Canvas resized to:", canvas.width, "x", canvas.height);
  
        // Reinitialize particles to cover the new canvas size
        particles = Array.from({ length: 100 }, () => new Particle(canvas));
        console.log("Reinitialized", particles.length, "particles");
      };
  
      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);
  
      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        // Translate canvas based on scroll position
        ctx.save();
        ctx.translate(-window.scrollX, -window.scrollY);
  
        particles.forEach((particle) => {
          particle.update(canvas);
          particle.draw(ctx);
        });
  
        ctx.restore();
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
  
      // Observe document size changes (e.g., dynamic content)
      const resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
      });
      resizeObserver.observe(document.documentElement);
  
      // Cleanup on unmount
      return () => {
        window.removeEventListener("resize", resizeCanvas);
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
      };
    }, []);
  
    return (
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
      />
    );
}
