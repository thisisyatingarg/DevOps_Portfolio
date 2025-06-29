import { useEffect, useRef } from 'react';

export default function QuantumDots() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createQuantumDot = () => {
      const dot = document.createElement('div');
      dot.className = 'quantum-dot';
      dot.style.left = Math.random() * 100 + '%';
      dot.style.top = Math.random() * 100 + '%';
      dot.style.animationDelay = Math.random() * 8 + 's';
      dot.style.animationDuration = (Math.random() * 4 + 6) + 's';
      
      container.appendChild(dot);
      
      setTimeout(() => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
        }
      }, 10000);
    };

    // Create initial dots
    for (let i = 0; i < 30; i++) {
      setTimeout(createQuantumDot, i * 100);
    }

    // Continue creating dots
    const interval = setInterval(createQuantumDot, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="quantum-dots" />;
}