"use client";

import { AlioniLogo } from '@/components/logo';
import { useState, useEffect } from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-t border-border/20">
      <div className="container mx-auto py-12 px-4 md:px-6 text-center text-foreground/60">
        <div className="flex justify-center mb-6">
           <AlioniLogo className="h-24 text-primary" />
        </div>
        {currentYear && <p className="font-body text-sm">&copy; {currentYear} Alioni. All Rights Reserved.</p>}
        <p className="text-xs mt-2 font-body tracking-wider">The Soul of Macahel</p>
      </div>
    </footer>
  );
}
