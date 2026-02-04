import Link from 'next/link';
import { PostMetadata } from '../lib/posts';

interface BlogPostCardProps {
  post: PostMetadata;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <header className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>•</span>
          <span className="text-sky-600">Technical Blog</span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          <Link 
            href={`/posts/${post.slug}`}
            className="hover:text-sky-600 transition-colors"
          >
            {post.title}
          </Link>
        </h2>
        
        <p className="text-gray-600 leading-relaxed">
          {post.description}
        </p>
      </header>

      {post.tags.length > 0 && (
        <footer className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/posts?tag=${encodeURIComponent(tag)}`}
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
          
          <Link
            href={`/posts/${post.slug}`}
            className="text-sky-600 hover:text-sky-700 text-sm font-medium inline-flex items-center gap-1"
          >
            Read more
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </Link>
        </footer>
      )}
    </article>
  );
};

export default BlogPostCard;