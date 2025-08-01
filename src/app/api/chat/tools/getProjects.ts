
import { tool } from "ai";
import { z } from "zod";


export const getProjects = tool({
  description:
    "This tool will show a list of all projects made by Prateek Chaudhary",
  parameters: z.object({}),
  execute: async () => {
    return "Here are all the projects made by Prateek Chaudhary (above)! Don't hesitate to ask me more about them! (don't ";
  },
});