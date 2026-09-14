import React from 'react';
import { motion } from 'motion/react';
import ArticleCard from './ArticleCard';

export default function BentoGrid({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {posts.map((post, index) => {
          // Alternating side animation:
          // index % 2 === 0 slides in from left (-60px)
          // index % 2 === 1 slides in from right (+60px)
          const fromLeft = index % 2 === 0;
          const initialX = fromLeft ? -65 : 65;

          return (
            <motion.div 
              key={post.id || post.slug}
              initial={{ opacity: 0, x: initialX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.65, 
                delay: (index % 3) * 0.08, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="h-full flex flex-col"
            >
              <ArticleCard 
                post={post} 
                className="h-full flex-1" 
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
