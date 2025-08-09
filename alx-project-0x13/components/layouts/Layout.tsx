import {ReactComponentProps} from "@/interfaces";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

const Layout: React.FC<ReactComponentProps> = ({ children}) => {
    return (
        <>
            <Header />
                <main className="min-h-screen">
                    {children}
                </main>
            <Footer />
        </>
        

    )
};

export default Layout;