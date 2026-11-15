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
- React.js, Next.js, React Native, Vue.js, TypeScript, Redux, Tailwind CSS, Material UI, HTML/CSS
- Responsive UI, Component architecture, Performance optimization

🛠️ **Backend**  
- Node.js, Express.js, Python, Firebase Functions
- RESTful APIs, Authentication, Microservices, Webhooks

🗃️ **Databases**  
- SQL Server, MongoDB, Firebase Realtime DB, Azure Blob Storage

☁️ **Cloud & DevOps**  
- Microsoft Azure (App Services, Blob Storage, Functions, Service Bus, Pipelines)
- GitHub Actions, CI/CD, Docker, Redis, Fastlane (for mobile)

📱 **Mobile Development**  
- Advanced React Native (iOS & Android)  
- Push Notifications, Deep Linking, Navigation, Offline Caching, Error Logging
- Real-time chat (Mattermost), Infinite-scroll video feeds

📊 **Analytics & Monitoring**
- Firebase, PostHog, Sentry, WebEngage, Google Analytics, Microsoft Clarity

🧠 **AI & Tools**  
- GPT-4, RAG, AI agent orchestration  
- Prompt Engineering, GenAI code assistance, LangChain (basic), OpenAI API

🧰 **Tools**
- Git, Jira, Azure Boards, Postman

🧑‍💼 **Professional Skills**  
- Team leadership, Agile methodologies, Product mindset, Cross-functional collaboration  
- Decision-making, Infra cost optimization, Internal tool building

Always exploring new tech, solving real-world problems, and writing clean, scalable code. 💡
    `.trim();
  },
});
