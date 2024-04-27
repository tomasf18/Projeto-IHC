import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow"></div>
                <Footer />
            </div>
        </>
    );
}

export default Home;