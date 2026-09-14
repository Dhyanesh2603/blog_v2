import { motion } from 'motion/react';
import ArticleCard from '../blog/ArticleCard';

export function RelatedPosts({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-24 border-t border-[var(--color-border)] mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-heading-1 mb-10">Continue Reading</h2>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
              }}
            >
              <ArticleCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default RelatedPosts;
