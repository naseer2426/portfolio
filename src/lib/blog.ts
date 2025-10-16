import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/mdx/MDXComponents';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export type PostFrontmatter = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  cover?: string;
};

export type PostMeta = PostFrontmatter & {
  slug: string;
};

const contentDir = path.join(process.cwd(), 'content');

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
}

export function getPostMeta(slug: string): PostMeta | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(source);
  const fm = data as Partial<PostFrontmatter>;
  if (!fm.title || !fm.date) return null;
  return {
    slug,
    title: fm.title,
    date: fm.date,
    description: fm.description,
    tags: fm.tags,
    cover: fm.cover,
  } as PostMeta;
}

export function getAllPostsMeta(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostMeta(slug))
    .filter((m): m is PostMeta => Boolean(m))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);
  const frontmatter = data as PostFrontmatter;

  const mdx = await compileMDX<{ frontmatter: PostFrontmatter }>({
    source: content,
    components: MDXComponents as any,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        format: 'mdx',
      },
    },
  });

  return {
    slug,
    frontmatter,
    content: mdx.content,
  } as const;
}


