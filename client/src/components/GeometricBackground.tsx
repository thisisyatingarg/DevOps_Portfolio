import { useEffect, useRef } from 'react';

export default function GeometricBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create floating geometric shapes
    const createShape = () => {
      const shapes = ['triangle', 'circle', 'square', 'hexagon'];
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const element = document.createElement('div');
      
      element.className = `floating-shape floating-${shape}`;
      element.style.left = Math.random() * 100 + '%';
      element.style.animationDelay = Math.random() * 20 + 's';
      element.style.animationDuration = (Math.random() * 10 + 15) + 's';
      
      container.appendChild(element);
      
      // Remove element after animation
      setTimeout(() => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }, 25000);
    };

    // Create initial shapes
    for (let i = 0; i < 8; i++) {
      setTimeout(createShape, i * 2000);
    }

    // Continue creating shapes
    const interval = setInterval(createShape, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Gradient meshes */}
      <div className="absolute inset-0 opacity-20 dark:opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-400/30 to-blue-600/30 rounded-full filter blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-indigo-400/30 to-purple-500/30 rounded-full filter blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
    </div>
  );
}