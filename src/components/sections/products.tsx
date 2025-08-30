import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="relative z-10">
          <ScrollAnimator>
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
                The Alioni Reserve
              </h2>
              <p className="mt-4 max-w-3xl mx-auto font-body text-lg text-foreground/70">
                Each jar holds the essence of a thousand alpine wildflowers, a complex symphony of flavors with notes of wild berries, sweet chestnut, and a whisper of mountain herbs. This is a rare, multi-floral honey, harvested just once a year, reflecting the untamed spirit of the Macahel valley.
              </p>
            </div>
          </ScrollAnimator>
        </div>

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-0 flex justify-center items-center pointer-events-none">
            <div className="relative w-full max-w-3xl aspect-square opacity-20 -translate-y-1/4">
                <Image
                    src="https://storage.googleapis.com/studio-hosting-assets/asset_1722441999291_processed.png"
                    alt="A beautiful render of an Alioni Limited No. 1 honey jar with a geometric glass design and a wooden cap."
                    fill
                    className="object-contain"
                    data-ai-hint="honey jar product"
                    sizes="800px"
                />
            </div>
        </div>

        <ScrollAnimator delay="0.2s" className="text-center mt-12 relative z-10">
            <Button size="lg" className="uppercase tracking-widest text-base font-semibold">Shop Now</Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}
