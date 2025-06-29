import { useEffect, useRef } from 'react';

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const characters = '01';
    const columns = Math.floor(window.innerWidth / 20);
    const drops: number[] = new Array(columns).fill(0);

    const createColumn = (index: number) => {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = index * 20 + 'px';
      column.style.animationDuration = (Math.random() * 3 + 2) + 's';
      column.style.animationDelay = Math.random() * 2 + 's';
      
      let text = '';
      for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
        text += characters[Math.floor(Math.random() * characters.length)] + '<br>';
      }
      column.innerHTML = text;
      
      container.appendChild(column);
      
      setTimeout(() => {
        if (column.parentNode) {
          column.parentNode.removeChild(column);
        }
      }, 5000);
    };

    // Create initial columns
    for (let i = 0; i < Math.min(columns, 20); i++) {
      setTimeout(() => createColumn(i), i * 200);
    }

    // Continue creating columns
    const interval = setInterval(() => {
      const randomColumn = Math.floor(Math.random() * columns);
      createColumn(randomColumn);
    }, 800);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
}