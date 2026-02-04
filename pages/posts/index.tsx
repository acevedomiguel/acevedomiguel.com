import { GetStaticProps } from 'next';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getPublishedPostsMetadata } from '../../lib/posts';
import { PostMetadata } from '../../lib/posts';

interface PostsPageProps {
  allPosts: PostMetadata[];
  currentPage: number;
  totalPages: number;
  currentTag: string | null;
}

const POSTS_PER_PAGE = 10;

export default function PostsPage({ allPosts, currentPage, totalPages, currentTag }: PostsPageProps) {
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [displayPosts, setDisplayPosts] = useState(allPosts.slice(0, POSTS_PER_PAGE));
  const [selectedTag, setSelectedTag] = useState(currentTag);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalFilteredPages, setTotalFilteredPages] = useState(totalPages);

  const allTags = Array.from(new Set(allPosts.flatMap(post => post.tags))).sort();

  useEffect(() => {
    let filtered = allPosts;

    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag));
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(query) ||
        post.description.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }

    setFilteredPosts(filtered);
    const pages = Math.ceil(filtered.length / POSTS_PER_PAGE);
    setTotalFilteredPages(pages);
    
    // Reset to first page when filters change
    setDisplayPosts(filtered.slice(0, POSTS_PER_PAGE));
  }, [allPosts, selectedTag, searchQuery]);

  const handlePageChange = (page: number) => {
    const start = (page - 1) * POSTS_PER_PAGE;
    const end = start + POSTS_PER_PAGE;
    setDisplayPosts(filteredPosts.slice(start, end));
  };

  const handleTagSelect = (tag: string | null) => {
    setSelectedTag(tag);
    setSearchQuery('');
    handlePageChange(1);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    handlePageChange(1);
  };

  // Simplified search component for now
  const SearchComponent = () => (
    <div className="max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search posts..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
        aria-label="Search posts"
      />
    </div>
  );

  // Simplified tag filter for now
  const TagFilterComponent = () => (
    <div className="mb-6">
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-sm font-medium text-gray-700">Filter by tag:</span>
        
        <button
          onClick={() => handleTagSelect(null)}
          className={`px-3 py-1 text-sm rounded-full transition-colors ${
            selectedTag === null ? 'bg-sky-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          type="button"
        >
          All Posts
        </button>

        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagSelect(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedTag === tag ? 'bg-sky-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            type="button"
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );

  // Simplified post card for now
  const BlogPostCard = ({ post }: { post: PostMetadata }) => (
    <article className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <header className="mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span>•</span>
          <span className="text-sky-600">Technical Blog</span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-900 mb-3">
          <a href={`/posts/${post.slug}`} className="hover:text-sky-600 transition-colors">
            {post.title}
          </a>
        </h2>
        
        <p className="text-gray-600 leading-relaxed">
          {post.description}
        </p>
      </header>

      {post.tags.length > 0 && (
        <footer className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <a
                key={tag}
                href={`/posts?tag=${encodeURIComponent(tag)}`}
                className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md transition-colors"
              >
                {tag}
              </a>
            ))}
          </div>
          
          <a
            href={`/posts/${post.slug}`}
            className="text-sky-600 hover:text-sky-700 text-sm font-medium inline-flex items-center gap-1"
          >
            Read more
          </a>
        </footer>
      )}
    </article>
  );

  // Simplified pagination for now
  const PaginationComponent = () => {
    if (totalFilteredPages <= 1) return null;

    const pageNumbers = [];
    const delta = 2;
    
    for (let i = Math.max(1, currentPage - delta); i <= Math.min(totalFilteredPages - 1, currentPage + delta); i++) {
      pageNumbers.push(i);
    }

    if (currentPage - delta > 2) {
      pageNumbers.push(1, '...');
    } else {
      pageNumbers.push(1);
    }

    pageNumbers.push(...pageNumbers);

    if (currentPage + delta < totalFilteredPages - 1) {
      pageNumbers.push('...', totalFilteredPages);
    } else if (currentPage + delta >= totalFilteredPages - 1) {
      if (!pageNumbers.includes(totalFilteredPages)) {
        pageNumbers.push(totalFilteredPages);
      }
    }

    return (
      <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          type="button"
          aria-label="Previous page"
        >
          ←
        </button>

        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-gray-500">
                ...
              </span>
            );
          } else {
            return (
              <button
                key={`page-${page}`}
                onClick={() => handlePageChange(page as number)}
                className={`px-3 py-2 text-sm font-medium border rounded-md transition-colors ${
                  currentPage === page
                    ? 'bg-sky-900 text-white border-sky-900'
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-50'
                }`}
                type="button"
                aria-label={`Go to page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            );
          }
        })}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalFilteredPages}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          type="button"
          aria-label="Next page"
        >
          →
        </button>
      </nav>
    );
  };

  return (
    <Layout pageType="generic">
      <Head>
        <title>Blog - Acevedo Miguel</title>
        <meta
          name="description"
          content="Technical blog posts by Acevedo Miguel covering DevOps, cloud computing, and software engineering."
        />
      </Head>
      <Header />
      <Container>
        <main id="main-content">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Thoughts and insights on DevOps, cloud computing, and software engineering.
                </p>
              </div>
              
              <SearchComponent />
              <TagFilterComponent />
            </header>

            {displayPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="mb-6">
                  <svg 
                    className="w-16 h-16 mx-auto text-gray-300 mb-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={1.5} 
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                    />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg mb-4">
                  {searchQuery || selectedTag 
                    ? 'No posts found matching your criteria.'
                    : 'No posts yet.'}
                </p>
                {(searchQuery || selectedTag) && (
                  <button
                    type="button"
                    onClick={() => {
                      handleTagSelect(null);
                      handleSearch('');
                    }}
                    className="mt-4 text-sky-600 hover:text-sky-700 underline text-sm font-medium"
                  >
                    Clear filters
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="space-y-12 mb-16">
                  {displayPosts.map((post, index) => (
                    <BlogPostCard key={`post-${index}`} post={post} />
                  ))}
                </div>

                <div className="flex justify-center">
                  <PaginationComponent />
                </div>
              </>
            )}
          </div>
        </main>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = getPublishedPostsMetadata();
  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const currentPage = 1;
  const currentTag = null;

  return {
    props: {
      allPosts,
      currentPage,
      totalPages,
      currentTag,
    },
  };
};