import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/blog';
import { format } from 'date-fns';

export const metadata = {
    title: 'Naseer\'s Blog',
};

export default async function BlogIndexPage() {
    const posts = getAllPostsMeta();

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 max-w-6xl mx-auto">
            <div className="mb-12 sm:mb-16 lg:mb-20">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-xl"></div>
                    <div className="relative">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                            Naseer's Blog
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
                        <p className="text-muted-foreground/90 leading-relaxed">
                            A collection of things that make me excited about technology, creativity, and life
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-6 grid gap-4 sm:gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="rounded-lg bg-card p-4 sm:p-5 transition-all hover:shadow-lg hover:shadow-accent/10">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            {post.cover ? (
                                <div className="relative h-32 w-full sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-md">
                                    <Image src={post.cover} alt="cover" fill className="object-cover" />
                                </div>
                            ) : null}

                            <div className="flex-1">
                                <h2 className="text-lg sm:text-xl font-semibold">
                                    <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-accent">
                                        {post.title}
                                    </Link>
                                </h2>
                                <time className="text-xs text-muted-foreground">{format(new Date(post.date), "do MMM yyyy")}</time>
                                {post.description ? (
                                    <p className="mt-2 text-sm sm:text-base text-foreground/90 leading-relaxed">{post.description}</p>
                                ) : null}
                                {post.tags && post.tags.length ? (
                                    <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
                                        {post.tags.map((t) => (
                                            <span key={t} className="rounded-full bg-muted/30 px-2 py-0.5 text-xs text-muted-foreground">
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


