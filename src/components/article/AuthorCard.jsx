export function AuthorCard({ author }) {
  if (!author) return null;
  const name = typeof author === 'string' ? author : (author?.name || 'Siddarth Santosh');
  const bio = typeof author === 'object' && author?.bio ? author.bio : 'Writer and researcher documenting field notes, education, and community.';

  return (
    <div className="bg-[var(--color-elevated)] rounded-2xl p-6 border border-[var(--color-border)]">
      <h4 className="text-heading-3 text-[var(--color-primary)]">{name}</h4>
      <p className="text-body-sm text-[var(--color-secondary)] mt-1.5 leading-relaxed">
        {bio}
      </p>
    </div>
  );
}

export default AuthorCard;
