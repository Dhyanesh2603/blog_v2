export function ArticleBody({ content, className = '' }) {
  return (
    <div className={`py-8 md:py-10 max-w-[720px] mx-auto px-6 ${className}`}>
      <div 
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}

export default ArticleBody;
