import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';

// Tailwind-like classes aligned with globals colors
const heading = 'font-bold tracking-tight text-foreground';
const paragraph = 'leading-7 text-foreground/90';
const link = 'text-accent underline-offset-4 hover:underline';
const codeInline = 'rounded bg-secondary px-1.5 py-0.5 text-foreground';
const pre = 'overflow-x-auto rounded-md bg-secondary p-4 text-foreground';
const blockquote = 'mt-6 border-l-4 border-primary/50 pl-6 italic text-foreground/80';
const list = 'my-4 ml-6 list-disc marker:text-accent';

export const MDXComponents = {
    h1: (props: any) => <h1 className={`mt-2 scroll-m-20 text-4xl ${heading}`} {...props} />,
    h2: (props: any) => <h2 className={`mt-10 scroll-m-20 text-3xl ${heading}`} {...props} />,
    h3: (props: any) => <h3 className={`mt-8 scroll-m-20 text-2xl ${heading}`} {...props} />,
    h4: (props: any) => <h4 className={`mt-8 scroll-m-20 text-xl ${heading}`} {...props} />,
    p: (props: any) => <p className={`mt-6 ${paragraph}`} {...props} />,
    a: ({ href = '#', children, ...rest }: { href?: string; children: ReactNode }) => (
        <Link href={href} className={link} {...rest as any}>
            {children}
        </Link>
    ),
    ul: (props: any) => <ul className={list} {...props} />,
    ol: (props: any) => <ol className={list.replace('list-disc', 'list-decimal')} {...props} />,
    li: (props: any) => <li className="my-1" {...props} />,
    code: (props: any) => <code className={codeInline} {...props} />,
    pre: (props: any) => <pre className={pre} {...props} />,
    blockquote: (props: any) => <blockquote className={blockquote} {...props} />,
    img: (props: any) => (
        // Allow MDX native <img>; prefer next/image when width/height known
        // eslint-disable-next-line @next/next/no-img-element
        <img loading="lazy" alt="" className="rounded-md border border-border" {...props} />
    ),
    Image: (props: any) => <Image {...props} className="rounded-md " />,
};

export type MDXComponentsType = typeof MDXComponents;


