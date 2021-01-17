import { Metadata } from '../../types/blog';
import PageLayout from '../pageLayout';
import AuthorLayout from './authorLayout';
import CategoryLayout from './categoryLayout';
import DateLayout from './dateLayout';

type Props = {
    children: React.ReactNode;
    metadata: Metadata;
};

const PostLayout = ({ children, metadata }: Props): JSX.Element => {
    return (
        <>
            <PageLayout title={metadata.title}>
                <p>{metadata.excerpt}</p>
                {children}
                <div className="mt-8">
                    <DateLayout date={metadata.date} />
                    {' | '}
                    <AuthorLayout author={metadata.author} />
                    {' | '}
                    <CategoryLayout categories={metadata.categories} />
                </div>
            </PageLayout>
        </>
    );
};

export default PostLayout;
