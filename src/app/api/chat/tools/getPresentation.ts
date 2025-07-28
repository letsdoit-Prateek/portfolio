import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Prateek Chaudhary. It is used to answer the question "Who are you?" or "Tell me about yourself".',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Prateek Chaudhary — a full-stack developer with 3.5+ years of experience, currently leading mobile development at Invest4Edu. I specialize in building high-performance web and mobile applications, integrating AI workflows, and optimizing cloud infrastructure (especially on Azure).\n\nI’m deeply passionate about clean architecture, intuitive UX, and products that solve real-world problems. Beyond code, I enjoy music, meditation, and getting lost in great books.\n\nEngineer. Problem Solver. Builder at heart. 🚀",
    };
  },
});
