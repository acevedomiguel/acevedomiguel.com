import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';
import Container from '../../components/container';
import Header from '../../components/header';
import Layout from '../../components/layout';
import { getPostData, getAllPostSlugs, getAllPostsMetadata } from '../../lib/posts';
import { PostData } from '../../lib/posts';
import BlogPostHeader from '../../components/blog-post-header';
import PostNavigation from '../../components/post-navigation';

interface BlogPostPageProps {
  post: PostData;
  nextPost?: { slug: string; title: string } | null;
  prevPost?: { slug: string; title: string } | null;
}

export default function BlogPostPage({ post, nextPost, prevPost }: BlogPostPageProps) {
  return (
    <Layout pageType="generic">
      <Head>
        <title>{post.title} - Acevedo Miguel</title>
        <meta name="description" content={post.description} />
        <meta name="author" content="Acevedo Miguel" />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://acevedomiguel.com/posts/${post.slug}`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        
        {/* Draft posts should not be indexed */}
        {post.draft && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://acevedomiguel.com/posts/${post.slug}`} />
      </Head>
      
      <Header />
      <Container>
        <main id="main-content">
          <article className="max-w-4xl mx-auto px-4 py-8">
            <BlogPostHeader post={post} />
            
            <div 
              className="prose prose-lg prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            <PostNavigation 
              nextPost={nextPost}
              prevPost={prevPost}
            />
          </article>
        </main>
      </Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    return {
      notFound: true,
    };
  }

  try {
    const post = await getPostData(params.slug as string);
    const allPosts = getAllPostsMetadata();
    
    // Find next and previous posts (only published posts)
    const publishedPosts = allPosts.filter(p => !p.draft);
    const currentIndex = publishedPosts.findIndex(p => p.slug === post.slug);
    
    let nextPost = null;
    let prevPost = null;
    
    if (currentIndex > 0) {
      const prev = publishedPosts[currentIndex - 1];
      prevPost = { slug: prev.slug, title: prev.title };
    }
    
    if (currentIndex < publishedPosts.length - 1) {
      const next = publishedPosts[currentIndex + 1];
      nextPost = { slug: next.slug, title: next.title };
    }

    return {
      props: {
        post,
        nextPost,
        prevPost,
      },
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return {
      notFound: true,
    };
  };
};