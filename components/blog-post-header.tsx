import { PostData } from '../lib/posts';

interface BlogPostHeaderProps {
  post: PostData;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const readingTime = Math.ceil(post.content.replace(/<[^>]*>/g, '').length / 200);

  return (
    <header className="mb-8 pb-8 border-b border-gray-200">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <time dateTime={post.date}>{formattedDate}</time>
        <span>•</span>
        <span>{readingTime} min read</span>
        {post.draft && (
          <>
            <span>•</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
              Draft
            </span>
          </>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {post.title}
      </h1>

      {post.description && (
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          {post.description}
        </p>
      )}

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-900 rounded-full flex items-center justify-center text-white font-semibold">
            AM
          </div>
          <div>
            <p className="font-medium text-gray-900">Acevedo Miguel</p>
            <p className="text-sm text-gray-500">DevOps & Backend Engineer</p>
          </div>
        </div>

        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}