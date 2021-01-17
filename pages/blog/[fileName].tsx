import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from 'next-mdx-remote/types';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { Metadata } from '../../types/blog';
import Layout from '../../components/layout';
import PostLayout from '../../components/blog/postLayout';

const root = process.cwd();

export default function PostPage({
    mdxSource,
    metadata,
}: {
    mdxSource: MdxRemote.Source;
    metadata: Metadata;
}): JSX.Element {
    const content = hydrate(mdxSource);
    return (
        <>
            <Layout>
                <PostLayout metadata={metadata}>{content}</PostLayout>
            </Layout>
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
}): Promise<{
    props: {
        mdxSource: MdxRemote.Source;
        metadata: Metadata;
    };
}> {
    const file = fs.readFileSync(path.join(root, 'data/blog', `${params.fileName}.mdx`), 'utf8');
    const { content, data } = matter(file);
    const mdxSource = await renderToString(content);
    const categories = data?.categories?.split(',');
    return {
        props: {
            mdxSource: mdxSource,
            metadata: {
                ...(data as Metadata),
                categories: categories,
            },
        },
    };
}
