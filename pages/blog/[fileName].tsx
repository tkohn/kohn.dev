import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Metadata } from '../../types/blog';

const root = process.cwd();

export default function BlogPost({ mdxSource, metadata }: { mdxSource: unknown; metadata: Metadata }): JSX.Element {
    const content = hydrate(mdxSource);
    return (
        <>
            <h1>{metadata.title}</h1>
            {content}
        </>
    );
}

export async function getStaticPaths(): Promise<{ fallback: boolean; paths: { params: { fileName: string } }[] }> {
    return {
        fallback: false,
        paths: fs
            .readdirSync(path.join(root, 'data/blog'))
            .map((p) => ({ params: { fileName: p.replace(/\.mdx/, '') } })),
    };
}

export async function getStaticProps({
    params,
}: {
    params: {
        fileName: string;
    };
}): Promise<{ props: { mdxSource: string; metadata: Metadata } }> {
    const source = fs.readFileSync(path.join(root, 'data/blog', `${params.fileName}.mdx`), 'utf8');
    const { data, content } = matter(source);
    const mdxSource = await renderToString(content);
    return { props: { mdxSource, metadata: data as Metadata } };
}
