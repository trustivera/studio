"use client";

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface Droplet {
  id: number;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  size: number;
}

export function HoneyDroplets({ count = 30 }: { count?: number }) {
  const [droplets, setDroplets] = useState<Droplet[]>([]);

  useEffect(() => {
    const generateDroplets = () => {
      const newDroplets: Droplet[] = Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${-10 - Math.random() * 20}%`, // Start above the screen
        animationDuration: `${8 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        opacity: 0.2 + Math.random() * 0.4,
        size: 10 + Math.random() * 20,
      }));
      setDroplets(newDroplets);
    };

    generateDroplets();
  }, [count]);

  return (
    <>
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) rotate(720deg);
            opacity: 0;
          }
        }
        .droplet-anim {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {droplets.map(d => (
          <div
            key={d.id}
            className={cn('droplet-anim absolute')}
            style={{
              left: d.left,
              top: d.top,
              width: `${d.size}px`,
              height: `${d.size * 1.5}px`, // Elongated shape
              backgroundColor: 'hsl(var(--primary))',
              opacity: d.opacity,
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%', // Teardrop shape
              transform: 'rotate(180deg)',
              animationDuration: d.animationDuration,
              animationDelay: d.animationDelay,
            }}
          />
        ))}
      </div>
    </>
  );
}
