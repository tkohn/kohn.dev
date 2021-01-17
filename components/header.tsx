import Link from 'next/link';

const Header = (): JSX.Element => {
    return (
        <header>
            <nav>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <a className="text-xl font-bold md:text-2xl">kohn.dev</a>
                    </Link>

                    <div className="flex">
                        <Link href="/">
                            <a className="my-1 mx-2 hover:underline">Blog</a>
                        </Link>

                        <Link href="/about">
                            <a className="my-1 mx-2 hover:underline">About</a>
                        </Link>

                        <Link href="/impressum">
                            <a className="my-1 mx-2 hover:underline">Impressum</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
