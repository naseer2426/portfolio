import type { ReactNode } from 'react';
import { Nunito_Sans } from 'next/font/google';

const font = Nunito_Sans({
    weight: ['300', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <section className={`${font.className}`}>
            {children}
        </section>
    );
}


