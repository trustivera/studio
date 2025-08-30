import Image from 'next/image';
import { ScrollAnimator } from '@/components/scroll-animator';

export function Story() {
  return (
    <section id="story" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimator>
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="font-body text-lg text-foreground/80 space-y-6 leading-relaxed">
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
                Valley of the Bees
              </h2>
              <p>
                In the far reaches of northeastern Turkey, cradled by the soaring Kaçkar Mountains, lies the Macahel (Camili) Valley—a sanctuary of biodiversity so precious it is protected as a UNESCO World Biosphere Reserve. This isolated haven, with its ancient forests, glacial lakes, and alpine meadows, is one of the last places on Earth where nature's rhythm remains sovereign.
              </p>
              <p>
                Here, a unique and resilient pure-strain of the Caucasian honey bee, <em className="text-primary/80">Apis mellifera caucasica</em>, thrives. These remarkable bees embark on a daily pilgrimage through a landscape bursting with endemic flora. They forage on a rich tapestry of wildflowers, from the vibrant rhododendrons of the high pastures to the sweet blossoms of ancient chestnut forests, creating a honey that is a liquid snapshot of this pristine, untouched ecosystem.
              </p>
              <p>
                 Alioni is more than just honey; it is a solemn promise to preserve this paradise. We practice time-honored, sustainable beekeeping traditions that honor the natural cycles of our bees and their environment. Each jar is a tribute to the land, the bees, and the generations of guardians who have kept the soul of Macahel vibrant and untamed.
              </p>
            </div>
             <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl shadow-primary/10 transition-transform duration-500 hover:scale-105">
              <Image
                src="/macahel.png"
                alt="A stunning, misty mountain landscape in the Macahel Valley, Artvin, with lush green forests."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
               <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent"></div>
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  );
}
