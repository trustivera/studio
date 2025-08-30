"use client";

import Image from 'next/image';
import { ScrollAnimator } from '@/components/scroll-animator';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/locales/translations';

export function Story() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimator>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="font-body text-lg text-foreground/80 space-y-6 leading-relaxed">
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
                {t.story.title}
              </h2>
              <p>{t.story.p1}</p>
              <p>
                {t.story.p2_part1} <em className="text-primary/80">Apis mellifera caucasica</em>, {t.story.p2_part2}
              </p>
              <p>{t.story.p3}</p>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl shadow-primary/10 transition-transform duration-500 hover:scale-105">
              <Image
                src="/macahel.png"
                alt={t.story.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint="macahel valley"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent"></div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
