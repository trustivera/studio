'use server';

/**
 * @fileOverview An AI agent for generating FAQs based on website content.
 *
 * - generateSmartFAQs - A function to generate FAQs based on the provided content.
 * - GenerateSmartFAQsInput - The input type for the generateSmartFAQs function.
 * - GenerateSmartFAQsOutput - The return type for the generateSmartFAQs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSmartFAQsInputSchema = z.object({
  websiteContent: z
    .string()
    .describe('The content of the website to generate FAQs from.'),
});

export type GenerateSmartFAQsInput = z.infer<typeof GenerateSmartFAQsInputSchema>;

const GenerateSmartFAQsOutputSchema = z.object({
  faqs: z.array(
    z.object({
      question: z.string().describe('The FAQ question.'),
      answer: z.string().describe('The answer to the FAQ question.'),
    })
  ).describe('The generated FAQs based on the website content.'),
});

export type GenerateSmartFAQsOutput = z.infer<typeof GenerateSmartFAQsOutputSchema>;

export async function generateSmartFAQs(input: GenerateSmartFAQsInput): Promise<GenerateSmartFAQsOutput> {
  return generateSmartFAQsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSmartFAQsPrompt',
  input: {schema: GenerateSmartFAQsInputSchema},
  output: {schema: GenerateSmartFAQsOutputSchema},
  prompt: `You are an AI assistant designed to generate Frequently Asked Questions (FAQs) based on the content of a website. You will be provided with the website content, and you should generate a list of relevant and helpful FAQs.

  The FAQs should:
  - Be directly based on the information provided in the website content.
  - Reference specific research, flora, or fauna details mentioned in the content.
  - NOT include any information that is not explicitly present in the website content.
  - Be formatted as a list of questions and answers.

Website Content: {{{websiteContent}}}
`,
});

const generateSmartFAQsFlow = ai.defineFlow(
  {
    name: 'generateSmartFAQsFlow',
    inputSchema: GenerateSmartFAQsInputSchema,
    outputSchema: GenerateSmartFAQsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
