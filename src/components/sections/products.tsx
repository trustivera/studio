import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
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
        <ScrollAnimator delay="0.2s">
           <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden ">
              <Image
                src="https://storage.googleapis.com/studio-hosting-assets/asset_1722420959828_processed.jpeg"
                alt="A beautiful jar of Alioni Macahel honey against a dark, moody background."
                fill
                className="object-contain"
                data-ai-hint="honey jar product"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
        </ScrollAnimator>
        <ScrollAnimator delay="0.4s" className="text-center mt-12">
            <Button size="lg" className="uppercase tracking-widest text-base font-semibold">Shop Now</Button>
        </ScrollAnimator>
      </div>
    </section>
  );
}
