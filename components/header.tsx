import Link from 'next/link';

const Header = (): JSX.Element => {
    return (
        <header>
            <nav>
                <div className="flex justify-between items-center">
                    <Link href="/blog">
                        <a className="text-xl font-bold md:text-2xl">kohn.dev</a>
                    </Link>

                    <div className="flex">
                        <Link href="/blog">
                            <a className="my-1 hover:underline md:mx-4 md:my-0">Blog</a>
                        </Link>

                        <Link href="/about">
                            <a className="my-1 hover:underline md:mx-4 md:my-0">About</a>
                        </Link>

                        <Link href="/impressum">
                            <a className="my-1 hover:underline md:mx-4 md:my-0">Impressum</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
