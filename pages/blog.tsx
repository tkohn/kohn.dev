import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, Metadata } from '../types/blog';
import Layout from '../components/layout';
import BlogLayout from '../components/blog/blogLayout';

const root = process.cwd();

export default function Blog({ postData }: { postData: Post[] }): JSX.Element {
    return (
        <>
            <Layout>
                <BlogLayout postData={postData} />
            </Layout>
        </>
    );
}

export async function getStaticProps(): Promise<{
    props: {
        postData: Post[];
    };
}> {
    const contentRoot = path.join(root, 'data/blog');
    const postData = fs.readdirSync(contentRoot).map((p) => {
        const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
        const file = matter(content);
        const categories = file.data?.categories?.split(',');
        return {
            fileName: p.replace(/\.mdx/, ''),
            metadata: {
                ...(file.data as Metadata),
                categories: categories,
            },
        };
    });
    return { props: { postData } };
}
