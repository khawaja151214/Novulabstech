"use client";

import React, { useEffect, useRef } from 'react';

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  ph: number;
  ps: number;
  hub: boolean;
}

interface DataPacket {
  from: number;
  to: number;
  t: number;
  sp: number;
}

const ParticlesCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const G1 = '93,224,230'; // Cyan/blue base color RGB (#5DE0E6)
    const G2 = '0,72,141';   // Deep blue (#00488D)
    const G3 = '165,243,252'; // Light cyan (#a5f3fc)
    let W = 0;
    let H = 0;
    let nodes: ParticleNode[] = [];
    let packets: DataPacket[] = [];
    let animationFrameId: number = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };

    const buildNodes = () => {
      nodes = [];
      const count = Math.max(48, Math.min(80, Math.floor((W * H) / 14000)));
      for (let i = 0; i < count; i++) {
        const hub = i < 8;
        nodes.push({
          x: hub ? W * (0.08 + (0.84 / 7) * i) + (Math.random() - 0.5) * 80
                 : Math.random() * W,
          y: hub ? H * (0.25 + Math.random() * 0.50)
                 : Math.random() * H,
          vx: hub ? 0 : (Math.random() - 0.5) * 0.32,
          vy: hub ? 0 : (Math.random() - 0.5) * 0.32,
          r: hub ? Math.random() * 3 + 5 : Math.random() * 2.2 + 1.2,
          ph: Math.random() * Math.PI * 2,
          ps: Math.random() * 0.020 + 0.010,
          hub
        });
      }
    };

    resize();
    buildNodes();

    const handleResize = () => {
      resize();
      buildNodes();
    };

    window.addEventListener('resize', handleResize);

    const spawnPacket = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          if (Math.sqrt(dx * dx + dy * dy) < 160 && Math.random() < 0.018) {
            packets.push({ from: i, to: j, t: 0, sp: Math.random() * 0.006 + 0.004 });
            return;
          }
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Update node positions
      nodes.forEach(n => {
        n.ph += n.ps;
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        n.x = Math.max(0, Math.min(W, n.x));
        n.y = Math.max(0, Math.min(H, n.y));
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${G1},${(1 - d / 160) * 0.28})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // Draw circuit cross-arms on hub nodes
      nodes.filter(n => n.hub).forEach(n => {
        const len = 38 + Math.sin(n.ph) * 14;
        ctx.strokeStyle = `rgba(${G1},0.14)`;
        ctx.lineWidth = 1;
        
        const arms = [
          [n.x - len, n.y, n.x + len, n.y],
          [n.x, n.y - len, n.x, n.y + len]
        ];

        arms.forEach(([x1, y1, x2, y2]) => {
          ctx.beginPath(); 
          ctx.moveTo(x1, y1); 
          ctx.lineTo(x2, y2); 
          ctx.stroke();

          ctx.beginPath(); 
          ctx.arc(x1, y1, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G2},0.42)`; 
          ctx.fill();

          ctx.beginPath(); 
          ctx.arc(x2, y2, 1.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G2},0.42)`; 
          ctx.fill();
        });
      });

      // Draw data packets
      packets = packets.filter(p => p.t < 1);
      packets.forEach(p => {
        p.t += p.sp;
        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (n1 && n2) {
          const x = n1.x + (n2.x - n1.x) * p.t;
          const y = n1.y + (n2.y - n1.y) * p.t;
          const trail = ctx.createRadialGradient(x, y, 0, x, y, 7);
          trail.addColorStop(0, `rgba(${G3},0.92)`);
          trail.addColorStop(0.5, `rgba(${G1},0.38)`);
          trail.addColorStop(1, `rgba(${G1},0)`);
          ctx.beginPath(); 
          ctx.arc(x, y, 7, 0, Math.PI * 2);
          ctx.fillStyle = trail; 
          ctx.fill();

          ctx.beginPath(); 
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${G3},1)`; 
          ctx.fill();
        }
      });
      
      if (Math.random() < 0.05) spawnPacket();

      // Draw node dots
      nodes.forEach(n => {
        const pulse = Math.sin(n.ph);
        const r = n.r + pulse * (n.hub ? 2 : 0.8);
        const a = 0.50 + pulse * 0.20;

        if (n.hub) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5);
          glow.addColorStop(0, `rgba(${G1},0.22)`);
          glow.addColorStop(0.5, `rgba(${G1},0.06)`);
          glow.addColorStop(1, `rgba(${G1},0)`);
          ctx.beginPath(); 
          ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2);
          ctx.fillStyle = glow; 
          ctx.fill();

          ctx.beginPath(); 
          ctx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(${G1},0.16)`; 
          ctx.lineWidth = 1; 
          ctx.stroke();
        }

        const core = ctx.createRadialGradient(n.x - 1, n.y - 1, 0, n.x, n.y, r);
        core.addColorStop(0, `rgba(${G3},${a})`);
        core.addColorStop(1, `rgba(${G1},${a * 0.40})`);
        ctx.beginPath(); 
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = core; 
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      id="particles-canvas" 
      ref={canvasRef} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ParticlesCanvas;
