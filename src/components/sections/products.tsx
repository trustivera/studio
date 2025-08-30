"use client";

import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/locales/translations';

export function Products() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="products" className="py-24 md:py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="relative z-10">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
                {t.products.title}
              </h2>
              <p className="mt-4 max-w-3xl mx-auto font-body text-lg text-foreground/70">
                {t.products.description}
              </p>
            </div>
          </ScrollAnimator>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center items-center pointer-events-none">
          <div className="relative w-full max-w-3xl aspect-square opacity-20 -translate-y-1/4">
            <Image
              src="/honey.png"
              alt={t.products.imageAlt}
              fill
              className="object-contain"
              sizes="800px"
              data-ai-hint="honey jar"
            />
          </div>
        </div>

        <ScrollAnimator delay="0.2s" className="text-center mt-12 relative z-10">
          <Button size="lg" className="uppercase tracking-widest text-base font-semibold">{t.products.cta}</Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}
