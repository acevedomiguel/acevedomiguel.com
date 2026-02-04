import Link from 'next/link';

interface PostNavigationProps {
  nextPost?: { slug: string; title: string } | null;
  prevPost?: { slug: string; title: string } | null;
}

const PostNavigation = ({ nextPost, prevPost }: PostNavigationProps) => {
  if (!nextPost && !prevPost) {
    return null;
  }

  return (
    <nav 
      className="mt-12 pt-8 border-t border-gray-200"
      aria-label="Post navigation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {prevPost && (
          <div className="text-left">
            <div className="text-sm text-gray-500 mb-2">← Previous Post</div>
            <Link
              href={`/posts/${prevPost.slug}`}
              className="block text-lg font-medium text-gray-900 hover:text-sky-600 transition-colors"
            >
              {prevPost.title}
            </Link>
          </div>
        )}
        
        {nextPost && (
          <div className={`text-right ${prevPost ? '' : 'md:col-span-2'}`}>
            <div className="text-sm text-gray-500 mb-2">Next Post →</div>
            <Link
              href={`/posts/${nextPost.slug}`}
              className="block text-lg font-medium text-gray-900 hover:text-sky-600 transition-colors"
            >
              {nextPost.title}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PostNavigation;

