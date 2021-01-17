type Props = {
    categories: string[];
};

const CategoryLayout = ({ categories }: Props): JSX.Element => {
    return (
        <>
            {categories.map((category) => (
                <span key={category} className="px-1">
                    #{category}
                </span>
            ))}
        </>
    );
};

export default CategoryLayout;
