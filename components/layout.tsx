import Footer from './footer';
import Header from './header';

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <div className="bg-gray-50 overflow-x-hidden overflow-y-scroll flex flex-col h-screen justify-between">
                <div className="bg-green-700 text-gray-50 py-4">
                    <div className="flex justify-center container mx-auto">
                        <div className="w-full lg:w-8/12 px-3">
                            <Header />
                        </div>
                    </div>
                </div>

                <div className="mb-auto py-8">
                    <div className="flex justify-center container mx-auto">
                        <div className="w-full lg:w-8/12 px-3">{children}</div>
                    </div>
                </div>

                <div className="flex justify-center container mx-auto">
                    <div className="w-full lg:w-8/12 px-3">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
