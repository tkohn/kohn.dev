type Props = {
    title: string;
};

const HeadlineLayout = ({ title }: Props): JSX.Element => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-700 md:text-2xl">{title}</h1>
        </div>
    );
};

export default HeadlineLayout;
