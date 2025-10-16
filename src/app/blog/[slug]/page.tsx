import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { MDXComponents } from '@/components/mdx/MDXComponents';

export async function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

type Params = { params: { slug: string } };

export async function generateMetadata({ params }: Params) {
    const { slug } = await params
    const post = await getPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.frontmatter.title,
        description: post.frontmatter.description,
        openGraph: {
            title: post.frontmatter.title,
            description: post.frontmatter.description,
            images: post.frontmatter.cover ? [post.frontmatter.cover] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: Params) {
    const { slug } = await params
    const post = await getPostBySlug(slug);
    if (!post) {
        notFound();
    }

    const { content, frontmatter } = post;

    return (
        <article className="px-8 py-10 max-w-5xl mx-auto">
            <header>
                <time className="mt-1 block text-sm text-muted-foreground">
                    {new Date(frontmatter.date).toLocaleDateString()}
                </time>
                <h1 className="text-5xl font-bold tracking-tight text-foreground">{frontmatter.title}</h1>
            </header>
            <div className="mt-2 h-px w-full bg-gradient-to-r from-accent to-primary" />

            <div className="prose prose-invert mt-8 max-w-none">
                {content}
            </div>
        </article>
    );
}
