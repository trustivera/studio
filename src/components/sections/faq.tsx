"use client";

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateSmartFAQs, type GenerateSmartFAQsOutput } from '@/ai/flows/generate-smart-faqs';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollAnimator } from '@/components/scroll-animator';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/locales/translations';

const formSchema = z.object({
  websiteContent: z.string().min(100, {
    message: "Please provide at least 100 characters of content.",
  }),
});

export function Faq() {
  const { language } = useLanguage();
  const t = translations[language];

  const [faqs, setFaqs] = useState<GenerateSmartFAQsOutput['faqs']>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      websiteContent: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      setFaqs([]);
      try {
        const result = await generateSmartFAQs(values);
        setFaqs(result.faqs);
        if (result.faqs.length === 0) {
          toast({
            title: t.faq.toast.noFaqs.title,
            description: t.faq.toast.noFaqs.description,
          });
        }
      } catch (error) {
        console.error("Error generating FAQs:", error);
        toast({
          variant: "destructive",
          title: t.faq.toast.error.title,
          description: t.faq.toast.error.description,
        });
      }
    });
  }

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-wider">
              {t.faq.title}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto font-body text-lg text-foreground/70">
              {t.faq.subtitle}
            </p>
          </div>
        </ScrollAnimator>
        
        <ScrollAnimator delay="0.2s" className="max-w-4xl mx-auto">
          <Card className="bg-muted/30 border-border/50 shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form action={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="websiteContent"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground/80 font-headline text-lg tracking-wider">{t.faq.form.label}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t.faq.form.placeholder}
                            className="min-h-[200px] font-body bg-background/50 border-border/50 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isPending} className="w-full sm:w-auto uppercase tracking-widest text-base font-semibold">
                    {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {t.faq.form.button}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </ScrollAnimator>

        {(isPending || faqs.length > 0) && (
            <div className="mt-16 max-w-4xl mx-auto">
                {isPending && (
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="p-4 border border-border/30 rounded-lg bg-muted/20">
                                <div className="h-6 w-3/4 bg-muted/50 animate-pulse rounded"></div>
                            </div>
                        ))}
                    </div>
                )}
                {faqs.length > 0 && (
                <ScrollAnimator>
                    <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index} className="border-b-border/30">
                        <AccordionTrigger className="font-headline text-xl text-left hover:no-underline text-primary/90 hover:text-primary py-6">
                            {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="font-body text-base text-foreground/70 pt-2 pb-4">
                            {faq.answer}
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </ScrollAnimator>
                )}
            </div>
        )}
      </div>
    </section>
  );
}
