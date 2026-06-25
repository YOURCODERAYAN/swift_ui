export const Button2=[


  {
    main:`
import { useState, useRef } from 'react';
import { cn } from '@/lib/utils'; // or your cn import

export default function GlowButton({ children, className = '' }) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-10 py-5 text-xs uppercase text-white',
        className
      )}
    >
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity: hoverOpacity,
          background: \`radial-gradient(80px circle at \${cursorPosition.x}px \${cursorPosition.y}px, #39ff14ff, transparent),
                       radial-gradient(150px circle at \${cursorPosition.x}px \${cursorPosition.y}px, #39ff1466, transparent),
                       radial-gradient(300px circle at \${cursorPosition.x}px \${cursorPosition.y}px, #39ff1422, #00000026)\`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Button Content */}
      <span className="relative z-20">{children}</span>
    </button>
  );
} `
    
  }
  
]