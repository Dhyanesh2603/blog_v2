import { useParams, Navigate } from 'react-router'
import ScrollProgress from '../components/ui/ScrollProgress'
import ArticleHeader from '../components/article/ArticleHeader'
import ArticleBody from '../components/article/ArticleBody'
import TableOfContents from '../components/article/TableOfContents'
import ShareButtons from '../components/article/ShareButtons'
import AuthorCard from '../components/article/AuthorCard'
import RelatedPosts from '../components/article/RelatedPosts'
import { getPostBySlug, getRelatedPosts } from '../data/posts'

export default function Article() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  if (post.status === 'forthcoming' || !post.body) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-overline text-[var(--color-accent)] mb-4">Forthcoming</p>
          <h1 className="text-heading-1 text-[var(--color-primary)] mb-6">{post.title}</h1>
          <p className="text-body text-[var(--color-secondary)] max-w-xl mx-auto">
            This piece is still being written. Check back soon.
          </p>
        </div>
      </div>
    )
  }

  const related = getRelatedPosts(slug, 3)

  return (
    <>
      <ScrollProgress />

      {/* Article Header */}
      <div className="pt-32 pb-8">
        <ArticleHeader post={post} />
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-16 relative">
          {/* Sticky TOC — Desktop only */}
          {post.tableOfContents && (
            <aside className="hidden lg:block flex-shrink-0">
              <TableOfContents items={post.tableOfContents} />
            </aside>
          )}

          {/* Main content column */}
          <div className="flex-1 min-w-0">
            <ArticleBody content={post.body} />

            {/* Share + Author */}
            <div className="max-w-[720px] mx-auto px-6 pb-16 space-y-8">
              <div className="flex items-center justify-between pt-8 border-t border-[var(--color-border)]">
                <p className="text-caption text-[var(--color-muted)]">Share this article</p>
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
              <AuthorCard author={post.author} />
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 border-t border-[var(--color-border)]">
          <RelatedPosts posts={related} />
        </section>
      )}
    </>
  )
}
