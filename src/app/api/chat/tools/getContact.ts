import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description: 'This tool shows my contact information.',
  parameters: z.object({}),
  execute: async () => {
    return `
Hey there! 👋

Feel free to reach out to me anytime — I'd be happy to connect with you!

📧 Email: prateekch1999@gmail.com  
🔗 LinkedIn: https://www.linkedin.com/in/prateek-1812/  
💻 GitHub: https://github.com/letsdoit-Prateek
🌐 Portfolio: https://prateekchaudhary.dev

Looking forward to hearing from you! 😊
    `.trim();
  },
});
