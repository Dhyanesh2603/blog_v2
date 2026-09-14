// ================================================================
// Blog Post Data — Siddarth Santosh Field Notes & Essays
// ================================================================

export const authors = {
  siddarth: {
    name: 'Siddarth Santosh',
    bio: "I'm 16, from New Jersey. I write about the small, specific moments where good intentions meet the world.",
    avatar: null,
  },
}

export const categories = [
  { id: 'all', label: 'All Articles' },
  { id: 'india-project', label: 'The India Project', color: '#2E5E80' },
  { id: 'family', label: 'Conversations with My Family', color: '#8C7335' },
  { id: 'culture', label: 'A Bit of South Asia', color: '#A65733' },
]

export const posts = [
  {
    id: 'bringing-connecting-math-concepts',
    slug: 'bringing-connecting-math-concepts',
    title: 'Bringing Connecting Math Concepts to a classroom in Bangalore',
    excerpt: 'Earlier this year I set out to fund a set of Direct Instruction math curricula for a school in Bangalore that serves students with autism. The program is highly scripted and evidence-based, but expensive.',
    category: 'india-project',
    categoryLabel: 'The India Project',
    coverImage: null, // Per spec: permanent solid color block on homepage; photos ONLY inside the blog post
    date: '2026-08-24',
    readTime: '6 min read',
    author: authors.siddarth,
    featured: true,
    chapter: 'Chapter 1',
    body: `
      <!-- Photo 1: Hero Handover -->
      <figure class="my-8">
        <div style="background-color: #DCE9F0; border-radius: 16px; overflow: hidden; padding: 12px; display: flex; justify-content: center;">
          <img 
            src="/images/blog/hero-curriculum-handover.jpg" 
            alt="Siddarth Santosh with educators in Bangalore holding the Connecting Math Concepts curriculum textbooks"
            style="max-height: 520px; width: 100%; object-fit: contain; border-radius: 12px;"
          />
        </div>
        <figcaption style="font-size: 14px; color: var(--color-muted); text-align: center; margin-top: 10px;">
          Connecting Math Concepts Levels A–C arriving at the center in Bangalore.
        </figcaption>
      </figure>

      <p class="text-body" style="font-size: 20px; line-height: 1.8; color: var(--color-primary);">
        Earlier this year I set out to fund a set of Direct Instruction math curricula for a school in Bangalore that serves students with autism. The program, Connecting Math Concepts, is highly scripted and evidence-based, but it's also expensive, and the school didn't have it.
      </p>

      <h2 id="section-fundraising" class="text-heading-2 mt-12 mb-4">Community Support & Fundraising</h2>
      <p>
        Over about three weeks, friends and family chipped in, and one local educational company made a larger contribution that got us most of the way there. It was enough to purchase Levels A through C, spanning kindergarten through second grade, along with the supplemental materials therapists would need to run the program.
      </p>

      <!-- Stat Highlight Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 16px; margin: 2rem 0; padding: 1.5rem; background: var(--color-elevated); border: 1px solid var(--color-border); border-radius: 16px;">
        <div>
          <p style="font-size: 28px; font-weight: 700; color: var(--color-series-blue); line-height: 1.1;">3 weeks</p>
          <p style="font-size: 13px; color: var(--color-secondary); margin-top: 4px;">to fund</p>
        </div>
        <div>
          <p style="font-size: 28px; font-weight: 700; color: var(--color-series-blue); line-height: 1.1;">Levels A–C</p>
          <p style="font-size: 13px; color: var(--color-secondary); margin-top: 4px;">K through grade 2</p>
        </div>
        <div>
          <p style="font-size: 28px; font-weight: 700; color: var(--color-series-blue); line-height: 1.1;">1 week</p>
          <p style="font-size: 13px; color: var(--color-secondary); margin-top: 4px;">on the ground</p>
        </div>
      </div>

      <!-- Exact Fundraiser Link Button -->
      <div style="margin: 2rem 0;">
        <a 
          href="https://ssfundraiserbmi.netlify.app/" 
          target="_blank" 
          rel="noopener" 
          style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 24px; border-radius: 9999px; background: var(--color-primary); color: var(--color-inverse); font-size: 14px; font-weight: 600; text-decoration: none; transition: opacity 0.2s;"
        >
          View the original fundraiser page (now closed) &rarr;
        </a>
      </div>

      <!-- Photo 2: Welcome to Center -->
      <h2 id="section-arrival" class="text-heading-2 mt-12 mb-4">Bangalore Arrival</h2>
      <figure class="my-8">
        <div style="background-color: #DCE9F0; border-radius: 16px; overflow: hidden; padding: 12px; display: flex; justify-content: center;">
          <img 
            src="/images/blog/center-welcome-bangalore.jpg" 
            alt="Siddarth being welcomed with a gift at Behavior Momentum India HRBR-Center Bangalore"
            style="max-height: 520px; width: 100%; object-fit: contain; border-radius: 12px;"
          />
        </div>
        <figcaption style="font-size: 14px; color: var(--color-muted); text-align: center; margin-top: 10px;">
          Arrival at the Behavior Momentum India HRBR-Center in Bangalore.
        </figcaption>
      </figure>

      <p>
        I spent a week in Bangalore helping the therapists unpack and set up the materials, sorting kits, organizing supplemental pieces, and learning about how each level was sequenced. That week is also where the project started to change shape.
      </p>

      <!-- Photo 3: Unpacking and Sorting -->
      <h2 id="section-curriculum" class="text-heading-2 mt-12 mb-4">Unpacking & Sorting Curriculum</h2>
      <figure class="my-8">
        <div style="background-color: #DCE9F0; border-radius: 16px; overflow: hidden; padding: 12px; display: flex; justify-content: center;">
          <img 
            src="/images/blog/unpacking-math-materials.jpg" 
            alt="Reviewing and organizing Connecting Math Concepts teacher manuals and worksheets in Bangalore"
            style="max-height: 520px; width: 100%; object-fit: contain; border-radius: 12px;"
          />
        </div>
        <figcaption style="font-size: 14px; color: var(--color-muted); text-align: center; margin-top: 10px;">
          Sorting through the curriculum guides, answer keys, and student materials.
        </figcaption>
      </figure>

      <blockquote style="border-left: 3px solid var(--color-series-blue); padding-left: 1.5rem; margin: 2.5rem 0; font-style: italic; font-size: 20px; line-height: 1.7; color: var(--color-primary);">
        "The curriculum was built somewhere else, for someone else. Watching it land in this classroom raised a question I hadn't planned on asking."
      </blockquote>

      <!-- Photo 4: Classroom Learning Session -->
      <h2 id="section-reflection" class="text-heading-2 mt-12 mb-4">Classroom Learning Session & Next Steps</h2>
      <p>
        That question turned into a second, ongoing piece of the project: adapting a Direct Instruction reading program to be more culturally responsive for students in India. I wrote about how that started, and what &ldquo;culturally responsive&rdquo; ended up meaning in practice, in the next post.
      </p>

      <figure class="my-8">
        <div style="background-color: #DCE9F0; border-radius: 16px; overflow: hidden; padding: 12px; display: flex; justify-content: center;">
          <img 
            src="/images/blog/classroom-learning-session.jpg" 
            alt="Therapists and young learners in Bangalore working together with math manipulatives and curriculum materials"
            style="max-height: 520px; width: 100%; object-fit: contain; border-radius: 12px;"
          />
        </div>
        <figcaption style="font-size: 14px; color: var(--color-muted); text-align: center; margin-top: 10px;">
          Therapists and students in session, working through math concepts together.
        </figcaption>
      </figure>

      <div class="callout" style="background: var(--color-series-blue-soft); border: 1px solid color-mix(in srgb, var(--color-series-blue) 25%, transparent); border-radius: 16px; padding: 1.5rem; margin: 2rem 0;">
        <strong style="color: var(--color-series-blue);">Next in this thread:</strong>
        <p style="margin-top: 0.5rem; color: var(--color-secondary);">
          Ensuring a strong reading curriculum fits the classroom it serves — adapting Direct Instruction reading materials to be culturally responsive for classrooms across South Asia.
        </p>
      </div>
    `,
    tableOfContents: [
      { id: 'section-fundraising', title: 'Community Support & Funding' },
      { id: 'section-arrival', title: 'Bangalore Arrival' },
      { id: 'section-curriculum', title: 'Unpacking Curriculum' },
      { id: 'section-reflection', title: 'Classroom Sessions & Next Steps' },
    ],
  },
  {
    id: 'ensuring-reading-curriculum',
    slug: 'ensuring-reading-curriculum',
    title: 'Ensuring a strong reading curriculum fits the classroom it serves',
    excerpt: 'Adapting Direct Instruction reading materials to be culturally responsive for classrooms across South Asia.',
    category: 'india-project',
    categoryLabel: 'The India Project',
    coverImage: null,
    date: '2026-09-10',
    readTime: '8 min read',
    author: authors.siddarth,
    featured: false,
    chapter: 'Chapter 2',
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'what-he-remembers-first',
    slug: 'what-he-remembers-first',
    title: 'What he remembers first',
    excerpt: 'Memories of early schooling, community traditions, and transitions across decades.',
    category: 'family',
    categoryLabel: 'Conversations with My Family',
    coverImage: null,
    date: '2026-07-15',
    readTime: '5 min read',
    author: authors.siddarth,
    featured: false,
    chapter: 'Grandpa, pt. 1',
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'what-hed-do-differently',
    slug: 'what-hed-do-differently',
    title: "What he'd do differently",
    excerpt: 'Reflections on family decisions, heritage, and looking back from eighty.',
    category: 'family',
    categoryLabel: 'Conversations with My Family',
    coverImage: null,
    date: '2026-07-22',
    readTime: '7 min read',
    author: authors.siddarth,
    featured: false,
    chapter: 'Grandpa, pt. 2',
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'leaving-home-first-time',
    slug: 'leaving-home-first-time',
    title: 'Leaving home the first time',
    excerpt: 'A father recalls the weight of leaving everything familiar behind.',
    category: 'family',
    categoryLabel: 'Conversations with My Family',
    coverImage: null,
    date: '2026-08-01',
    readTime: '6 min read',
    author: authors.siddarth,
    featured: false,
    chapter: 'Dad, pt. 1',
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'library-new-shelf-mates',
    slug: 'library-new-shelf-mates',
    title: 'Getting our library some new shelf mates',
    excerpt: 'Bringing South Asian authors and multilingual collections into local town libraries.',
    category: 'culture',
    categoryLabel: 'A Bit of South Asia',
    coverImage: null,
    date: '2026-06-20',
    readTime: '4 min read',
    author: authors.siddarth,
    featured: false,
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'starting-space-belief-systems',
    slug: 'starting-space-belief-systems',
    title: 'Starting a space to talk about belief systems',
    excerpt: 'Creating honest, inclusive student discussion forums around diverse faiths and traditions.',
    category: 'culture',
    categoryLabel: 'A Bit of South Asia',
    coverImage: null,
    date: '2026-06-28',
    readTime: '5 min read',
    author: authors.siddarth,
    featured: false,
    body: null,
    status: 'forthcoming',
  },
  {
    id: 'bringing-diwali-to-town',
    slug: 'bringing-diwali-to-town',
    title: 'Bringing Diwali to town',
    excerpt: 'How a local celebration became a bridge between communities.',
    category: 'culture',
    categoryLabel: 'A Bit of South Asia',
    coverImage: null,
    date: '2026-07-05',
    readTime: '4 min read',
    author: authors.siddarth,
    featured: false,
    body: null,
    status: 'forthcoming',
  },
]

export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug)
}

export function getPostsByCategory(categoryId) {
  if (categoryId === 'all') return posts
  return posts.filter(p => p.category === categoryId)
}

export function getFeaturedPost() {
  return posts.find(p => p.featured)
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = getPostBySlug(currentSlug)
  if (!current) return posts.slice(0, limit)
  return posts
    .filter(p => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}
