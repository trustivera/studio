import { HoneyDroplets } from '@/components/honey-droplets';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background">
      <HoneyDroplets />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary tracking-wider">
          Alioni Macahel
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg md:text-xl text-foreground/80">
          Discover the rare and exquisite taste of honey, harvested from the pristine and untouched valleys of Macahel, a UNESCO World Biosphere Reserve.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#products">Explore Our Honey</Link>
        </Button>
      </div>
      <Link href="#story" className="absolute bottom-10 z-10" aria-label="Scroll down">
        <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
      </Link>
    </section>
  );
}
