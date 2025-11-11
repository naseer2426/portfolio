import Link from 'next/link';
import Image from 'next/image';
import { getAllPostsMeta } from '@/lib/blog';
import { format } from 'date-fns';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export const metadata = {
    title: 'Naseer\'s Blog',
};

export default async function BlogIndexPage() {
    const posts = getAllPostsMeta();

    return (
        <div className="px-4 sm:px-8 py-4 max-w-6xl mx-auto">
            <Breadcrumb className="mb-6">
                <BreadcrumbList className="text-xs sm:text-sm">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="hover:text-accent">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-accent">Blog</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="mb-8 md:mb-12">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent/5 rounded-full blur-xl"></div>
                    <div className="relative">
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text">
                            Naseer's Blog
                        </h1>
                        <div className="w-1/4 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>
                        <p className="text-sm md:text-md text-muted-foreground/90 leading-relaxed">
                            A collection of things that make me incredibly excited
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {posts.map((post) => (
                    <article key={post.slug} className="group rounded-xl bg-card p-0 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 hover:border-accent/20 hover:-translate-y-1 overflow-hidden">
                        <div className="flex flex-col h-full">
                            {post.cover ? (
                                <div className="relative h-40 w-full overflow-hidden">
                                    <Image
                                        src={post.cover}
                                        alt="cover"
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ) : null}

                            <div className="flex-1 p-4 sm:p-5 flex flex-col">
                                <div className="mb-3">
                                    <time className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wide">
                                        {format(new Date(post.date), "MMM dd, yyyy")}
                                    </time>
                                </div>

                                <h2 className="text-lg sm:text-xl font-bold leading-tight mb-3 group-hover:text-accent transition-colors duration-200">
                                    <Link href={`/blog/${post.slug}`} className="text-foreground hover:text-accent">
                                        {post.title}
                                    </Link>
                                </h2>

                                {post.description ? (
                                    <p className="text-sm text-muted-foreground/90 leading-relaxed line-clamp-3 mb-4 flex-1">
                                        {post.description}
                                    </p>
                                ) : null}

                                {post.tags && post.tags.length ? (
                                    <div className="flex flex-wrap gap-1.5 mt-auto">
                                        {post.tags.map((t) => (
                                            <span key={t} className="inline-flex items-center rounded-full bg-accent/10 text-accent px-2.5 py-1 text-xs font-medium hover:bg-accent/20 transition-colors duration-200">
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


