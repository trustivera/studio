import * as React from 'react';
import { cn } from '@/lib/utils';

export function AlioniLogo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("font-headline", className)}
      {...props}
    >
      <text x="50%" y="40" dominantBaseline="middle" textAnchor="middle" fontSize="32" fill="currentColor" letterSpacing="0.15em">
        ALIONI
      </text>
      <g transform="translate(85 55) scale(0.6)">
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          d="M15 5 L 5 15 L 5 35 L 15 45 L 25 45 L 35 35 L 35 15 L 25 5 Z M 20 2 L 10 12 L 10 38 L 20 48 L 30 38 L 30 12 Z"
        />
        <path
          fill="currentColor"
          d="M20,25 L12,17 L14,15 L20,21 L26,15 L28,17 Z M12,27 L20,35 L28,27 L26,25 L20,31 L14,25 Z"
        />
      </g>
    </svg>
  );
}
