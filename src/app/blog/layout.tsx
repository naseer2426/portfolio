import type { ReactNode } from 'react';
import { Fira_Code } from 'next/font/google';

const font = Fira_Code({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <section className={font.className}>
            {children}
        </section>
    );
}


