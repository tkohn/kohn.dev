import { Author } from '../../types/blog';

type Props = {
    author: string;
};

const authors = ((): Map<string, Author> => {
    const authors = new Map<string, Author>();
    authors.set('TorstenKohn', { name: 'Torsten Kohn', avatar: '/authors/torstenkohn.png' });
    return authors;
})();

const AuthorLayout = ({ author }: Props): JSX.Element => {
    const currentAuthor: Author = authors.get(author);
    return <>{currentAuthor.name}</>;
};

export default AuthorLayout;
