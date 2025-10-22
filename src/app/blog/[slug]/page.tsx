import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/blog';
import { format } from 'date-fns';

export async function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}


export async function generateMetadata({ params }: any) {
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

export default async function BlogPostPage({ params }: any) {
    const { slug } = await params
    const post = await getPostBySlug(slug);
    if (!post) {
        notFound();
    }

    const { content, frontmatter } = post;

    return (
        <article className="px-4 py-6 lg:px-10 max-w-5xl mx-auto">
            <header>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                    {frontmatter.title}
                </h1>
                <div className="my-2 h-px w-full bg-gradient-to-r from-accent to-primary" />
                <div className="flex justify-between">
                    <p className='text-xs md:text-sm text-muted-foreground'>{"Naseer Ahmed Khan"}</p>
                    <time className="block text-xs md:text-sm text-muted-foreground">
                        {format(new Date(frontmatter.date), "do MMM yyyy")}
                    </time>
                </div>

            </header>

            <div className="prose prose-invert mt-6 sm:mt-8 max-w-none prose-sm sm:prose-base">
                {content}
            </div>
        </article>
    );
}

