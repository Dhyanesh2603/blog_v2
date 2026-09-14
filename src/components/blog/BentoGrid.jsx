import React from 'react';
import { motion } from 'motion/react';
import ArticleCard from './ArticleCard';

export default function BentoGrid({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {posts.map((post, index) => {
          return (
            <motion.div 
              key={post.id || post.slug}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.55, 
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
