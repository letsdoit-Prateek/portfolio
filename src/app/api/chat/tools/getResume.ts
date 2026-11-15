import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool provides access to my latest resume. Use it when someone asks to see or download my resume.',
  parameters: z.object({}),
  execute: async () => {
    return `
Here's my resume 👇

📄 [Download Resume](/resume_prateek.pdf)

Feel free to reach out if you'd like to discuss opportunities or collaborations!
    `.trim();
  },
});
