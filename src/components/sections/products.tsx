import { ScrollAnimator } from '@/components/scroll-animator';
import Image from 'next/image';

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimator>
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">
              Our Premium Selection
            </h2>
            <p className="mt-4 max-w-2xl mx-auto font-body text-lg text-foreground/80">
              A complex, multi-floral honey with notes of wild berries and mountain herbs.
            </p>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay="0.2s">
           <div className="relative aspect-[4/3] max-w-3xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://picsum.photos/id/292/1200/900"
                alt="A beautiful jar of Alioni Macahel honey."
                fill
                className="object-cover"
                data-ai-hint="honey jar"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 900px"
              />
            </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
