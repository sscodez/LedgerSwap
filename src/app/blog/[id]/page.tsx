import BlogDetailPage from '@/components/pages/BlogDetailPage';

interface BlogPostPageProps {
  params: {
    id: any;
  };
}

export default function BlogPost({ params }: any) {
  return <BlogDetailPage postId={params.id} />;
}

export const metadata = {
  title: 'Blog Post - LedgerSwap',
  description: 'Read the latest cryptocurrency news, trading tips, and market insights from LedgerSwap experts.',
};
