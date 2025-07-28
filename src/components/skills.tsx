'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Code, Cpu, Cloud, Users, Smartphone, Brain } from 'lucide-react';

const Skills = () => {
  const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Code className="h-5 w-5" />,
    skills: [
      'HTML',
      'CSS',
      'JavaScript/TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      'Redux',
      'Bootstrap',
      'GSAP',
    ],
    color: 'bg-blue-50 text-blue-600 border border-blue-200',
  },
  {
    category: 'Backend & API Engineering',
    icon: <Cpu className="h-5 w-5" />,
    skills: [
      'Node.js',
      'Express.js',
      'REST APIs',
      'Firebase Functions',
      'SQL Server',
      'MongoDB',
      'Microservices',
      'Webhooks',
      'Authentication & Authorization',
    ],
    color: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
  },
  {
    category: 'Mobile Development',
    icon: <Smartphone className="h-5 w-5" />,
    skills: [
      'React Native (iOS & Android)',
      'Push Notifications',
      'Deep Linking',
      'Navigation Architecture',
      'Offline Caching',
      'Error Logging',
      'Fastlane',
    ],
    color: 'bg-yellow-50 text-yellow-600 border border-yellow-200',
  },
  {
    category: 'Cloud & DevOps',
    icon: <Cloud className="h-5 w-5" />,
    skills: [
      'Microsoft Azure (App Services, Blob, Functions, Pipelines)',
      'CI/CD (GitHub Actions)',
      'Docker',
      'Redis',
      'Firebase',
      'Git & GitHub',
    ],
    color: 'bg-cyan-50 text-cyan-600 border border-cyan-200',
  },
  {
    category: 'AI & Modern Stack',
    icon: <Brain className="h-5 w-5" />,
    skills: [
      'GPT-4',
      'Prompt Engineering',
      'RAG (Retrieval-Augmented Generation)',
      'Tool Usage & Orchestration',
      'LangChain (basic)',
      'OpenAI API',
      'Vector DBs (Pinecone, Weaviate)',
    ],
    color: 'bg-purple-50 text-purple-600 border border-purple-200',
  },
  {
    category: 'Soft Skills',
    icon: <Users className="h-5 w-5" />,
    skills: [
      'Team Leadership',
      'Communication',
      'Problem Solving',
      'Decision-Making',
      'Agile & Sprint Planning',
      'Product Thinking',
      'Mentorship',
    ],
    color: 'bg-amber-50 text-amber-600 border border-amber-200',
  },
];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  } as const;

  return (
    <motion.div
      initial={{ scale: 0.98, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="mx-auto w-full max-w-5xl rounded-4xl"
    >
      <Card className="w-full border-none px-0 pb-12 shadow-none">
        <CardHeader className="px-0 pb-1">
          <CardTitle className="text-primary px-0 text-4xl font-bold">
            Skills & Expertise
          </CardTitle>
        </CardHeader>

        <CardContent className="px-0">
          <motion.div
            className="space-y-8 px-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((section, index) => (
              <motion.div
                key={index}
                className="space-y-3 px-0"
                variants={itemVariants}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3 className="text-accent-foreground text-lg font-semibold">
                    {section.category}
                  </h3>
                </div>

                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {section.skills.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={badgeVariants}
                      whileHover={{
                        scale: 1.04,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <Badge className={`border px-3 py-1.5 font-normal`}>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Skills;
