"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { AlioniLogo } from '@/components/logo';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/locales/translations';

export function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { href: '#story', label: t.nav.ourStory },
    { href: '#products', label: t.nav.ourHoney },
    { href: '#faq', label: t.nav.faq },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <AlioniLogo className="h-20 text-primary" />
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-widest uppercase text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <Button variant="link" size="sm" onClick={() => setLanguage('en')} className={`text-sm ${language === 'en' ? 'text-primary' : 'text-foreground/70'}`}>EN</Button>
            <span className="text-foreground/70">/</span>
            <Button variant="link" size="sm" onClick={() => setLanguage('tr')} className={`text-sm ${language === 'tr' ? 'text-primary' : 'text-foreground/70'}`}>TR</Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background">
                <div className="flex flex-col gap-6 p-6">
                   <Link href="/">
                    <AlioniLogo className="h-20 text-primary" />
                  </Link>
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                       <SheetTrigger asChild key={link.href}>
                          <Link
                            href={link.href}
                            className="text-lg font-medium tracking-widest uppercase text-foreground/80 transition-colors hover:text-primary"
                          >
                            {link.label}
                          </Link>
                      </SheetTrigger>
                    ))}
                  </nav>
                  <div className="flex items-center gap-2 mt-8">
                    <Button variant="link" onClick={() => setLanguage('en')} className={`text-lg ${language === 'en' ? 'text-primary' : 'text-foreground/80'}`}>EN</Button>
                    <span className="text-foreground/80">/</span>
                    <Button variant="link" onClick={() => setLanguage('tr')} className={`text-lg ${language === 'tr' ? 'text-primary' : 'text-foreground/80'}`}>TR</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
