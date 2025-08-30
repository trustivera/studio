
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';


// Use process.env for API key, fallback to empty string if not set
const apiKey = process.env.GOOGLE_API_KEY || '';

export const ai = genkit({
  plugins: [googleAI({ apiKey })],
  model: 'googleai/gemini-2.5-flash',
});
