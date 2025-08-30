import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Story } from '@/components/sections/story';
import { Products } from '@/components/sections/products';
import { Faq } from '@/components/sections/faq';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Story />
        <Products />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
