import { ScrollAnimator } from '@/components/scroll-animator';
import { HoneyJar3D } from '@/components/honey-jar-3d';

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
              Hover and move your mouse to explore the craftsmanship of our signature honey.
            </p>
          </div>
        </ScrollAnimator>
        <ScrollAnimator delay="0.2s">
            <HoneyJar3D />
        </ScrollAnimator>
      </div>
    </section>
  );
}
