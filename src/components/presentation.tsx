'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export function Presentation() {
  // Personal information
  const profile = {
  name: 'Prateek Chaudhary',
  age: '25 years old',
  location: 'Uttar Pradesh, India 🇮🇳',
  description:
    "Hey 👋\nI'm Prateek, a Senior Software Engineer with 4+ years of experience in product-based startups. I currently lead mobile app development at Invest4Edu, building scalable systems across React Native, Node.js, and Azure. I'm passionate about creating impactful tech solutions, clean architecture, and driving productivity through GenAI-powered workflows. Outside of coding, you'll find me exploring new technologies, reading, or enjoying good food.",
  src: '/profile-prateek.png',
  fallbackSrc:
    'https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3',
};

  // Animation variants for text elements
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  // Animation for the entire paragraph rather than word-by-word
  const paragraphAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  } as const;

  return (
    <div className="mx-auto w-full max-w-5xl py-6 font-sans">
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:items-center">
        {/* Image section */}
        <div className="relative mx-auto aspect-square w-full max-w-sm md:order-first">
          <div className="relative h-full w-full overflow-hidden rounded-2xl">
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              className="h-full w-full"
            >
              <Image
                src={profile.src}
                alt={profile.name}
                width={500}
                height={500}
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = profile.fallbackSrc;
                }}
              />
            </motion.div>
          </div>
        </div>

        {/* Text content section */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h1 className="from-foreground to-muted-foreground bg-gradient-to-r bg-clip-text text-xl font-semibold text-transparent md:text-3xl">
              {profile.name}
            </h1>
            <div className="mt-1 flex flex-col gap-1 justify-center md:justify-start md:flex-row md:items-center md:gap-4">
              <p className="text-muted-foreground">{profile.age}</p>
              <div className="bg-border hidden h-1.5 w-1.5 rounded-full md:block" />
              <p className="text-muted-foreground">{profile.location}</p>
            </div>
          </motion.div>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={paragraphAnimation}
            className="text-foreground mt-6 leading-relaxed whitespace-pre-line text-center md:text-left"
          >
            {profile.description}
          </motion.p>

          {/* Tags/Keywords */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start"
          >
            {['Senior Software Engineer', 'React Native Expert', 'Azure Cloud', 'Full-Stack', 'India'].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
