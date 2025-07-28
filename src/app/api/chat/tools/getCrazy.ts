import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "This tool will share the craziest thing I've ever done. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return `
One of the craziest things I've ever done was going on a solo bike ride across three states without a map — just vibes, a phone with 10% battery, and no idea where I'd sleep that night 😅. 

I ended up camping under the stars, meeting amazing strangers, and documenting the whole journey. Still gives me goosebumps thinking about it! 

    `.trim();
  },
});
