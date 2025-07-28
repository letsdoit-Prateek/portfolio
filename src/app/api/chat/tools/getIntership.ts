import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a detailed summary of the kind of opportunity I'm looking for, along with my professional background, strengths, and contact information. Use this tool when someone asks about my job search, availability, or how to collaborate with me.",
  parameters: z.object({}),
  execute: async () => {
    return `🚀 **Opportunity I'm Seeking**

I'm actively looking for **full-time roles** where I can contribute to building meaningful, scalable, and tech-forward products. I thrive in fast-paced environments where creativity, ownership, and impact are valued.

---

💡 **What I’m Looking For:**  
- 📅 **Start Date**: Available from **August 2025**  
- 🏢 **Role Type**: Full-time position (open to contract or consulting roles)  
- 🌍 **Location Preference**: **Gurugram**, **Bangalore**, **Pune**, or **Remote-first** (open to relocation for the right opportunity)  
- ⚡ **Domains**: Full-stack product engineering, AI-powered applications, mobile-first platforms, infra automation, SaaS tools, developer experience  

---

🛠️ **Tech Stack Proficiency**:
- **Frontend**: React.js, Next.js, Tailwind CSS, Redux, React Native
- **Backend**: Node.js, Express.js, SQL Server, MongoDB, Firebase Functions
- **Cloud & DevOps**: Azure (Blob Storage, Functions, App Services, Pipelines), Redis, Docker, CI/CD pipelines, GitHub Actions
- **Mobile App Dev**: Advanced React Native expertise (both Android and iOS), deep linking, custom navigation, offline caching, error logging, push notifications
- **AI & Systems**: GPT-4, Retrieval-Augmented Generation (RAG), AI orchestration layers, scalable API architectures
- **Others**: Firebase Analytics, Fastlane (CI/CD for mobile), Yarn

---

✅ **What I Bring**:
- 🧑‍💻 **4+ years** as a **Senior Software Developer**, driving delivery across web, mobile, and cloud systems
- 📱 Scaled the **Invest4Edu mobile app** and led key modules including payments, third-party integrations, and Azure orchestration — resulting in a **15% growth in user base**
- 🔐 Built secure, production-ready APIs hosted on Azure App Services with payment gateway and blob storage integrations
- 🧩 Created internal tools for **infrastructure cost optimization**, **work tracking**, and **expense monitoring**
- 🧠 Led teams of **5–10 developers**, owned key decisions, practiced Agile delivery, and mentored junior engineers
- 🏆 Awarded **Employee of the Month** twice for consistent impact, speed, and solution-oriented mindset

---

📬 **Reach Out To Me**:
- 📧 Email: prateekch1999@gmail.com  
- 🔗 LinkedIn: [linkedin.com/in/prateek-1812](https://www.linkedin.com/in/prateek-1812/)  
- 💻 GitHub: [github.com/letsdoit-Prateek](https://github.com/letsdoit-Prateek)  
- 🌐 Portfolio: [prateekchaudhary.dev](https://prateekchaudhary.dev)

---

💥 I believe in building high-quality, human-first digital experiences that scale — and I'm always ready to take on the next challenge.  
Let’s connect and build something impactful together. ✨
    `.trim();
  },
});
