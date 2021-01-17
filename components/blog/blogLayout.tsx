import { Post } from '../../types/blog';
import Link from 'next/link';
import HeadlineLayout from '../headline';

const BlogLayout = ({ postData }: { postData: Post[] }): JSX.Element => {
    return (
        <>
            <HeadlineLayout title="Blog" />
            <div className="mt-4 space-y-4">
                {postData.map((blogPost) => (
                    <div key={blogPost.fileName} className="py-3">
                        <div className="mt-2">
                            <Link href="/blog/[fileName]" as={`/blog/${blogPost.fileName}`}>
                                <a className="text-2xl text-gray-700 font-bold hover:underline">
                                    {blogPost.metadata.title}
                                </a>
                            </Link>
                            <p className="mt-2 text-gray-600">{blogPost.metadata.excerpt}</p>
                        </div>
                        <div className="mt-4">
                            <Link href="/blog/[fileName]" as={`/blog/${blogPost.fileName}`}>
                                <a className="text-green-700 hover:underline">Read more</a>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default BlogLayout;
