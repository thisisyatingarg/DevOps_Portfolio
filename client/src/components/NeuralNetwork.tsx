import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
}

export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.min(50, Math.floor((canvas.width * canvas.height) / 20000));
      
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          connections: []
        });
      }
      
      // Create connections between nearby nodes
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            );
            if (distance < 150 && Math.random() < 0.3) {
              node.connections.push(j);
            }
          }
        });
      });
      
      nodesRef.current = nodes;
    };

    const drawNode = (node: Node, index: number) => {
      ctx.save();
      
      // Pulsing effect based on time and position
      const pulse = Math.sin(Date.now() * 0.002 + index * 0.5) * 0.3 + 0.7;
      
      // Outer glow
      const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 15);
      gradient.addColorStop(0, `hsla(200, 80%, 60%, ${pulse * 0.8})`);
      gradient.addColorStop(0.4, `hsla(220, 70%, 50%, ${pulse * 0.4})`);
      gradient.addColorStop(1, 'transparent');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Core node
      ctx.fillStyle = `hsla(200, 90%, 70%, ${pulse})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
      ctx.fill();
      
      ctx.restore();
    };

    const drawConnections = () => {
      const nodes = nodesRef.current;
      
      nodes.forEach((node, i) => {
        node.connections.forEach(connectionIndex => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;
          
          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );
          
          if (distance < 200) {
            ctx.save();
            
            // Animated pulse along the connection
            const pulsePosition = (Date.now() * 0.001 + i * 0.1) % 1;
            const opacity = (200 - distance) / 200 * 0.6;
            
            // Main connection line
            ctx.strokeStyle = `hsla(200, 70%, 60%, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();
            
            // Moving pulse
            const pulseX = node.x + (connectedNode.x - node.x) * pulsePosition;
            const pulseY = node.y + (connectedNode.y - node.y) * pulsePosition;
            
            const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8);
            pulseGradient.addColorStop(0, `hsla(180, 80%, 70%, ${opacity})`);
            pulseGradient.addColorStop(1, 'transparent');
            
            ctx.fillStyle = pulseGradient;
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 8, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
          }
        });
      });
    };

    const updateNodes = () => {
      const nodes = nodesRef.current;
      
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
        
        // Keep within bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateNodes();
      drawConnections();
      nodesRef.current.forEach(drawNode);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createNodes();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createNodes();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-60"
      style={{ background: 'transparent' }}
    />
  );
}