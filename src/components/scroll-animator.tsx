"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimatorProps {
  children: ReactNode;
  className?: string;
  delay?: string;
}

export function ScrollAnimator({ children, className, delay }: ScrollAnimatorProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn('fade-in-up', { 'is-visible': isVisible }, className)}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}
