import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { AlioniLogo } from '@/components/logo';

export function Hero() {
  return (
    <section className="relative flex h-screen min-h-[800px] w-full flex-col items-center justify-center overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-10"></div>
       <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        poster="https://picsum.photos/1920/1080?grayscale"
      >
        <source src="https://storage.googleapis.com/studio-hosting-assets/asset_1722421295240_processed.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-20 flex flex-col items-center text-center px-4">
        <AlioniLogo className="h-48 text-primary drop-shadow-[0_2px_10px_hsl(var(--primary)/0.5)]" />

        <p className="mt-2 max-w-2xl font-body text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
          From the heart of Macahel, a UNESCO World Biosphere Reserve, comes a honey as pure and wild as its origins.
        </p>
        <Button asChild size="lg" className="mt-8 uppercase tracking-widest text-base font-semibold">
          <Link href="#products">Discover the Elixir</Link>
        </Button>
      </div>
      <Link href="#story" className="absolute bottom-12 z-20" aria-label="Scroll down">
        <ArrowDown className="h-8 w-8 text-primary/70 animate-bounce" />
      </Link>
    </section>
  );
}
