import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

export default function About() {
  return (
    <div className="pt-6 pb-14 md:pt-10 md:pb-18">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-overline text-[var(--color-muted)] mb-2">About</p>
          <h1 className="text-heading-1 text-[var(--color-primary)] mb-5">
            A high schooler's field notes, kept in public
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-4 sm:space-y-5"
        >
          <p className="text-body text-[var(--color-secondary)]">
            I'm 16, from New Jersey. I've been going to India pretty regularly since I was 6.
            I'm hoping to study international relations or cultural studies in college.
          </p>
          <p className="text-body text-[var(--color-secondary)]">
            I write about the small, specific moments where good intentions meet the world.
            Most of what's here started with a question I couldn't quite answer at the
            time — about a curriculum, a fundraiser, a room full of students I was trying to
            learn about without getting in the way.
          </p>
          <p className="text-body text-[var(--color-secondary)]">
            Lately a lot of those questions keep leading back to South Asian studies — the
            histories, the languages, and how they show up in the spaces I spend time in.
            I'm still figuring most of this out. This site is where I'm keeping track of it.
          </p>
        </motion.div>

        {/* Quick Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-[var(--color-border)]"
        >
          <div>
            <p className="text-overline text-[var(--color-muted)] mb-1">Based in</p>
            <p className="text-heading-3 text-[var(--color-primary)]">New Jersey, USA</p>
          </div>
          <div>
            <p className="text-overline text-[var(--color-muted)] mb-1">Currently</p>
            <p className="text-heading-3 text-[var(--color-primary)]">11th Grade</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-8 pt-6 border-t border-[var(--color-border)]"
        >
          <h2 className="text-heading-2 text-[var(--color-primary)] mb-4">Want to get in touch?</h2>
          <p className="text-body text-[var(--color-secondary)] mb-6">
            Questions about a post, the project, or just to say hi.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] text-caption font-semibold hover:gap-3 transition-all duration-200"
          >
            Read the blog
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
