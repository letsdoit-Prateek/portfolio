import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Prateek Chaudhary. It is used to answer the question "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Prateek Chaudhary — a Senior Software Engineer with 5+ years in product-based startups (most recently Binaried Technology and Shoppin). I build scalable web and mobile products with React, Next.js, React Native, Node.js, SQL and Azure, own features end to end, and have driven 25%+ productivity gains through GenAI-powered development workflows while shipping analytics, payments and real-time chat features.\n\nI’m deeply passionate about clean architecture, intuitive UX, and products that solve real-world problems. Beyond code, I enjoy music, meditation, and getting lost in great books.\n\nEngineer. Problem Solver. Builder at heart. 🚀",
    };
  },
});
