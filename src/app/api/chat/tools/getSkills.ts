import { tool } from 'ai';
import { z } from 'zod';

export const getSkills = tool({
  description:
    'This tool returns a categorized list of my technical and professional skills. Use it when someone asks "What are your skills?" or "What technologies do you work with?"',
  parameters: z.object({}),
  execute: async () => {
    return `
Here's a snapshot of my skill set 👇

🧑‍💻 **Frontend**  
- React.js, Next.js, Tailwind CSS, Redux, React Native  
- Responsive UI, Component architecture, Performance optimization

🛠️ **Backend**  
- Node.js, Express.js, Firebase Functions  
- RESTful APIs, Authentication, Microservices, Webhooks

🗃️ **Databases**  
- SQL Server, MongoDB, Firebase Realtime DB, Azure Blob Storage

☁️ **Cloud & DevOps**  
- Microsoft Azure (App Services, Blob Storage, Functions, Pipelines)  
- GitHub Actions, CI/CD, Docker, Redis, Fastlane (for mobile)

📱 **Mobile Development**  
- Advanced React Native (iOS & Android)  
- Push Notifications, Deep Linking, Navigation, Offline Caching, Error Logging

🧠 **AI & Tools**  
- GPT-4, RAG, AI agent orchestration  
- Prompt Engineering, LangChain (basic), OpenAI API

🧑‍💼 **Professional Skills**  
- Team leadership, Agile methodologies, Product mindset, Cross-functional collaboration  
- Decision-making, Infra cost optimization, Internal tool building

Always exploring new tech, solving real-world problems, and writing clean, scalable code. 💡
    `.trim();
  },
});
