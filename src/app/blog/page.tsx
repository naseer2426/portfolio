import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/blog';

export const metadata = {
    title: 'Blog',
};

export default async function BlogIndexPage() {
    const posts = getAllPostsMeta();

    return (
        <div className="px-8 py-10 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Blog</h1>
            <p className="mt-2 text-muted-foreground">Thoughts, notes, and updates.</p>

            <div className="mt-8 grid gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="rounded-lg border border-border/40 bg-secondary/30 p-5 hover:border-primary transition-colors">
                        <div className="flex items-start gap-4">
                            {post.cover ? (
                                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md border border-border/40">
                                    <Image src={post.cover} alt="cover" fill className="object-cover" />
                                </div>
                            ) : null}

                            <div className="flex-1">
                                <h2 className="text-xl font-semibold">
                                    <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-primary">
                                        {post.title}
                                    </Link>
                                </h2>
                                <time className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</time>
                                {post.description ? (
                                    <p className="mt-2 text-sm text-foreground/90">{post.description}</p>
                                ) : null}
                                {post.tags && post.tags.length ? (
                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {post.tags.map((t) => (
                                            <span key={t} className="rounded-full border border-border/40 bg-background px-2 py-0.5 text-xs text-muted-foreground">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}


