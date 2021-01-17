import HeadlineLayout from './headline';

type Props = {
    children: React.ReactNode;
    title: string;
};

const PageLayout = ({ children, title }: Props): JSX.Element => {
    return (
        <>
            <HeadlineLayout title={title} />
            <div className="mt-4 space-y-4">
                <article className="prose mt-2 max-w-none w-full">{children}</article>
            </div>
        </>
    );
};

export default PageLayout;
