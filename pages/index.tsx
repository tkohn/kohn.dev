import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { Metadata } from '../types/blog';

const root = process.cwd();

export default function IndexPage({
    postData,
}: {
    postData: [{ fileName: string; frontMatter: Metadata }];
}): JSX.Element {
    return (
        <>
            <h1>My Cool Blog</h1>
            <ul>
                {postData.map((data) => (
                    <li key="${data.fileName}">
                        <Link href="/blog/[fileName]" as={`/blog/${data.fileName}`}>
                            <a>{data.frontMatter.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export async function getStaticProps(): Promise<{
    props: {
        postData: { fileName: string; content: string; frontMatter: Metadata }[];
    };
}> {
    const contentRoot = path.join(root, 'data/blog');
    const postData = fs.readdirSync(contentRoot).map((p) => {
        const content = fs.readFileSync(path.join(contentRoot, p), 'utf8');
        return {
            fileName: p.replace(/\.mdx/, ''),
            content,
            frontMatter: matter(content).data as Metadata,
        };
    });
    return { props: { postData } };
}
