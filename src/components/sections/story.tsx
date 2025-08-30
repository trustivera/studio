import Image from 'next/image';
import { ScrollAnimator } from '@/components/scroll-animator';

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimator>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
              <Image
                src="https://picsum.photos/id/1015/800/1000"
                alt="A lush, green valley with misty mountains in the background, representing the pristine Macahel region."
                fill
                className="object-cover"
                data-ai-hint="valley nature"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent"></div>
            </div>
            <div className="font-body text-lg text-foreground/80 space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl text-primary">
                The Macahel Story
              </h2>
              <p>
                Nestled between towering mountains and lush, ancient forests lies Macahel, a valley so pure it has been designated a UNESCO World Biosphere Reserve. Here, time seems to stand still. Our Caucasian bees, a unique and resilient species, forage among a rich tapestry of endemic flora, creating a honey that is as wild and untamed as the landscape itself.
              </p>
              <p>
                Each jar of Alioni Macahel is a testament to this pristine environment. We practice sustainable, traditional beekeeping methods passed down through generations, ensuring the well-being of our bees and the preservation of their natural habitat. This is more than honey; it's a taste of one of the earth's last untouched paradises.
              </p>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
